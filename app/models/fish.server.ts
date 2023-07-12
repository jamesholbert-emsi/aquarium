export type Fish = {
  id: string;
  name: string;
  scientificName: string;
  distinguishingCharacteristics: string[];
  habitat: string;
};

export type LifeEvent = {
  description: string;
  fishIds: string[];
};

const dummyFish: Fish[] = [
  {
    id: "first",
    name: "One Fish",
    scientificName: "Blahblah",
    distinguishingCharacteristics: [],
    habitat: "The Ocean",
  },
  {
    id: "second",
    name: "Two Fish",
    scientificName: "Blahblah",
    distinguishingCharacteristics: [],
    habitat: "The Ocean",
  },
  {
    id: "third",
    name: "Red Fish",
    scientificName: "Blahblah",
    distinguishingCharacteristics: [],
    habitat: "The Ocean",
  },
  {
    id: "fourth",
    name: "Blue Fish",
    scientificName: "Blahblah",
    distinguishingCharacteristics: [],
    habitat: "The Ocean",
  },
];

export async function getAllFish() {
  return dummyFish;
}
