import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBookingStatus as updateBookingStatusApi } from "../../../services/apiBookings";
import toast from "react-hot-toast";

export function useUpdateBookingStatus() {
  const queryClient = useQueryClient();

  const { mutate: updateBookingStatus, isPending: isUpdating } = useMutation({
    mutationFn: ({ bookingId, newStatus }) =>
      updateBookingStatusApi(bookingId, { status: newStatus }),
    onSuccess: () => {
      toast.success("El pago de la reserva ha sido confirmado.");
      queryClient.invalidateQueries({ active: true });
    },
    onError: () => toast.error("Ha ocurrido un error al confirmar el pago."),
  });

  return { updateBookingStatus, isUpdating };
}
