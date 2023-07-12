import { supabase } from "./user.server";

export type Quiz = {
  id: string;
  question: string;
  option: string;
  answer: string;
};

export async function getAllQuiz() {
  const { data, error } = await supabase.from("trivia_questions").select("*");

  if (!error) {
    return data as unknown as Quiz[];
  }

  return [];
}
