import asyncio
from backend.app.main import create_app

app = create_app()

async def run_startup():
    try:
        # Use lifespan to run startup events
        async with app.router.lifespan_context(app):
            print('startup events executed')
    except Exception as e:
        print('startup error:', repr(e))

if __name__ == '__main__':
    asyncio.run(run_startup())
