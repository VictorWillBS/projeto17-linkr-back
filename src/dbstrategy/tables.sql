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
"name" text NOT NULL UNIQUE);


--Tags_Post table creation
CREATE TABLE "tags_Posts"(
"id" serial PRIMARY KEY NOT NULL UNIQUE,
"tagId" int NOT NULL REFERENCES "tags"("id") ON DELETE CASCADE ON UPDATE CASCADE,
"postId" int NOT NULL REFERENCES  "posts"("id")ON DELETE CASCADE ON UPDATE CASCADE);

	

--Metadatas table creation
CREATE TABLE metadatas (
	id SERIAL NOT NULL PRIMARY KEY,
	url TEXT NOT NULL UNIQUE,
	title TEXT NOT NULL,
	description TEXT NOT NULL,
	image TEXT NOT NULL,
	"createdAt" TIMESTAMP NOT NULL DEFAULT NOW()
);

