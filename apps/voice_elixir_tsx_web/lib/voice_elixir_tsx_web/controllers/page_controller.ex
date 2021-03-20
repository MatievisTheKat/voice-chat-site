defmodule VoiceWeb.PageController do
  use VoiceWeb, :controller

  def index(conn, params) do
    render(conn, "index.html")
  end
end
