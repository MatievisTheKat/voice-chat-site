defmodule VoiceWeb.ApiController do
  use VoiceWeb, :controller

  def index(conn, params) do
    json(conn, %{ foo: "bar" })
  end
end
