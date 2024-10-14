import { useMutation } from "@tanstack/react-query";
import { createBooking as createBookingApi } from "../../services/apiBookings";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
export function useCreateBooking() {
  const navigate = useNavigate();
  const { mutate: createBooking, isPending: isCreating } = useMutation({
    mutationFn: createBookingApi,
    onSuccess: () => {
      toast.success("La reserva ha sido confirmada");
      console.log("se reservo");
      navigate("/booking");
    },
  });

  return { createBooking, isCreating };
}
