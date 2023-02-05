# 🛩️ Engine Bot for Telegram

Engine Bot for Telegram is powered by [aiogram](https://aiogram.dev/).

The bot is available at https://github.com/EngineTribe/EngineBotTelegram .

## 👨🏻 BotFather Setup

To get started, you need to create a Telegram bot at [@BotFather](https://t.me/BotFather) and get the bot token.   
You should also disable group privacy mode for the bot and set the commands list to content of [`commands.txt`](https://raw.githubusercontent.com/EngineTribe/EngineBotTelegram/main/commands.txt).

## 📑 Create Config File

You need to create a config file named `config.yml` in the root directory of Engine Bot for Discord.  
You can copy the `config.default.yml` file and rename it to `config.yml` .

## 🤖 Telegram Bot Config

This section contains Telegram-specific configurations which is in `bot` section of the config file.

- `token`: The token of the Telegram bot.
- `enabled_chats`: Chat ids to receive push messages from Engine Tribe.

## 🌐 Engine Tribe API

Engine Bot needs to connect to the Engine Tribe API for registering and doing queries.   
The API configuration is in the `enginetribe_api` section of the config file.

- `host`: The url of the Engine Tribe API. It is recommended to set it to `http://localhost:xxxxx` if the Engine Tribe API and bots are on the same server.
- `api_key`: The API key of the Engine Tribe API, needs to be the same as `enginetribe`>`api_key` in the Engine Tribe configuration.
- `token`: The [client token](/tokens.md) to query the stage API.  
  The client type should be `ENGINEBOT` (`4`) and the client locale should be English (`EN`).

## 📤 Webhook

Engine Bot for Telegram uses a webhook to let the Engine Tribe API push messages to Telegram chats.
The webhook configuration is in the `webhook` section of the config file.

- `host`: The host of the webhook.
- `port`: The port of the webhook.