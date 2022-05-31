import { CarModelSuggestionModel } from "@czTypes/global.type";
import faker from "@faker-js/faker";

export const carModels: CarModelSuggestionModel[] = new Array(300).fill(0).map(() => {
  return {
    id: faker.database.mongodbObjectId(),
    text: `${faker.vehicle.manufacturer()} ${faker.vehicle.model()}`,
  };
});
