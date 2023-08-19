# 🚀 改善性能

通过给数据库启用索引，引擎部落的性能可以得到极大改善。

```sql
create index clears_user_id_index on clears_table (user_id);
create index clears_parent_id_index on clears_table (parent_id);
create index likes_user_id_index on likes_table (user_id);
create index likes_parent_id_index on likes_table (parent_id);
create index dislikes_user_id_index on dislikes_table (user_id);
create index dislikes_parent_id_index on dislikes_table (parent_id);
create index client_token_index on client_table (token);
create index level_data_level_id_index on level_data_table (level_id);
create index level_discord_level_db_id_index on level_discord_table (level_db_id);
create index level_style_index on level_table (style);
create index level_environment_index on level_table (environment);
create index level_author_id_index on level_table (author_id);
create index level_level_id_index on level_table (level_id);
create index level_featured_index on level_table (featured);
create index user_username_index on user_table (username);
create index user_im_id_index on user_table (im_id);
```

