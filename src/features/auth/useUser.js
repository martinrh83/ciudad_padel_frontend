import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";

export default function useUser() {
  const {
    data: user,
    error,
    isPending: isLoading,
  } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });
  console.log(user);
  return {
    isLoading,
    error,
    user,
    isAuthenticated: user?.role === "authenticated",
    isAdmin: user?.isAdmin,
  };
}
