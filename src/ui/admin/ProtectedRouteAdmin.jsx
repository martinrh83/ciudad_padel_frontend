import { useNavigate } from "react-router-dom";
import useUser from "../../features/auth/useUser";
import { useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";

export default function ProtectedRouteAdmin({ children }) {
  const navigate = useNavigate();
  const { isLoading, user, isAuthenticated, isAdmin } = useAuth();
  console.log(user);

  useEffect(() => {
    // Si no está autenticado o no es admin, redirigir
    if (!isLoading && (!isAuthenticated || !isAdmin)) {
      navigate("/login", { replace: true }); // O redirigir a otra ruta que tenga sentido
    }
  }, [isLoading, isAuthenticated, isAdmin, navigate]);

  // Mostrar un estado de carga mientras obtenemos los datos del usuario
  if (isLoading) {
    return <div>Loading...</div>; // O un spinner si prefieres
  }

  // Mostrar el contenido si es admin
  if (isAuthenticated && isAdmin) {
    return children;
  }

  // Si no es admin, renderizamos null porque ya lo hemos redirigido en useEffect
  return null;
}
