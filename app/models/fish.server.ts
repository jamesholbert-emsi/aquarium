import { supabase } from "./user.server";

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
  const { data, error } = await supabase.from("fish_type").select("*");

  if (!error) {
    return data as unknown as Fish[];
  }

  return dummyFish;
}

export async function addFish(fish: Fish): Promise<Fish | null> {
  const { data, error } = await supabase
    .from("fish")
    .insert([fish])
    .select()
    .single();

  if (!error) {
    return data;
  }
  console.log(error);

  return null;
}

export async function updateFish(fish: Fish): Promise<true | null> {
  console.log(fish);
  return true;
  // TODO: Derek/Shashi, get this working
  const { error } = await supabase
    .from("fish")
    .update(fish)
    .match({ fishid: fish.id });

  if (!error) {
    return true;
  }

  return null;
}

export async function getLifeEventsByFishId(
  fishId: string
): Promise<LifeEvent[]> {
  return [] as LifeEvent[];
}
