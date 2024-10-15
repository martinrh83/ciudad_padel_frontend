import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSlotPriceInSettings } from "../../../services/apiSettings";
import toast from "react-hot-toast";

export function useUpdateSettings() {
  const queryClient = useQueryClient();
  const { mutate: updateSlotPrice, isPending: isUpdating } = useMutation({
    mutationFn: updateSlotPriceInSettings,
    onSuccess: () => {
      toast.success("Se ha actualizado la configuracion");
      queryClient.invalidateQueries({ queryKey: ["settings"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { updateSlotPrice, isUpdating };
}