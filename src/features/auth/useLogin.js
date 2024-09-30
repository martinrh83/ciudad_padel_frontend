import { useMutation } from "@tanstack/react-query";
import { getCurrentUser, login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";

export default function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: login, isPending: isLoading } = useMutation({
    mutationFn: async ({ email, password }) => {
      const response = await loginApi({ email, password });
      return response;
    },
    onSuccess: async () => {
      // Invalida la query de "user" para refetchear los datos del usuario actual
      const user = await queryClient.fetchQuery({
        queryKey: ["user"],
        queryFn: getCurrentUser, // Asegúrate de que esta función esté bien importada
      });
      console.log(user);
      // Redirigir en función del rol del usuario
      if (user?.isAdmin) {
        navigate("/admin/dashboard", { replace: true });
      } else {
        navigate("/booking", { replace: true });
      }
    },
    onError: (err) => {
      console.log(err);
      //toast.error("Provided email or password are incorrect");
    },
  });

  return { login, isLoading };
}
