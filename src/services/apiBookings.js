import supabase from "./supabase";

export async function createBooking(newBooking) {
  const { data, error } = await supabase
    .from("bookings")
    .insert([newBooking])
    .select();

  if (error) {
    throw new Error("Booking was not created");
  }
  return data;
}
