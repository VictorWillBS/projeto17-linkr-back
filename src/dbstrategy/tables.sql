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
	id SERIAL PRIMARY KEY,
	"userId" INTEGER NOT NULL REFERENCES users(id),
	url TEXT NOT NULL,
	content TEXT
);