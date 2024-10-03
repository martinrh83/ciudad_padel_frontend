import { useNavigate } from "react-router-dom";
import useUser from "../features/auth/useUser";
import { useAuth } from "../contexts/AuthContext";

export default function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { isLoading, user, isAuthenticated } = useAuth();

  console.log(user);

  if (isAuthenticated) return children;
}

/* import { useNavigate } from "react-router-dom";
import useUser from "../../features/auth/useUser";
import { useEffect } from "react";

export default function ProtectedRoute({ children, requiredRole }) {
  const navigate = useNavigate();
  const { isLoading, user, isAuthenticated } = useUser();

  useEffect(() => {
    if (!isLoading && (!isAuthenticated || user?.role !== requiredRole)) {
      navigate("/login", { replace: true }); // Redirigir si no cumple con el rol
    }
  }, [isLoading, isAuthenticated, user, requiredRole, navigate]);

  if (isLoading) {
    return <div>Loading...</div>; // O spinner
  }

  if (isAuthenticated && user?.role === requiredRole) {
    return children;
  }

  return null;
} */
