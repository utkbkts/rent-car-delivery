export const carResolvers = {
  Query: {
    getAllCars: async (
      parent: any,
      { filters }: { filters: any },
      context: any
    ) => {
      return "hello from getallcars";
    },
  },
};
