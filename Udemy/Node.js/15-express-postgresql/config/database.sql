CREATE DATABASE user_list;

CREATE TABLE user_info(
  id BIGSERIAL PRIMARY KEY,
  username VARCHAR(80) NOT NULL,
  age NUMBER NOT NULL
)