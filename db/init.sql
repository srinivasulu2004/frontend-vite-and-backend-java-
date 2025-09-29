-- Connect to default postgres database
\connect postgres;

-- Drop the target DB if it exists
DROP DATABASE IF EXISTS realtime_db;

-- Recreate the target DB
CREATE DATABASE realtime_db;

-- Switch into the newly created realtime_db
\connect realtime_db;

-- Create the users table
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    role VARCHAR(100) NOT NULL
);

-- Seed data
INSERT INTO users (name, role) VALUES
('Alice', 'Developer'),
('Bob', 'DevOps Engineer');

