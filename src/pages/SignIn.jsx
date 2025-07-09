import { Link, useNavigate } from "react-router-dom";
import { HiMail, HiLockClosed, HiLogin } from "react-icons/hi";

export default function SignIn() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-green-100 px-4">
      <div className="bg-white/90 shadow-2xl rounded-2xl p-8 w-full max-w-md border border-blue-100 backdrop-blur-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-700 flex items-center justify-center gap-2">
          <HiLogin className="text-blue-500" size={28} />
          Sign In
        </h2>
        <form onSubmit={handleLogin} className="space-y-5">
          <div className="relative">
            <HiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400" size={20} />
            <input
              type="email"
              placeholder="Email"
              required
              className="w-full border border-blue-200 bg-white/80 px-10 py-3 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-400 transition text-gray-800 placeholder-gray-400"
            />
          </div>
          <div className="relative">
            <HiLockClosed className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400" size={20} />
            <input
              type="password"
              placeholder="Password"
              required
              className="w-full border border-blue-200 bg-white/80 px-10 py-3 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-400 transition text-gray-800 placeholder-gray-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-3 rounded-xl font-semibold shadow-lg hover:from-green-600 hover:to-blue-600 transition"
          >
            Sign In
          </button>
        </form>
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
