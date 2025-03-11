import { Navigate, Outlet } from "react-router-dom";
import auth from "../services/authService";

const PrivateRoute = () => {
  return auth.isLoggedIn() ? <Outlet /> : <Navigate to="/" replace />;
};

export default PrivateRoute;
