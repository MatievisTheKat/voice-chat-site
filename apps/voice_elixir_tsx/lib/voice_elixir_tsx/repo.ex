defmodule Voice.Repo do
  use Ecto.Repo,
    otp_app: :voice_elixir_tsx,
    adapter: Ecto.Adapters.Postgres
end
