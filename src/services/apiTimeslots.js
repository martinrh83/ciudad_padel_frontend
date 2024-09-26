import supabase from "./supabase";

export async function getTimeslots() {
  let { data, error } = await supabase.from("timeslots").select("*");

  if (error) {
    console.error(error);
    throw new Error("Timeslots could not be loaded");
  }
  return data;
}

export async function getTimeSlotsByDayOfWeek(dayOfWeek) {
  console.log(dayOfWeek);
  const { data, error } = await supabase
    .from("timeslots")
    .select("*, courts(name)")
    .eq("dayOfWeek", dayOfWeek);

  if (error) {
    console.error("Error fetching time slots:", error);
  } else {
    console.log("Time slots:", data);
    return data;
  }
}
