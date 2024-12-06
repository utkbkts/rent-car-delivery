import { pool } from "../libs/database";
import { CarInput } from "../types/car.types";

export const createCar = async (carInput: CarInput) => {
  try {
    const {
      name,
      description,
      status,
      rent_per_day,
      address,
      year,
      power,
      mileage,
      brand,
      transmission,
      fuel_type,
      seats,
      images,
      doors,
      category,
    } = carInput;

    const query = `
      INSERT INTO car 
      (name, description, status, rent_per_day, address, year, power, mileage, brand, transmission, fuel_type, seats, images, doors, category)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)
      RETURNING *
    `;
    const values = [
      name,
      description,
      status,
      parseFloat(rent_per_day),
      address,
      year,
      power,
      mileage,
      brand,
      transmission,
      fuel_type,
      seats,
      JSON.stringify(images),
      doors,
      category,
    ];

    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (error: any) {
    console.error("Error creating car:", error.message);
    throw new Error("Failed to create car.");
  }
};

export const getAllCarsController = async () => {
  try {
    const cartAll = {
      text: "SELECT * FROM car",
      values: [],
    };
    const result = await pool.query(cartAll);
    return result.rows;
  } catch (error: any) {
    console.error("Error inserting car into database:", error.message);
    throw error;
  }
};

export const getByCarId = async (carId: any) => {
  try {
    const query = {
      text: "SELECT * FROM car WHERE id = $1",
      values: [carId],
    };

    const result = await pool.query(query);
    return result.rows[0];
  } catch (error: any) {
    console.error("Error fetching car by ID from database:", error.message);
    throw error;
  }
};

export const updateCarController = async (carId: any, carInput: CarInput) => {
  try {
    const {
      address,
      brand,
      category,
      description,
      doors,
      fuel_type,
      images,
      mileage,
      name,
      power,
      rent_per_day,
      seats,
      status,
      transmission,
      year,
    } = carInput;

    const query = {
      text: `
                UPDATE car
                SET
                    name = $1,
                    brand = $2,
                    category = $3,
                    description = $4,
                    doors = $5,
                    fuel_type = $6,
                    images = $7,
                    mileage = $8,
                    power = $9,
                    rent_per_day = $10,
                    seats = $11,
                    status = $12,
                    transmission = $13,
                    year = $14,
                    address = $15
                WHERE id = $16
            `,
      values: [
        name,
        brand,
        category,
        description,
        doors,
        fuel_type,
        images,
        mileage,
        power,
        rent_per_day,
        seats,
        status,
        transmission,
        year,
        address,
        carId,
      ],
    };

    const result: any = await pool.query(query);
    return result.rowCount > 0;
  } catch (error: any) {
    console.log("Error updating car in the database:", error.message);
    throw error;
  }
};
