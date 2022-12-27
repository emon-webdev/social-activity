import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="mx-auto text-center">
        <div className="w-16 mx-auto h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
      </div>
    );
  }

  if (user && user.uid) {
    return children;
  }
  return <Navigate to="/signin"></Navigate>;
};

export default PrivateRoute;
