import { Category } from "@prisma/client";
import { getNames } from "country-list";

function getEnumValues<T extends Record<string, string>>(enumObj: T): string[] {
  return Object.values(enumObj);
}

export let options = {
  country: {
    title: "Country",
    selections: ["Global", ...getNames().sort()],
  },
  category: {
    title: "Category",
    selections: getEnumValues(Category),
  },
  subCategory: {
    title: "Sub Category",
    selections: ["Feature Request", "Bug Report", "Other"],
  },
};

export const subCategory = {
  Technology: ["Headphones", "Smartphones", "Laptops", "Other"],
  Food: ["Fast Food", "Fine Dining", "Home Cooking", "Other"],
  Travel: ["Camping", "Cruises", "Road Trips", "Other"],
  Entertainment: ["Movies", "Music", "Theater", "Other"],
  Fitness: ["Cardio", "Strength", "Flexibility", "Other"],
  Other: ["Other"],
};
