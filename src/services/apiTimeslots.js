import supabase from "./supabase";

export async function getTimeslots() {
  let { data, error } = await supabase.from("timeslots").select("*");

  if (error) {
    console.error(error);
    throw new Error("Timeslots could not be loaded");
  }
  return data;
}
