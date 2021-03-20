# This file is responsible for configuring your umbrella
# and **all applications** and their dependencies with the
# help of Mix.Config.
#
# Note that all applications in your umbrella share the
# same configuration and dependencies, which is why they
# all use the same configuration file. If you want different
# configurations or dependencies per app, it is best to
# move said applications out of the umbrella.
use Mix.Config

# Configure Mix tasks and generators
config :voice_elixir_tsx,
  ecto_repos: [Voice.Repo]

config :voice_elixir_tsx_web,
  ecto_repos: [Voice.Repo],
  generators: [context_app: :voice_elixir_tsx]

# Configures the endpoint
config :voice_elixir_tsx_web, VoiceWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "5p/EhfQ6A7jFx+ScizsMpY7T3anCzCE771+5bvqd53So975/0MEWA8O4baYZQVaQ",
  render_errors: [view: VoiceWeb.ErrorView, accepts: ~w(html json), layout: false],
  pubsub_server: Voice.PubSub,
  live_view: [signing_salt: "FhNW/nGG"]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
