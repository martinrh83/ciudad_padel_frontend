import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking as deleteBookingApi } from "../../../services/apiBookings";
import toast from "react-hot-toast";

export function useDeleteBooking() {
  const queryClient = useQueryClient();

  const { mutate: deleteBooking, isPending: isDeleting } = useMutation({
    mutationFn: deleteBookingApi,
    onSuccess: () => {
      toast.success("La reserva ha sido cancelada exitosamente.");
      queryClient.invalidateQueries({ active: true });
    },
    onError: () =>
      toast.error("Se ha producido un error al cancelar la reserva"),
  });

  return { deleteBooking, isDeleting };
}
