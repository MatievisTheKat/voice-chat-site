defmodule VoiceWeb.Router do
  use VoiceWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  if Mix.env() in [:dev, :test] do
    import Phoenix.LiveDashboard.Router

    scope "/" do
      pipe_through :browser
      live_dashboard "/dashboard", metrics: VoiceWeb.Telemetry
    end
  end

  scope "/api", VoiceWeb do
    pipe_through :api

    get "/", ApiController, :index
  end

  scope "/", VoiceWeb do
    pipe_through :browser

    get "/*path", PageController, :index
  end
end
