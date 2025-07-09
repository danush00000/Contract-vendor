import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase";
import { HiMail, HiLockClosed, HiLogin } from "react-icons/hi";
import { FcGoogle } from "react-icons/fc";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Email/Password Login
  const handleEmailLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (err) {
      alert("Invalid credentials");
      console.error(err.message);
    }
  };

  // Google Sign-In
  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/dashboard");
    } catch (err) {
      alert("Google sign-in failed");
      console.error(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-green-100 px-4">
      <div className="bg-white/90 p-8 rounded-2xl shadow-2xl w-full max-w-md border border-blue-100 backdrop-blur-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-700 flex items-center justify-center gap-2">
          <HiLogin className="text-blue-500" size={28} />
          Sign In
        </h2>
        <form onSubmit={handleEmailLogin} className="space-y-5">
          <div className="relative">
            <HiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400" size={20} />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-blue-200 bg-white/80 px-10 py-3 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-400 transition text-gray-800 placeholder-gray-400"
              required
            />
          </div>
          <div className="relative">
            <HiLockClosed className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400" size={20} />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-blue-200 bg-white/80 px-10 py-3 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-400 transition text-gray-800 placeholder-gray-400"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-3 rounded-xl font-semibold shadow-lg hover:from-green-600 hover:to-blue-600 transition"
          >
            Sign In
          </button>
        </form>

        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-200"></div>
          <span className="mx-4 text-gray-400 font-medium">or</span>
          <div className="flex-grow border-t border-gray-200"></div>
        </div>

        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-3 py-3 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 shadow transition font-semibold text-gray-700"
        >
          <FcGoogle size={22} />
          Sign in with Google
        </button>

        <p className="text-sm text-center mt-6 text-gray-600">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-blue-600 font-semibold hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
