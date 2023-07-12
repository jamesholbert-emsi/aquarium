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
