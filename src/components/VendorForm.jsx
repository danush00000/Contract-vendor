import { useState, useEffect } from "react";
import { HiUser, HiMail, HiPhone, HiX, HiCheck } from "react-icons/hi";

export default function VendorForm({ onSubmit, onClose, vendor }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    if (vendor) setFormData(vendor);
  }, [vendor]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...formData, id: vendor?.id || Date.now() });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-200/60 via-white/80 to-green-200/60 backdrop-blur-sm transition-all">
      <div className="relative w-full max-w-md rounded-3xl bg-white/80 shadow-2xl border border-gray-100 p-8 backdrop-blur-lg transition-all duration-300">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors duration-200"
          aria-label="Close"
        >
          <HiX size={26} />
        </button>
        <h2 className="text-3xl font-extrabold mb-8 flex items-center gap-3 text-gray-800 tracking-tight">
          <HiUser className="text-blue-500" size={32} />
          {vendor ? "Edit" : "Add"} Vendor
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative group">
            <HiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400 group-focus-within:text-blue-600 transition-colors" size={22} />
            <input
              type="text"
              name="name"
              placeholder="Vendor Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-200 bg-white/70 px-11 py-3 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-400 transition-all duration-200 text-gray-800 placeholder-gray-400"
            />
          </div>
          <div className="relative group">
            <HiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400 group-focus-within:text-blue-600 transition-colors" size={22} />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-200 bg-white/70 px-11 py-3 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-400 transition-all duration-200 text-gray-800 placeholder-gray-400"
            />
          </div>
          <div className="relative group">
            <HiPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400 group-focus-within:text-blue-600 transition-colors" size={22} />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full border border-gray-200 bg-white/70 px-11 py-3 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-400 transition-all duration-200 text-gray-800 placeholder-gray-400"
            />
          </div>
          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex items-center gap-2 px-5 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition font-medium border border-gray-200"
            >
              <HiX size={18} /> Cancel
            </button>
            <button
              type="submit"
              className="flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg hover:from-green-600 hover:to-blue-600 transition font-semibold shadow"
            >
              <HiCheck size={18} />
              {vendor ? "Update" : "Add"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
