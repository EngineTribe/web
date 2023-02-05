# 📝 API Reference

## 📝 API Reference

SMM:WE uses form data as request body, and receives JSON as response body.

The following is a list of all APIs in Engine Tribe.

### 👤 User

#### 🏷️ Login

To log in Engine Tribe and get a session auth code.

- Endpoint: `/user/login`
- Method: `POST`
- Request body:
    - `alias`: Username
    - `password`: Password
    - `token`: Client token
- Response:
    - `username`: Username
    - `admin`: Is admin (DEPRECATED)
    - `mod`: Is stage moderator
    - `booster`: Is server booster
    - `goomba`: Is valid account (DEPRECATED)
    - `alias`: Username
    - `id`: User's IM id
    - `uploads`: Uploads count
    - `mobile`: Is [mobile client](/tokens.md#📱-mobile-clients)
    - `auth_code`: Session auth code

#### 📝 Register

To Register a new user.

- Endpoint: `/user/register`
- Method: `POST`
- Request body:
    - `api_key`: API key
    - `im_id`: User's id in corresponding IM
    - `username`: Username
    - `password_hash`: [Password hash](https://github.com/EngineTribe/EngineBotDiscord/blob/main/utils.py#L5)
- Response:
    - Success
        - `success`: `Registration success.`
        - `username`: Username
        - `im_id`: User's IM id
        - `type`: `register`
    - Failed
        - [(Standard error message response)](#❌-error-response)
        - `im_id`: User's IM id
        - `username`: Username

#### ℹ️ Info

To get user info.

- Endpoint: `/user/{user_identifier}/info`
    - `user_identifier`: User's IM id or username
- Method: `POST`
- Response:
    - `type`: `user
    - `result`:
        - `username`: Username
        - `is_admin`: Is admin (DEPRECATED)
        - `is_mod`: Is stage moderator
        - `is_booster`: Is server booster
        - `is_valid`: Is valid account
        - `is_banned`: Is banned
        - `im_id`: User's IM id
        - `uploads`: Uploads count

#### 🔤 Update Password

To update user's password.

- Endpoint: `/user/{user_identifier}/update_password`
    - `user_identifier`: User's IM id or username
- Method: `POST`
- Request body:
    - `api_key`: API key
    - `im_id`: User's IM id
    - `password_hash`: [Password hash](https://github.com/EngineTribe/EngineBotDiscord/blob/main/utils.py#L5)
- Response:
    - `success`: `Update password success.`
    - `username`: Username
    - `im_id`: User's IM id
    - `type`: `update`

#### 👮 Update Permission

##### 🏷️ Permission Types

- `admin`: Admin
- `mod`: Stage moderator
- `booster`: Server booster
- `valid`: Valid account
- `banned`: Banned

##### 📝 Update Permission

- Endpoint: `/user/{user_identifier}/permission/{permission}`
    - `user_identifier`: User's IM id or username
    - `permission`: [Permission type](#🏷️-permission-types)
- Request body:
    - `api_key`: API key
    - `value`: `true` or `false`
- Response:
    - `success`: `Permission updated.`
    - `type`: `update`
    - `username`: Username
    - `im_id`: User's IM id
    - `permission`: [Permission type](#🏷️-permission-types)
    - `value`: `true` or `false`

### ⛳ Level

#### ℹ️ Level Info Response

##### 🏞️ Game Style

- `0`: Super Mario Bros.
- `1`: Super Mario Bros. 3
- `2`: Super Mario World
- `3`: New Super Mario Bros. U
- `4`: Super Mario Bros. 2 (2.0.0 Beta 3 and post-3.3.x?)

##### 🌄 Environment

- `0`: Ground
- `1`: Underground
- `2`: Castle
- `3`: Underwater
- `4`: Ghost House
- `5`: Airship
- `6`: Forest
- `7`: Sky
- `8`: Desert
- `9`: Snow
- `10`: Fall
- `11`: Beach
- `12`: Mountain (post-3.3.0)
- `13`: Volcano (post-3.3.0)

##### 👍 Like Type

- `0`: Disliked
- `1`: Liked
- `3`: Unknown

##### ℹ️ Response

- `name`: Level name
- `id`: Level ID (XXXX-XXXX-XXXX-XXXX)
- `likes`: Likes count
- `dislikes`: Dislikes count
- `intentos`: Play count
- `victorias`: Clear count
- `muertes`: Death count
- `apariencia`: [Game Style](#🏞️-Game-Style)
- `entorno`: [Environment](#🌄-Environment)
- `etiquetas`: Tags in localized string
- `featured`: Is featured level, `0` or `1`
- `date`: Upload date
- `author`: Author's username
- `user_data`:
    - `liked`: [Like type](#👍-Like-Type)
    - `completed`: `yes` or `no`
- `record`:
    - Have record:
        - `record`: `yes`
        - `alias`: Record holder's username
        - `id`: Record holder's id in database
        - `time`: Record time in milliseconds
    - No record:
        - `record`: `no`
- `comments`: `0` (DEPRECATED)
- `descripcion`: `Sin descripción` (DEPRECATED)

#### 🔍 Detailed Search

To search levels with detailed options.

- Endpoint: `/stages/detailed_search`
- Method: `POST`
- Request body:
    - `auth_code`: Session auth code
    - `featured`:
        - `promising`: Featured level
        - `notpromising`: Not featured level
        - `popular`: Popular level
    - `page`: Page number
    - `rows_perpage`: Levels per page, overrides `rows_perpage` in config file
    - `title`: Level name
    - `author`: Author's username
    - `aparience`: [Game Style](#🏞️-Game-Style)
    - `entorno`: [Environment](#🌄-Environment)
    - `last`: `xd`, Uploaded in last x days
    - `sort`: Sort by
        - `antiguos`: Oldest
        - `popular`: Popular levels within 7 days, alias for `featured=popular&last=7d`
    - `liked`:
        - DangerousZone Engine-bot's implementation: User IM id to get liked levels
        - Engine Tribe's implementation: Submit any string to get liked levels
    - `disliked`: Implementations are different like `liked`
    - `historial`: Cleared, `0` or `1`
    - `dificultad`: Difficulty, `0` (Easy) to `4` (Super Expert)
- Response:
    - `num_rows`: Levels count
    - `rows_perpage`: Levels per page
    - `pages`: Page number
    - `result`: List of [level info](#ℹ️-level-info-response)

#### 🔍 Search By ID

Search a level by ID.

- Endpoint: `/stages/{level_id}`
    - `id`: Level ID (XXXX-XXXX-XXXX-XXXX)
- Method: `POST`
- Request body:
    - `auth_code`: Session auth code
- Response:
    - `type`: `id`
    - `result`: [Level info](#ℹ️-level-info-response)

#### 🎲 Get Random Level

Get random level.

- Endpoint: `/stages/random`
- Method: `POST`
- Request body:
    - `auth_code`: Session auth code
- Response:
    - `type`: `random`
    - `result`: [Level info](#ℹ️-level-info-response)

#### 📥 Download Level

Only available when storage is `database` or `discord`.

- Endpoint: `/stages/{level_id}/file`
    - `id`: Level ID (XXXX-XXXX-XXXX-XXXX)
- Method: `GET`
- Response: Level file

#### 📤 Upload Level

- Endpoint: `/stages/upload`
- Method: `POST`
- Request body:
    - `auth_code`: Session auth code
    - `swe`: Level file
    - `name`: Level name
    - `aparience`: [Game Style](#🏞️-Game-Style)
    - `entorno`: [Environment](#🌄-Environment)
    - `tags`: Tags in localized string
- Response:
    - `success`: `Successfully uploaded level`
    - `type`: `upload`
    - `id`: Level ID (XXXX-XXXX-XXXX-XXXX)

#### 📊 Increase Statistics

Increase a statistic of a level by 1.

- Endpoint: `/stages/{level_id}/stats/{statistic_type}`
    - `level_id`: Level ID (XXXX-XXXX-XXXX-XXXX)
    - `statistic_type`:
        - `likes`: Likes count
        - `dislikes`: Dislikes count
        - `intentos`: Play count
        - `victorias`: Clear count
        - `muertes`: Death count
- Method: `POST`
- Request body:
    - `auth_code`: Session auth code
- Response:
    - `success`: `Successfully increased {statistic_type}`
    - `type`: `stats`
    - `id`: Level ID (XXXX-XXXX-XXXX-XXXX)

#### ✨ Set Featured

- Endpoint: `/stages/{level_id}/switch/promising`
    - `level_id`: Level ID (XXXX-XXXX-XXXX-XXXX)
- Method: `POST`
- Request body:
    - `auth_code`: Session auth code
- Response:
    - `success`: `Successfully` updated / removed `featured level`
    - `type`: `promising` or `stage`
    - `id`: Level ID (XXXX-XXXX-XXXX-XXXX)

This API has an alias with endpoint `/stages{level_id}/switch/promising` for compatibility with a bug of 3.3.0.

#### 🚮 Delete Level

Delete a level.

- Endpoint: `/stages/{level_id}/delete`
    - `level_id`: Level ID (XXXX-XXXX-XXXX-XXXX)
- Method: `POST`
- Request body:
    - `auth_code`: Session auth code
- Response:
    - `success`: `Successfully deleted level`
    - `type`: `stage`
    - `id`: Level ID (XXXX-XXXX-XXXX-XXXX)

### 🏷️ Client Tokens

#### ➕ New

Add a new client token.

- Endpoint: `/token/new`
- Method: `POST`
- Request body:
    - `api_key`: API key
    - `token`: Client token
    - `client_type`: [Client Type](/tokens.md#💻%EF%B8%8F-client-types)
    - `locale`: [Locale ID](/tokens.md#🔤-client-locales)
    - `mobile`: Is [mobile client](/tokens.md#📱-mobile-clients), `true` or `false`
    - `proxied`: Proxy levels via Engine Tribe server, only available when storage is `discord`. `true` or `false`
- Response:
    - `success`: `Successfully created client.`
    - `token`: Client token
    - `client_type`: [Client Type](/tokens.md#💻%EF%B8%8F-client-types)
    - `locale`: [Locale ID](/tokens.md#🔤-client-locales)
    - `mobile`: Is [mobile client](/tokens.md#📱-mobile-clients)
    - `proxied`: Proxy levels via Engine Tribe server

#### ❌ Revoke

Revoke a client token.

- Endpoint: `/token/{token}/revoke`
    - `token`: Client token
- Method: `POST`
- Request body:
    - `api_key`: API key
- Response:
    - `success`: `Successfully revoked client.`
    - `token`: Client token

#### 🚮 Delete

Delete a client token.

- Endpoint: `/token/{token}/delete`
    - `token`: Client token
- Method: `POST`
- Request body:
    - `api_key`: API key
- Response:
    - `success`: `Successfully deleted client.`
    - `token`: Client token

### 🗂️ Other

#### 🗄️ Server Statistics

Get server statistics.

- Endpoint: `/server_stats`
- Method: `GET`
- Response:
    - `os`: OS version
    - `python`: Python version
    - `player_count`: Player count
    - `level_count`: Level count
    - `uptime`: Uptime in seconds
    - `connection_per_minute`: Connection per minute

## ❌ Error Response

- `error_type`: [Error type](/errors.md)
- `message`: Error message

## 📝 Interactive API Documents

Engine Tribe has an interactive API document generated by [Swagger](https://swagger.io/).

Visit `/docs` of your Engine Tribe server to view the document.
