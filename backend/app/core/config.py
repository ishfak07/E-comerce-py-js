from functools import lru_cache
from typing import List, Optional

from pydantic import Field
from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    # App
    environment: str = "development"
    secret_key: str = Field(default="change-this-in-prod", env="SECRET_KEY")
    api_prefix: str = "/api"

    # CORS
    cors_allow_origins: List[str] = [
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "http://localhost:3000",
        "http://127.0.0.1:3000",
    ]

    # Database (PostgreSQL)
    database_url: str = Field(
        default="postgresql+psycopg://postgres:postgres@localhost:5432/ecommerce",
        env="DATABASE_URL",
    )

    # Redis (optional)
    redis_url: Optional[str] = None

    # JWT
    access_token_exp_minutes: int = 15
    refresh_token_exp_days: int = 30

    # Stripe
    stripe_secret_key: Optional[str] = Field(default=None, env="STRIPE_SECRET_KEY")
    stripe_webhook_secret: Optional[str] = Field(default=None, env="STRIPE_WEBHOOK_SECRET")

    class Config:
        env_file = ".env"
        env_file_encoding = "utf-8"


@lru_cache
def get_settings() -> Settings:
    return Settings()


settings = get_settings()


