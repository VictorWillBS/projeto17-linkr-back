--Linkr db creation
CREATE DATABASE linkr;

--Users table creation
CREATE TABLE users (
	id SERIAL NOT NULL PRIMARY KEY,
	email TEXT NOT NULL UNIQUE,
	password TEXT NOT NULL,
    "userName" VARCHAR(50) NOT NULL,
	image TEXT NOT NULL,
	"createdAt" TIMESTAMP NOT NULL DEFAULT NOW()
);

--Sessions table creation
CREATE TABLE sessions (
	id SERIAL NOT NULL PRIMARY KEY,
	"userId" INTEGER NOT NULL UNIQUE REFERENCES users(id),
	token TEXT NOT NULL UNIQUE
);

-- Posts table creation
CREATE TABLE posts (
	id SERIAL NOT NULL PRIMARY KEY,
	"userId" INTEGER NOT NULL REFERENCES users(id),
	url TEXT NOT NULL,
	content TEXT,
	"createdAt" TIMESTAMP NOT NULL DEFAULT NOW()
);

--Tags table cration
CREATE TABLE tags(
"id" serial PRIMARY KEY NOT NULL UNIQUE,
"name" text NOT NULL UNIQUE
);

--Tags_Post table creation
CREATE TABLE "tags_Posts"(
"id" serial PRIMARY KEY NOT NULL UNIQUE,
"tagName" text NOT NULL REFERENCES "tags"("name") ON DELETE CASCADE ON UPDATE CASCADE,
"postId" int NOT NULL REFERENCES  "posts"("id")ON DELETE CASCADE ON UPDATE CASCADE
);

--Metadatas table creation
CREATE TABLE metadatas (
	id SERIAL NOT NULL PRIMARY KEY,
	url TEXT NOT NULL UNIQUE,
	title TEXT NOT NULL,
	description TEXT NOT NULL,
	image TEXT NOT NULL,
	"createdAt" TIMESTAMP NOT NULL DEFAULT NOW()
);

--Likes table creation
CREATE TABLE likes (
	id SERIAL PRIMARY KEY,
	"postIdLike" INTEGER NOT NULL REFERENCES posts(id),
	"userIdLike" INTEGER NOT NULL REFERENCES users(id)
);

--Comments table creation
CREATE TABLE comments (
	id SERIAL PRIMARY KEY,
	content TEXT NOT NULL,
	"userId" INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE,
	"postId" INTEGER NOT NULL REFERENCES posts(id) ON DELETE CASCADE ON UPDATE CASCADE
);

--Reposts table creation
CREATE TABLE reposts (
	id SERIAL PRIMARY KEY,
	"postId" INTEGER NOT NULL REFERENCES posts(id),
	"userId" INTEGER NOT NULL REFERENCES users(id)
);

--Followers table creation
CREATE TABLE followers (
	id SERIAL PRIMARY KEY,
	"followerId" INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE,
	"followingId" INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE
);