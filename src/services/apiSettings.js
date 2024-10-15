import supabase from "./supabase";

export async function getSlotPriceInSettings() {
  const { data: slotPrice, error } = await supabase
    .from("settings")
    .select("timeslotPrice")
    .single();

  if (error) {
    throw new Error(error);
  }
  console.log(slotPrice);
  return slotPrice;
}

export async function updateSlotPriceInSettings(newSetting) {
  const { data, error } = await supabase
    .from("settings")
    .update(newSetting)
    .eq("id", 1)
    .single();

  if (error) {
    throw new Error(error);
  }

  return data;
}
