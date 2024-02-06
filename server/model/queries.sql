CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    name VARCHAR(150),
    email VARCHAR(150),
    mobile VARCHAR(50),
    password VARCHAR(500),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE students (
    student_id SERIAL PRIMARY KEY,
    name VARCHAR(150),
    roll INT UNIQUE,
    contact VARCHAR(50),
    standard VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
