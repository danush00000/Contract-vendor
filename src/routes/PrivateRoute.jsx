import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function PrivateRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!user) return <Navigate to="/signin" />;

  return children;
}
const handleGoogleLogin = async () => {
  try {
    await signInWithPopup(auth, googleProvider);
    navigate("/dashboard");
  } catch (error) {
    console.error("Google login failed:", error.message);
    alert(error.message);
  }
};
