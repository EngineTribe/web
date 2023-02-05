# 🐧 Engine Bot for QQ

Engine Bot for QQ is powered by [go-cqhttp](https://github.com/Mrs4s/go-cqhttp), a high-performance QQ userbot written
in Go.

The bot is available at https://github.com/EngineTribe/EngineBotQQ .

## 📑 Create Config File

You need to create a config file named `config.yml` in the root directory of Engine Bot for QQ.  
You can copy the `config.default.yml` file and rename it to `config.yml`.

For go-cqhttp, the config file name is `config_gocq.yml`, use `go-cqhttp -c config_gocq.yml` to start go-cqhttp.  
You can copy the `config_gocq.default.yml` file with default CQHTTP server configuration and rename it
to `config_gocq.yml`.

## 🤖 QQ Bot Config

### 🤖 QQ Userbot

This section contains go-cqhttp userbot configurations which is in `go_cqhttp` section of the config file.

- `host`: The host of the CQHTTP server.
- `port`: The port of the CQHTTP server.
- `user_id`: The QQ user id of the bot, used in send group forward message.
- `standalone`: Start Engine Bot for Discord without go-cqhttp, it is recommended to set it to `true` to deal with QQ's
  QR code and slider captchas in console.

**CAUTION**: You should disable `allow-temp-session` in go-cqhttp's config file to prevent the userbot account from being banned.

### 👥 QQ Groups

This section contains QQ group configurations which is in `bot` section of the config file.

- `enabled_group`: Enabled QQ group ids.
- `admin`: QQ id of the bot's administrators.

## 🌐 Engine Tribe API

Engine Bot needs to connect to the Engine Tribe API for registering and doing queries.   
The API configuration is in the `enginetribe_api` section of the config file.

- `host`: The url of the Engine Tribe API. It is recommended to set it to `http://localhost:xxxxx` if the Engine Tribe API and bots are on the same server.
- `api_key`: The API key of the Engine Tribe API, needs to be the same as `enginetribe`>`api_key` in the Engine Tribe configuration.
- `token`: The [client token](/tokens.md) to query the stage API.  
  The client type should be `ENGINEBOT` (`4`) and the client locale should be Chinese (`CN`).

## 📤 Webhook

Engine Bot for QQ uses a webhook to let the Engine Tribe API push messages to QQ groups.
The webhook configuration is in the `webhook` section of the config file.

- `host`: The host of the webhook.
- `port`: The port of the webhook.