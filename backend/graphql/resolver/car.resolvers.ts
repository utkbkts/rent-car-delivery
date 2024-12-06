import {
  createCar,
  getAllCarsController,
  getByCarId,
  updateCarController,
} from "../../controllers/car.controller";
import { CarInput } from "../../types/car.types";

export const carResolvers = {
  Query: {
    getAllCars: async (parent: any) => {
      const cars = await getAllCarsController();
      return cars;
    },
    getCarById: async (_: any, { carId }: { carId: any }) => {
      const car = await getByCarId(carId);
      if (!car) {
        throw new Error(`Car with ID ${carId} not found.`);
      }
      return car;
    },
  },
  Mutation: {
    createCar: async (_: any, { carInput }: { carInput: CarInput }) => {
      return await createCar(carInput);
    },
    updateCar: async (
      _: any,
      { carId, carInput }: { carId: any; carInput: CarInput }
    ) => {
      return await updateCarController(carId, carInput);
    },
  },
};
