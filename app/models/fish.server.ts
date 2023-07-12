import { supabase } from "./user.server";

export type FishType = {
  id: string;
  name: string;
  scientific_name?: string;
  family?: string;
  color?: string;
  fish_diet?: string;
  aggressiveness?: string;
  minimum_tank_size_gallons?: number;
  max_size_inches?: number;
  is_reef_safe?: boolean;
  relative_care?: string;
  created_at?: string;
  description?: string;
  image_url?: string;
};

export type LifeEvent = {
  description: string;
  fishIds: string[];
};

export async function getAllFish() {
  const { data, error } = await supabase.from("fish_type").select("*");

  if (!error) {
    return data as unknown as FishType[];
  }

  return [];
}

export async function addFish(fish: FishType): Promise<FishType | null> {
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

export async function updateFish(fish: FishType): Promise<true | null> {
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
