from fastapi import FastAPI
app = FastAPI()

@app.get('/ping')
def ping():
    return {'ok': True}

if __name__ == '__main__':
    import uvicorn
    # run directly with the app object to avoid import-by-string resolution
    uvicorn.run(app, host='127.0.0.1', port=9000, log_level='info')
