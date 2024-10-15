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

export async function getTodaysBookings() {
  //const today = new Date().toISOString().split("T")[0];

  const { data, error } = await supabase.from("todays_bookings").select();

  if (error) {
    console.error("Error fetching today's bookings:", error);
    return null;
  }

  return data;
}
