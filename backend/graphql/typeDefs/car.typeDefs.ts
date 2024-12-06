import { gql } from "graphql-tag";

export const carTypeDefs = gql`
  type CarImages {
    url: String!
    public_id: String!
  }

  type Car {
    id: ID!
    name: String!
    description: String!
    status: String!
    rent_per_day: String!
    address: String!
    year: Int!
    power: Int!
    mileage: Int!
    brand: String!
    transmission: String!
    fuel_type: String!
    seats: Int!
    doors: Int!
    images: [CarImages]
    category: String!
    createdAt: String
    updatedAt: String
  }

  input CarInput {
    name: String!
    description: String!
    status: String!
    rent_per_day: String!
    address: String!
    year: Int!
    power: Int!
    mileage: Int!
    brand: String!
    transmission: String!
    fuel_type: String!
    seats: Int!
    doors: Int!
    images: [String]
    category: String!
    createdAt: String
    updatedAt: String
  }

  type Query {
    getAllCars: [Car]
    getCarById(carId: ID!): Car
  }

  type Mutation {
    createCar(carInput: CarInput!): Car
    updateCar(carId: ID!, carInput: CarInput!): Boolean
  }
`;
