CREATE TYPE car_status AS ENUM ('Draft', 'Active');
CREATE TYPE car_brand AS ENUM (
  'Audi', 'BMW', 'Ford', 'Honda', 'Hyundai', 'Kia', 'Mercedes', 'Nissan'
);
CREATE TYPE car_fuel_type AS ENUM ('Petrol', 'Diesel');
CREATE TYPE car_transmission_type AS ENUM ('Automatic', 'Manual');
CREATE TYPE car_category AS ENUM ('Sedan', 'Convertible', 'SUV', 'Hatchback');
CREATE TYPE car_doors AS ENUM ('2', '4');
CREATE TYPE car_seats AS ENUM ('2', '3', '4', '5', '7', '9', '10');

CREATE TABLE car (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    status car_status NOT NULL DEFAULT 'Draft',
    rent_per_day NUMERIC(10, 2) NOT NULL,
    address TEXT NOT NULL,
    images TEXT NOT NULL,
    year INTEGER NOT NULL,
    price NUMERIC(10, 2) NOT NULL,
    power INTEGER NOT NULL,
    mileage INTEGER NOT NULL,
    brand car_brand NOT NULL,
    transmission car_transmission_type NOT NULL,
    fuel_type car_fuel_type NOT NULL,
    seats car_seats NOT NULL,
    doors car_doors NOT NULL,
    category car_category NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO car (
    name, description, status, rent_per_day, address, images, year, price, power, mileage, brand, 
    transmission, fuel_type, seats, doors, category
) VALUES (
    'Audi A4', 'A luxury sedan with a sporty feel', 'Active', 100.00, '1234 Audi St, Audi City', 'image_url_here', 
    2020, 35000.00, 200, 15000, 'Audi', 'Automatic', 'Petrol', '5', '4', 'Sedan'
);
