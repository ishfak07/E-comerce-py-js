import React, { useState, useCallback, useRef, useEffect } from 'react'
import Cropper from 'react-easy-crop'
import { removeBackground } from '@imgly/background-removal'
import { toast } from '../lib/toast'

interface ImageEditorProps {
  imageSrc: string
  onSave: (editedImage: Blob) => void
  onCancel: () => void
}

interface CropArea {
  x: number
  y: number
  width: number
  height: number
}

export default function ImageEditor({ imageSrc, onSave, onCancel }: ImageEditorProps) {
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<CropArea | null>(null)
  const [rotation, setRotation] = useState(0)
  const [isProcessing, setIsProcessing] = useState(false)
  const [backgroundRemoved, setBackgroundRemoved] = useState(false)
  const [processedImage, setProcessedImage] = useState<string | null>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Check browser compatibility for background removal
  const isBackgroundRemovalSupported = () => {
    try {
      const canvas = document.createElement('canvas')
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
      return !!gl
    } catch (e) {
      return false
    }
  }

  // Simple fallback background removal using canvas (for basic cases)
  const simpleBackgroundRemoval = async (imageSrc: string): Promise<string> => {
    return new Promise((resolve, reject) => {
      const img = new Image()
      img.crossOrigin = 'anonymous'
      img.onload = () => {
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')
        if (!ctx) {
          reject(new Error('Canvas not supported'))
          return
        }

        canvas.width = img.width
        canvas.height = img.height
        ctx.drawImage(img, 0, 0)

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
        const data = imageData.data

        // Simple background removal: make pixels with low saturation transparent
        // This is a very basic approach and won't work well for complex backgrounds
        for (let i = 0; i < data.length; i += 4) {
          const r = data[i]
          const g = data[i + 1]
          const b = data[i + 2]

          // Calculate brightness and saturation
          const max = Math.max(r, g, b)
          const min = Math.min(r, g, b)
          const brightness = (max + min) / 2
          const saturation = max === 0 ? 0 : (max - min) / max

          // If pixel is bright and unsaturated (likely background), make it transparent
          if (brightness > 200 && saturation < 0.1) {
            data[i + 3] = 0 // Set alpha to 0
          }
        }

        ctx.putImageData(imageData, 0, 0)
        resolve(canvas.toDataURL('image/png'))
      }
      img.onerror = () => reject(new Error('Failed to load image'))
      img.src = imageSrc
    })
  }
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onCancel()
      } else if (e.key === 'Enter' && e.ctrlKey) {
        handleSave()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onCancel])

  const onCropComplete = useCallback((croppedArea: any, croppedAreaPixels: CropArea) => {
    setCroppedAreaPixels(croppedAreaPixels)
  }, [])

  const getCroppedImg = useCallback(async (
    imageSrc: string,
    pixelCrop: CropArea,
    rotation = 0
  ): Promise<string> => {
    const image = new Image()
    image.src = imageSrc
    await new Promise((resolve) => {
      image.onload = resolve
    })

    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')

    if (!ctx) {
      throw new Error('No 2d context')
    }

    const maxSize = Math.max(image.width, image.height)
    const safeArea = 2 * ((maxSize / 2) * Math.sqrt(2))

    canvas.width = safeArea
    canvas.height = safeArea

    ctx.translate(safeArea / 2, safeArea / 2)
    ctx.rotate((rotation * Math.PI) / 180)
    ctx.translate(-safeArea / 2, -safeArea / 2)

    ctx.drawImage(
      image,
      safeArea / 2 - image.width * 0.5,
      safeArea / 2 - image.height * 0.5
    )

    const data = ctx.getImageData(0, 0, safeArea, safeArea)

    const newCanvas = document.createElement('canvas')
    newCanvas.width = pixelCrop.width
    newCanvas.height = pixelCrop.height

    const newCtx = newCanvas.getContext('2d')
    if (!newCtx) {
      throw new Error('No 2d context')
    }

    newCtx.putImageData(
      data,
      0 - safeArea / 2 + image.width * 0.5 - pixelCrop.x,
      0 - safeArea / 2 + image.height * 0.5 - pixelCrop.y
    )

    return new Promise((resolve) => {
      newCanvas.toBlob((blob) => {
        if (blob) {
          resolve(URL.createObjectURL(blob))
        }
      }, 'image/jpeg', 0.95)
    })
  }, [])

  const handleRemoveBackground = async () => {
    if (!imageSrc) return

    // Check browser compatibility for background removal
    const isBackgroundRemovalSupported = () => {
      try {
        const canvas = document.createElement('canvas')
        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
        return !!gl
      } catch (e) {
        return false
      }
    }

    setIsProcessing(true)
    try {
      let blob: Blob
      let url: string

      // Try AI-based background removal first
      if (isBackgroundRemovalSupported()) {
        try {
          // Convert imageSrc to blob if it's a data URL or object URL
          let imageToProcess: string | Blob = imageSrc

          // If it's an object URL (blob URL), we need to fetch it first
          if (imageSrc.startsWith('blob:')) {
            const response = await fetch(imageSrc)
            imageToProcess = await response.blob()
          }

          blob = await removeBackground(imageToProcess)
          url = URL.createObjectURL(blob)
        } catch (aiError) {
          console.warn('AI background removal failed, trying fallback:', aiError)
          // Fallback to simple method
          url = await simpleBackgroundRemoval(imageSrc)
        }
      } else {
        // Use simple fallback method
        console.log('AI background removal not supported, using fallback')
        url = await simpleBackgroundRemoval(imageSrc)
      }

      setProcessedImage(url)
      setBackgroundRemoved(true)
      toast('Background removed successfully!', 'success')
    } catch (error) {
      console.error('Background removal failed:', error)
      // More specific error handling
      let errorMessage = 'Background removal failed. '

      if (error instanceof Error) {
        if (error.message.includes('WebGL') || error.message.includes('WebGPU')) {
          errorMessage += 'Your browser may not support the required graphics acceleration. Try using a modern browser like Chrome or Edge.'
        } else if (error.message.includes('CORS')) {
          errorMessage += 'The image cannot be processed due to security restrictions.'
        } else if (error.message.includes('format')) {
          errorMessage += 'The image format is not supported.'
        } else {
          errorMessage += 'Please try again or use a different image.'
        }
      }

      alert(errorMessage + '\n\nYou can still crop and resize your image.')
    } finally {
      setIsProcessing(false)
    }
  }

  const handleResize = async (width: number, height: number) => {
    const img = new Image()
    img.src = processedImage || imageSrc
    await new Promise((resolve) => {
      img.onload = resolve
    })

    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = width
    canvas.height = height

    ctx.drawImage(img, 0, 0, width, height)
    const resizedUrl = canvas.toDataURL('image/jpeg', 0.95)
    setProcessedImage(resizedUrl)
  }

  const handleCrop = async () => {
    if (!croppedAreaPixels) return

    try {
      const croppedImageUrl = await getCroppedImg(
        processedImage || imageSrc,
        croppedAreaPixels,
        rotation
      )
      setProcessedImage(croppedImageUrl)
    } catch (error) {
      console.error('Cropping failed:', error)
    }
  }

  const handleSave = async () => {
    if (!processedImage && !croppedAreaPixels) {
      // No edits made, use original
      const response = await fetch(imageSrc)
      const blob = await response.blob()
      onSave(blob)
      return
    }

    let finalImageUrl = processedImage || imageSrc

    // Apply crop if not already applied
    if (croppedAreaPixels && !processedImage) {
      finalImageUrl = await getCroppedImg(imageSrc, croppedAreaPixels, rotation)
    }

    const response = await fetch(finalImageUrl)
    const blob = await response.blob()
    onSave(blob)
  }

  const resetImage = () => {
    setProcessedImage(null)
    setBackgroundRemoved(false)
    setCrop({ x: 0, y: 0 })
    setZoom(1)
    setRotation(0)
  }

  return (
    <div className="image-editor-modal">
      <div className="image-editor-overlay" onClick={onCancel}></div>
      <div className="image-editor-content">
        <div className="image-editor-header">
          <h3>Edit Profile Picture</h3>
          <button className="close-btn" onClick={onCancel}>×</button>
        </div>

        <div className="image-editor-body">
          <div className="image-preview">
            {!processedImage ? (
              <Cropper
                image={imageSrc}
                crop={crop}
                zoom={zoom}
                aspect={1}
                onCropChange={setCrop}
                onZoomChange={setZoom}
                onCropComplete={onCropComplete}
                cropShape="round"
                showGrid={false}
              />
            ) : (
              <div className="processed-image-container">
                <img src={processedImage} alt="Processed" className="processed-image" />
              </div>
            )}
            {isProcessing && (
              <div className="processing-overlay">
                <div className="processing-content">
                  <div className="processing-spinner"></div>
                  <div className="processing-text">Removing background...</div>
                  <div className="processing-method">
                    Using {isBackgroundRemovalSupported() ? 'AI-powered' : 'basic'} removal
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="editor-controls">
            {!processedImage && (
              <>
                <div className="control-group">
                  <label>Zoom: {zoom.toFixed(1)}x</label>
                  <input
                    type="range"
                    min="1"
                    max="3"
                    step="0.1"
                    value={zoom}
                    onChange={(e) => setZoom(Number(e.target.value))}
                  />
                </div>

                <div className="control-group">
                  <label>Rotation: {rotation}°</label>
                  <input
                    type="range"
                    min="-180"
                    max="180"
                    step="15"
                    value={rotation}
                    onChange={(e) => setRotation(Number(e.target.value))}
                  />
                </div>

                <button
                  className="editor-btn"
                  onClick={handleCrop}
                  disabled={!croppedAreaPixels}
                >
                  Apply Crop
                </button>
              </>
            )}

            <div className="control-group">
              <button
                className="editor-btn secondary"
                onClick={handleRemoveBackground}
                disabled={isProcessing || backgroundRemoved}
                title={!isBackgroundRemovalSupported() ? "Using basic background removal (AI not supported in this browser)" : "Remove background using AI"}
              >
                {isProcessing ? (
                  <>
                    <div className="loading-spinner"></div>
                    Removing...
                  </>
                ) : backgroundRemoved ? (
                  'Background Removed'
                ) : (
                  <>
                    Remove Background
                    {!isBackgroundRemovalSupported() && <span className="bg-removal-note"> (Basic)</span>}
                  </>
                )}
              </button>
            </div>

            <div className="control-group">
              <label>Resize:</label>
              <div className="resize-options">
                <button className="editor-btn small" onClick={() => handleResize(256, 256)}>
                  256×256
                </button>
                <button className="editor-btn small" onClick={() => handleResize(512, 512)}>
                  512×512
                </button>
                <button className="editor-btn small" onClick={() => handleResize(1024, 1024)}>
                  1024×1024
                </button>
              </div>
            </div>

            <div className="control-group">
              <button className="editor-btn secondary" onClick={resetImage}>
                Reset
              </button>
            </div>
          </div>
        </div>

        <div className="image-editor-footer">
          <button className="editor-btn cancel" onClick={onCancel}>
            Cancel
          </button>
          <button className="editor-btn primary" onClick={handleSave}>
            Save Changes
          </button>
        </div>
      </div>

      <style>{`
        .image-editor-modal {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .image-editor-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(4px);
        }

        .image-editor-content {
          position: relative;
          background: white;
          border-radius: 16px;
          width: 90%;
          max-width: 800px;
          max-height: 90vh;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        }

        .image-editor-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 24px;
          border-bottom: 1px solid #e5e7eb;
        }

        .image-editor-header h3 {
          margin: 0;
          font-size: 20px;
          font-weight: 600;
          color: #111827;
        }

        .close-btn {
          background: none;
          border: none;
          font-size: 24px;
          cursor: pointer;
          color: #6b7280;
          padding: 0;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 6px;
          transition: all 0.2s;
        }

        .close-btn:hover {
          background: #f3f4f6;
          color: #374151;
        }

        .image-editor-body {
          display: flex;
          gap: 24px;
          padding: 24px;
          max-height: calc(90vh - 140px);
          overflow-y: auto;
        }

        .image-preview {
          flex: 1;
          position: relative;
          height: 400px;
          border-radius: 12px;
          overflow: hidden;
          background: #f9fafb;
          border: 2px dashed #d1d5db;
        }

        .processed-image-container {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .processed-image {
          max-width: 100%;
          max-height: 100%;
          border-radius: 8px;
          object-fit: contain;
        }

        .processing-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(2px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
        }

        .processing-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          padding: 20px;
          background: rgba(255, 255, 255, 0.95);
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .processing-spinner {
          width: 32px;
          height: 32px;
          border: 3px solid #e5e7eb;
          border-top: 3px solid #3b82f6;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        .processing-text {
          font-size: 14px;
          font-weight: 500;
          color: #374151;
          text-align: center;
        }

        .processing-method {
          font-size: 12px;
          color: #6b7280;
          margin-top: 4px;
        }

        .editor-controls {
          width: 250px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .control-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .control-group label {
          font-size: 14px;
          font-weight: 500;
          color: #374151;
        }

        .control-group input[type="range"] {
          width: 100%;
          height: 6px;
          border-radius: 3px;
          background: #e5e7eb;
          outline: none;
          -webkit-appearance: none;
        }

        .control-group input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        .editor-btn {
          padding: 10px 16px;
          border: 1px solid #d1d5db;
          border-radius: 8px;
          background: white;
          color: #374151;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
        }

        .editor-btn:hover:not(:disabled) {
          background: #f9fafb;
          border-color: #9ca3af;
        }

        .editor-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .editor-btn.primary {
          background: #3b82f6;
          border-color: #3b82f6;
          color: white;
        }

        .editor-btn.primary:hover:not(:disabled) {
          background: #2563eb;
        }

        .editor-btn.secondary {
          background: #f3f4f6;
          border-color: #d1d5db;
        }

        .editor-btn.cancel {
          background: #fef2f2;
          border-color: #fecaca;
          color: #dc2626;
        }

        .editor-btn.cancel:hover:not(:disabled) {
          background: #fee2e2;
        }

        .editor-btn.small {
          padding: 6px 12px;
          font-size: 12px;
        }

        .resize-options {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .image-editor-footer {
          display: flex;
          justify-content: flex-end;
          gap: 12px;
          padding: 20px 24px;
          border-top: 1px solid #e5e7eb;
          background: #f9fafb;
        }

        .bg-removal-note {
          font-size: 11px;
          color: #6b7280;
          margin-left: 4px;
        }

        .loading-spinner {
          width: 16px;
          height: 16px;
          border: 2px solid #e5e7eb;
          border-top: 2px solid #3b82f6;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          display: inline-block;
          margin-right: 8px;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}