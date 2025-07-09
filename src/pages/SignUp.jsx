import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiUser, HiMail, HiLockClosed, HiUserAdd } from "react-icons/hi";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // Optionally, you can update the user's profile with fullName here
      navigate("/dashboard");
    } catch (err) {
      alert("Registration failed: " + err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-green-100 px-4">
      <div className="bg-white/90 shadow-2xl rounded-2xl p-8 w-full max-w-md border border-blue-100 backdrop-blur-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-green-700 flex items-center justify-center gap-2">
          <HiUserAdd className="text-green-500" size={28} />
          Sign Up
        </h2>
        <form onSubmit={handleRegister} className="space-y-5">
          <div className="relative">
            <HiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-green-400" size={20} />
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              className="w-full border border-green-200 bg-white/80 px-10 py-3 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-green-400 transition text-gray-800 placeholder-gray-400"
            />
          </div>
          <div className="relative">
            <HiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-green-400" size={20} />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border border-green-200 bg-white/80 px-10 py-3 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-green-400 transition text-gray-800 placeholder-gray-400"
            />
          </div>
          <div className="relative">
            <HiLockClosed className="absolute left-3 top-1/2 -translate-y-1/2 text-green-400" size={20} />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full border border-green-200 bg-white/80 px-10 py-3 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-green-400 transition text-gray-800 placeholder-gray-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-3 rounded-xl font-semibold shadow-lg hover:from-green-600 hover:to-blue-600 transition flex items-center justify-center gap-2"
          >
            <HiUserAdd className="w-5 h-5" />
            Sign Up
          </button>
        </form>
        <p className="text-sm text-center mt-6 text-gray-600">
          Already have an account?{" "}
          <Link to="/signin" className="text-blue-600 font-semibold hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
