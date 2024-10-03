import { createContext, useContext } from "react";
import { getCurrentUser } from "../services/apiAuth";
import { useQuery } from "@tanstack/react-query";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const {
    data: user,
    error,
    isPending: isLoading,
  } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  const value = {
    user,
    error,
    isLoading,
    isAuthenticated: user?.role === "authenticated",
    isAdmin: user?.isAdmin,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };
