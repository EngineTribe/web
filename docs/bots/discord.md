# 🎮 Engine Bot for Discord

Engine Bot for Discord is powered by [Nextcord](https://docs.nextcord.dev/) with slash commands and localization.

The bot is available at https://github.com/EngineTribe/EngineBotDiscord .

## 🎮 Discord Developer Portal Setup

To get started, you need to create a Discord application at [Discord Developer Portal](https://discord.com/developers/applications) and add a bot to the application.   
It's recommended to enable 'Administration' permission for the bot if you doesn't want to manually assign complex permissions to the bot.

## 📑 Create Config File

You need to create a config file named `config.yml` in the root directory of Engine Bot for Discord.  
You can copy the `config.default.yml` file and rename it to `config.yml` .

## 🤖 Discord Bot Config

This section contains Discord-specific configurations which is in `bot` section of the config file.

- `token`: The token of the Discord bot.
- `guild_ids`: Enabled guild ids.
- `level_post_channel_id`: The channel id of the #level-post channel, required when storage provider of Engine Tribe is `discord`.
- `locale_ids`: The role ids of the locale roles which can be automatically assigned by [Sapphire Bot](https://sapph.xyz) or other guild management bots.

Engine Bot for Discord will automatically assign corresponding permissions to the players with roles below:

- `booster_role_id`: The role id of the server booster role. Boosters can upload more levels.
- `stage_moderator_role_id`: The role id of the stage moderator role. Stage moderators can delete levels and set level as featured.
- `member_role_id`: The role id of the member role, which corresponds to the `valid` permission, which is the Goomba role in the original Engine Kingdom.

### 🎮 Rich Presence

Like original Engine-bot, Engine Tribe Bot for Discord also supports rolling rich presences.
The rich presence configuration is in the `rich_presence` section.

- `enabled`: Whether to enable rich presence.
- `activities`: The rich presence activities, see default config file for more details.

## 🌐 Engine Tribe API

Engine Bot needs to connect to the Engine Tribe API for registering and doing queries.   
The API configuration is in the `enginetribe_api` section of the config file.

- `host`: The url of the Engine Tribe API. It is recommended to set it to `http://localhost:xxxxx` if the Engine Tribe API and bots are on the same server.
- `api_key`: The API key of the Engine Tribe API, needs to be the same as `enginetribe`>`api_key` in the Engine Tribe configuration.
- `tokens`: The [client tokens](/tokens.md) to query the stage API.  
  The client type should be `ENGINEBOT` (`4`).

## 📤 Webhook

Engine Bot for Discord uses a webhook (not Discord webhook) to let Engine Tribe API post level files to the #level-post channel.   
The webhook configuration is in the `webhook` section of the config file.

- `host`: The host of the webhook.
- `port`: The port of the webhook.