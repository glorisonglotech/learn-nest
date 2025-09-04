import { Navigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useRef } from "react";

const ProtectedRoute = ({ isAuth, children }) => {
  const hasShownToast = useRef(false); // 🔹 remember if toast was shown

  if (!isAuth) {
    if (!hasShownToast.current) {
      toast.error("You have to login first!");
      hasShownToast.current = true; // prevent duplicate
    }
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
