import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCurrentUser } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useUpdateUser() {
  const queryClient = useQueryClient();
  const { mutate: updateUser, isPending: isUpdating } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: ({ user }) => {
      toast.success("Se ha actualizado el usuario correctamente.");
      queryClient.setQueryData(["user"], user);

      // Invalida la query del usuario para forzar una recarga de los datos
      queryClient.invalidateQueries(["user"]);
    },
    onError: (err) => toast.error(err.message),
  });

  return { updateUser, isUpdating };
}
