import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import { LuLoaderCircle } from "react-icons/lu";
const LoadingSpinner = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    }}
  >
    <LuLoaderCircle className="text-brand text-2xl" />
  </div>
);

const ProtectedRoute = () => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
