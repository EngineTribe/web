# 🗄️ 部署引擎部落

引擎部落的 API 和 bot 是分开的，可以单独部署。

## 📑 创建配置文件

首先，您需要在引擎部落的根目录中创建一个名为 `config.yml` 的配置文件。  
您可以复制默认配置文件 `config.default.yml` 并将其重命名为 `config.yml` 。

您也可以设置 `CONFIG_PATH` 环境变量来指定外部配置文件。

## 🌐 API

API 配置位于配置文件的“enginetribe”部分。

- `host`：引擎部落监听的主机名。
- `port`: 引擎部落监听的端口，默认为 `30000` 。
- `workers`: 引擎部落服务器使用的线程数，默认为`1`，建议设置为 CPU 核心数以获得最佳性能。
- `api_root`：生成的关卡下载链接的前缀，包括末尾斜杠。
  如果您使用 Nginx 等反向代理，则可以将其设置为反向代理的 url。
- `api_key`：用户和客户端 API 所需的 API 密钥，引擎机器人使用它来连接到 API。  
  您可以生成一个随机字符串作为 API 密钥。
- `verify_user_agent`: 是否验证客户端的 User-Agent。  
  如果设置为 `true` ，客户端必须是有效的 SMM:WE 游戏，否则请求将被拒绝。  
  您可以[在此](https://github.com/EngineTribe/EngineTribe/blob/main/depends.py#L10) 查看有效 User-Agent 列表。
- `cors_allowed_origins`：API 的 `Access-Control-Allow-Origin` 响应头，可以是 `*` 或域名。
- `rows_perpage`：全球关卡中每页的级别数。
- `upload_limit`：用户可以上传的最大关卡数。
- `booster_extra_limit`：捐赠 Discord 服务器的用户可以上传的额外关卡数。
- `record_clear_users`: 是否记录通关用户。  
  禁用此选项也将禁用详细搜索的“历史”字段。

## 🗄️ 数据库

### 💼 主数据库

引擎部落需要 SQL 数据库才能工作，支持 MySQL、PostgreSQL 和 SQLite。

SQL 数据库配置位于配置文件的“数据库”部分。

- `adapter`: 数据库的类型，可以是 `mysql` , `postgresql` 或 `sqlite` 。
- `host`：数据库的主机名或 SQLite 数据库的文件路径。
- `port`：数据库的端口，MySQL 默认为`3306`，PostgreSQL 默认为`5432`，SQLite 不需要。
- `user`：数据库的用户名。
- `password`: 数据库的密码。
- `ssl`: 是否使用 SSL 连接数据库。
- `debug`: 是否打印执行的 SQL 语句（仅用于调试）。

### ⏰ 会话

> `auth_code` 是唯一的会话代码，用于判断会话的真实性  
> 请记住，auth_code 是我在 SMMWE Online 中作为保存会话的方法创建的机制     
> 每个账号只能有一个激活的 `auth_code`，也就是说同一个 SMMWE 账号不能同时在两台设备上玩  
> —— DangerousZone

引擎部落还需要一个 Redis 数据库来存储登录会话，Redis 数据库配置在配置文件的 `redis` 部分。

- `host`：Redis 数据库的主机名。
- `port`：Redis 数据库的端口，默认为 `6379` 。
- `database`: Redis 数据库的数据库编号。
- `passowrd`：Redis 数据库的密码。

## 📦 存储后端

引擎部落支持多个存储后端，目前支持本地存储、OneDrive 和 Discord。

存储后端配置位于配置文件的“storage”部分。

- `provider`：存储后端的类型，可以是 `database` ， `onemanager` ， `onedrive-cf` 或 `discord` 。
    - `database`: 在主数据库中存储关卡，这是默认和推荐的选项。
    - `onemanager`：通过 [OneManager](https://github.com/qkqpttgf/OneManager-php) 在 OneDrive 中存储关卡。
    - `onedrive-cf`：通过 [OneDrive CF Index](https://github.com/spencerwooo/onedrive-cf-index) 在 OneDrive 中存储关卡。
    - `discord`：通过 Discord 引擎机器人在 Discord 中存储关卡。
- `url`：
    - 对于 `onemanager` ，OneManager 实例的 url，尾部带有网盘名称和斜杠。
    - 对于 `onedrive-cf` ，OneDrive CF Index 实例的 url，带有尾部斜杠。
    - 对于 `discord`，为 Discord 的引擎机器人配置的 webhook url。
    - 对于 `database`，该字段不是必需的。
- `auth_key`：OneManager 或 OneDrive CF Index 的授权密钥，Discord 和本地数据库不需要。
- `proxied`：是否通过 CloudFlare CDN 代理关卡（仅 OneDrive CF Index）。
- `attachment_channel_id`：要上传关卡的 Discord 频道 ID，仅 Discord。

## 💬 消息推送

引擎部落可以把新关卡消息、关卡统计消息和角色分配消息推送到 Discord Webhooks 或引擎机器人。

消息推送配置在配置文件的`push`部分。

### 📨 Discord Webhook

Discord Webhook 配置位于 `discord` 部分。

- `enabled`：是否启用 Discord Webhook 推送。
- `enable_new_arrival`: 是否推送新关卡消息。
- `urls`：要将消息推送到的 Discord 频道的 webhook url。
- `avatar`：webhook 的头像 url。
- 
### 🤖 引擎机器人

对于 QQ、Telegram 等不支持 Webhook 的聊天软件，引擎机器人可以通过统一推送来推送消息。

- `enabled`：是否启用引擎机器人推送。
- `enable_new_arrival`: 是否推送新关卡消息。
- `enable_counter`: 是否推送关卡统计消息（如获得 100 赞）。
- `urls`：要将消息推送到的引擎机器人的 webhook url。
