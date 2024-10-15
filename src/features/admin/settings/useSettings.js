import { useQuery } from "@tanstack/react-query";
import { getSlotPriceInSettings } from "../../../services/apiSettings";

export function useSettings() {
  const {
    data: settings,
    isPending: isLoading,
    error,
  } = useQuery({
    queryKey: ["settings"],
    queryFn: getSlotPriceInSettings,
  });

  return { settings, isLoading, error };
}
