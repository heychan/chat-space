# ChatSpace DB設計
## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|email|string|null: false, unique: true|
|password|string|null: false|
|group_id|integer|foreign_key: true|
### Association
- has_many :groups_users
- has_many  :groups,  through:  :groups_users
- has_many :messages

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|groupname|string|null: false, unique: true|
|user_id|integer|null: false, foreign_key: true|
### Association
- has_many :messages
- has_many :groups_users
- has_many  :tags,  through:  :groups_users

## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|body|text|null: false|
|image|string||
|group_id|integer|null: false|
|user_id|integer|null: false|

### Association
- belongs_to :group
- belongs_to :user

## groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :group
- belongs_to :user
