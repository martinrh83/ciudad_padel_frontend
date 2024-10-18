import supabase from "./supabase";

export async function getTimeslots() {
  let { data, error } = await supabase.from("timeslots").select("*");

  if (error) {
    console.error(error);
    throw new Error("Timeslots could not be loaded");
  }
  return data;
}

export async function getTimeSlotsByDayOfWeek(dayOfWeek, selectedDay) {
  console.log(dayOfWeek);
  console.log(selectedDay);

  const { data: reservedSlots, error: reservedError } = await supabase
    .from("bookings")
    .select("timeslotId")
    .eq("bookingDate", selectedDay);

  console.log(reservedSlots);

  if (reservedError) {
    throw new Error(reservedError.message);
  }

  const reservedTimeslotIds = reservedSlots.map(
    (booking) => booking.timeslotId
  );

  const { data: allTimeSlots, error: allSlotsError } = await supabase
    .from("timeslots")
    .select("*, courts(name)")
    .eq("dayOfWeek", dayOfWeek);

  if (allSlotsError) {
    throw new Error(allSlotsError.message);
  }

  const availableSlots = allTimeSlots.filter(
    (slot) => !reservedTimeslotIds.includes(slot.id)
  );

  const { data: settings, error } = await supabase
    .from("settings")
    .select("timeslotPrice, minimunPayment");
  console.log("settings", settings);
  console.log("Available time slots:", availableSlots);
  return { availableSlots, settings };
}
