import { pool } from "../libs/database";
import { cars } from "./data";

const seedCars = async () => {
  try {
    // const deleteQuery = {
    //   text: `DELETE FROM car`,
    // };
    // await pool.query(deleteQuery);

    for (const car of cars) {
      const insertQuery = {
        text: `INSERT INTO car (name, description, status, rent_per_day,address,images,year,price,power,mileage,brand,transmission,fuel_type,seats,doors,category) VALUES ($1, $2, $3, $4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16)`,
        values: [
          car.name,
          car.description,
          car.status,
          car.rent_per_day,
          car.address,
          car.images,
          car.year,
          car.price,
          car.power,
          car.mileage,
          car.brand,
          car.transmission,
          car.fuel_type,
          car.seats,
          car.doors,
          car.category,
        ],
      };
      await pool.query(insertQuery);
    }

    console.log("Seeding complete!");
  } catch (error) {
    console.log("Error during seeding:", error);
  }
};

seedCars();
