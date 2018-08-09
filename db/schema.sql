DROP DATABASE template;
CREATE DATABASE template;

\c template

CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  name TEXT,
  inprogress BOOLEAN DEFAULT false,
  completed BOOLEAN DEFAULT false,
  created TIMESTAMP DEFAULT NOW()
);
