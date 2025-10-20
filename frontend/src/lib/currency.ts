/**
 * Currency formatting utility for Sri Lankan Rupees (LKR)
 * 
 * This file provides consistent currency formatting across the application.
 * All prices are displayed in Sri Lankan Rupees (LKR).
 */

/**
 * Formats a number as Sri Lankan Rupees currency
 * @param amount - The numeric amount to format
 * @param options - Optional formatting options
 * @returns Formatted currency string (e.g., "LKR 1,234.50")
 */
export function formatLKR(amount: number, options?: {
  includeDecimals?: boolean
  includeCommas?: boolean
}): string {
  const { includeDecimals = true, includeCommas = true } = options || {}
  
  // Ensure we have a valid number
  const safeAmount = Number.isFinite(amount) ? amount : 0
  
  // Format with decimals
  const formatted = includeDecimals 
    ? safeAmount.toFixed(2) 
    : Math.round(safeAmount).toString()
  
  // Add thousand separators if requested
  const withCommas = includeCommas
    ? formatted.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    : formatted
  
  return `LKR ${withCommas}`
}

/**
 * Formats a number as currency without the LKR prefix
 * Useful for input fields or compact displays
 */
export function formatAmount(amount: number, decimals = 2): string {
  const safeAmount = Number.isFinite(amount) ? amount : 0
  return safeAmount.toFixed(decimals)
}

/**
 * Parses a currency string and returns the numeric value
 * Handles strings like "LKR 1,234.50" or "1234.50"
 */
export function parseCurrency(value: string): number {
  // Remove currency symbols, commas, and spaces
  const cleaned = value.replace(/[LKR,\s]/gi, '')
  const parsed = parseFloat(cleaned)
  return Number.isFinite(parsed) ? parsed : 0
}

/**
 * Constants for currency configuration
 */
export const CURRENCY = {
  code: 'LKR',
  symbol: 'LKR',
  name: 'Sri Lankan Rupee',
  country: 'Sri Lanka',
  countryCode: 'LK',
} as const

export default formatLKR
