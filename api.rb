require "oauth2"
UID = "cfc60601954728d69cdc4121131c3925df7d1d1eeb1f14d0bf73f71ccb0ddb62"
SECRET = "bf91bac98f7b48a4c77b3b8c6f305036bf70aa83b1b7b6d747b8e59c964cc07d"
# Create the client with your credentials
client = OAuth2::Client.new(UID, SECRET, site: "https://api.intra.42.fr")
# Get an access token
token = client.client_credentials.get_token
