import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const ProtectedRoute = ({ children, adminOnly }) => {
  const { auth } = useContext(AuthContext);
  const location = useLocation();

  if (!auth.token) {
    console.log("User not authenticated, redirecting to login with state:", {
      from: location,
    });
    return <Navigate to="/login" state={{ from: location }} />;
  }

  if (adminOnly && !auth.isAdmin) {
    console.log("User not admin, redirecting to home");
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
