import asyncio
import traceback

from app.main import create_app


def main():
    app = create_app()
    print("APP_CREATED", app)

    async def run_startup():
        print("Running startup handlers...")
        for i, fn in enumerate(app.router.on_startup or []):
            print(f"Running startup handler #{i}: {fn}")
            try:
                r = fn()
                if asyncio.iscoroutine(r):
                    await r
            except Exception:
                print("Exception in startup handler:")
                traceback.print_exc()
                raise

    try:
        asyncio.run(run_startup())
        print("All startup handlers completed successfully")
    except Exception as e:
        print("Startup failed:", e)


if __name__ == "__main__":
    main()
