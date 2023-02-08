# 🗄️ Deploy Engine Tribe

Engine Tribe's API and bots are separate and can be deployed separately.

## 📑 Create Config File

To get started, you need to create a config file named `config.yml` in the root directory of Engine Tribe.  
You can copy the `config.default.yml` file and rename it to `config.yml` .

You can also set the `CONFIG_PATH` environment variable to specify an external config file.

## 🌐 API

The API configuration is in the `enginetribe` section of the config file.

- `host`: The host Engine Tribe listens on.  
- `port`: The port Engine Tribe listens on, default is `30000` .
- `workers`: The number of threads Engine Tribe uses, default is `1`, recommended to set it to the number of CPU cores to get the best performance.
- `api_root`: The url prefix of generated level download links, with trailing slash.  
  If you are using a reverse proxy, you can set this to the url of the reverse proxy.
- `api_key`: The API key which is required by users and clients API, used by bots to connect to the API.  
  You can generate a random string as the API key.
- `verify_user_agent`: Whether to verify the user agent of the client.  
  If set to `true` , the client must be a valid SMM:WE game, otherwise the request will be rejected.  
  You can [click here](https://github.com/EngineTribe/EngineTribe/blob/main/depends.py#L10) to view the list of valid user agents.
- `cors_allowed_origins`: List of allowed `Access-Control-Allow-Origin` header of the API, can be `*` or a domain name.
- `rows_perpage`: The number of levels per page in the Course World.
- `upload_limit`: The maximum number of levels that can be uploaded of a user.
- `booster_extra_limit`: The extra number of levels that can be uploaded of a user with booster.
- `record_clear_users`: Whether to record the user who cleared a level.  
  Disabling this option will also disable the `Historial` field of detailed search.

## 🗄️ Database

### 💼 Main database

Engine Tribe needs a SQL database to work, currently supports MySQL, PostgreSQL and SQLite.  
The SQL database configuration is in the `database` section of the config file.

- `adapter`: The type of database, can be `mysql` , `postgresql` or `sqlite` .
- `host`: The host of the database or the file path of the SQLite database.
- `port`: The port of the database, default is `3306` for MySQL and `5432` for PostgreSQL, not required for SQLite.
- `user`: The username of the database.
- `password`: The password of the database.
- `ssl`: Whether to use SSL to connect to the database.
- `debug`: Whether to print executed SQL statements, only used for debugging.

### ⏰ Session

> The auth_code is a unique session code that is used to determine the authenticity of the session  
> Keep in mind that the auth_code is a system that I have implemented in the SMMWE Online as a method of saving sessions  
> There can only be one active auth_code per account, which means that you cannot play on two devices at the same time with the same SMMWE account    
> -- DangerousZone

Engine Tribe also needs a Redis database to store login sessions, the Redis database configuration is in the `redis` section of the config file.

- `host`: The host of the Redis database.
- `port`: The port of the Redis database, default is `6379` .
- `database`: The database number of the Redis database.
- `passowrd`: The password of the Redis database.

## 📦 Storage

Engine Tribe supports multiple storage providers, currently supports local storage, OneDrive and Discord.   
The storage provider configuration is in the `storage` section of the config file.

- `provider`: The type of storage provider, can be `database` , `onemanager`, `onedrive-cf` or `discord` .  
  - `database`: Store levels in the main database, this is the default and recommended option.
  - `onemanager`: Store levels in OneDrive via [OneManager](https://github.com/qkqpttgf/OneManager-php).
  - `onedrive-cf`: Store levels in OneDrive via [OneDrive CF Index](https://github.com/spencerwooo/onedrive-cf-index).
  - `discord`: Store levels in Discord via Engine Bot for Discord.
- `url`:
  - For `onemanager` , the url of OneManager instance with trailing disk name and slash.
  - For `onedrive-cf` , the url of OneDrive CF Index instance with trailing slash.
  - For `discord`, the configured webhook url of Engine Bot for Discord.
  - For `database`, this field is not required.
- `auth_key`: The auth key of OneManager or OneDrive CF Index, not required for Discord and local database.
- `proxied`: Whether to proxy levels via CloudFlare CDN, OneDrive CF Index only.
- `attachment_channel_id`: The channel id of the Discord channel to upload levels, Discord only.

## 💬 Message Pushing

Engine Tribe can push new level messages, level statistics message and roles assignment message to Discord Webhooks or Engine Bot.  
The message pushing configuration is in the `push` section of the config file.

### 📨 Discord Webhook

The Discord Webhook configuration is in the `discord` section.

- `enabled`: Whether to enable Discord Webhook pushing.
- `enable_new_arrival`: Whether to push new level messages.
- `urls`: The webhook urls of the Discord channels to push messages to.
- `avatar`: The avatar url of the webhook.

### 🤖 Engine Bot

For IMs without Webhook support like QQ and Telegram, Engine Tribe can push messages via unified Engine Bot pushing.

- `enabled`: Whether to enable Engine Bot pushing.
- `enable_new_arrival`: Whether to push new level messages.
- `enable_counter`: Whether to push level statistics messages like 100 / 1000 likes.
- `urls`: The webhook urls of the Engine Bot instances to push messages to.