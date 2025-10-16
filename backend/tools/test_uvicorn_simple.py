from fastapi import FastAPI
import uvicorn

app = FastAPI()


@app.get("/ping")
def ping():
    return {"ok": True}


if __name__ == '__main__':
    print('Starting simple uvicorn server...')
    uvicorn.run(app, host='127.0.0.1', port=9001, log_level='debug')
