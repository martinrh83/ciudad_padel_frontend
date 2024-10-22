import { getToday } from "../utils/helpers";
import supabase from "./supabase";

export async function createBooking(newBooking) {
  const { data, error } = await supabase
    .from("bookings")
    .insert([newBooking])
    .select();

  if (error) {
    if (error.code === "23505") {
      throw new Error(
        "El turno para la fecha y hora seleccionada ya ha sido reservado."
      );
    }
    throw new Error("Ha ocurrido un error al reservar.Intentelo nuevamente.");
  }

  return data;
}

export async function getTodaysBookings() {
  //const today = new Date().toISOString().split("T")[0];

  const { data, error } = await supabase
    .from("todays_bookings")
    .select()
    .order("startTime", { ascending: true });

  if (error) {
    console.error("Error fetching today's bookings:", error);
    return null;
  }

  return data;
}

export async function updateBookingStatus(bookingId, newStatus) {
  const { data, error } = await supabase
    .from("bookings")
    .update(newStatus)
    .eq("id", bookingId)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error(error.message);
  }
  return data;
}

export async function deleteBooking(id) {
  const { data, error } = await supabase.from("bookings").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("No se pudo eliminar la reserva seleccionada.");
  }
  return data;
}

export async function getUserBookingsAfterToday(userId) {
  const today = getToday();
  console.log(userId);
  const { data, error } = await supabase
    .from("bookings")
    .select("*, timeslots(startTime, endTime, dayOfWeek, courts(name))")
    .eq("userId", userId)
    .or(`bookingDate.eq.${today},bookingDate.gt.${today}`)
    .order("bookingDate", { ascending: true });

  console.log(data);
  if (error) {
    console.error(error);
    throw new Error(error.message);
  }

  return data;
}

export async function getUpcomingBookings() {
  const { data, error } = await supabase
    .from("upcoming_bookings")
    .select()
    .order("bookingDate", { ascending: true })
    .order("startTime", { ascending: true });

  console.log(data);
  if (error) {
    console.error(error);
    throw new Error(error.message);
  }

  return data;
}
