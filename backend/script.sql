CREATE TABLE car (
    id SERIAL PRIMARY KEY, 
    name VARCHAR(255) NOT NULL,
    brand VARCHAR(255) NOT NULL, 
    category VARCHAR(255) NOT NULL,
    description TEXT,
    doors INTEGER NOT NULL, 
    fuel_type VARCHAR(50) NOT NULL, 
    images VARCHAR(50) NOT NULL, 
    mileage INTEGER NOT NULL, 
    power INTEGER NOT NULL, 
    rent_per_day NUMERIC(10, 2) NOT NULL, 
    seats INTEGER NOT NULL, 
    status VARCHAR(50) NOT NULL, 
    transmission VARCHAR(50) NOT NULL,
    year INTEGER NOT NULL, 
    address VARCHAR(255) NOT NULL 
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
