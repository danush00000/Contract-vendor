import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function PrivateRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading)
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-100 via-white to-green-100">
        <div className="animate-spin rounded-full h-14 w-14 border-t-4 border-b-4 border-blue-500 border-opacity-30 border-t-blue-600 mb-4"></div>
        <p className="text-blue-700 font-semibold text-lg tracking-wide">
          Loading...
        </p>
      </div>
    );
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
