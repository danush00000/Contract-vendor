import { useState } from "react";
import VendorTable from "../components/VendorTable";
import VendorForm from "../components/VendorForm";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { HiLogout, HiPlusCircle, HiUserCircle } from "react-icons/hi";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
  const [vendors, setVendors] = useState([]);
  const [editingVendor, setEditingVendor] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const navigate = useNavigate();
  const { user, loading } = useAuth();

  const handleAddVendor = (vendor) => {
    if (editingVendor) {
      setVendors((prev) =>
        prev.map((v) => (v.id === editingVendor.id ? vendor : v))
      );
    } else {
      setVendors((prev) => [...prev, { ...vendor, id: Date.now() }]);
    }
    setIsFormOpen(false);
    setEditingVendor(null);
  };

  const handleEdit = (vendor) => {
    setEditingVendor(vendor);
    setIsFormOpen(true);
  };

  const handleDelete = (id) => {
    setVendors((prev) => prev.filter((v) => v.id !== id));
  };

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/signin");
  };

  if (loading)
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-100 via-white to-green-100">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-400 border-opacity-30 border-t-blue-600 mb-4 shadow-lg"></div>
        <p className="text-blue-700 font-semibold text-lg tracking-wide">
          Loading Dashboard...
        </p>
      </div>
    );

  if (!user) return <Navigate to="/signin" />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-green-100 p-6">
      <div className="max-w-5xl mx-auto bg-white/90 shadow-2xl rounded-3xl p-8 border border-blue-100 backdrop-blur-md">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex items-center gap-3">
            <span className="inline-block">
              <HiUserCircle className="w-12 h-12 text-blue-400 drop-shadow" />
            </span>
            <div>
              <h1 className="text-3xl font-extrabold text-blue-700 tracking-tight mb-1">
                Contract Vendors
              </h1>
              <p className="text-sm text-gray-500 font-medium">
                Welcome{user?.email ? `, ${user.email}` : ""}!
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => {
                setEditingVendor(null);
                setIsFormOpen(true);
              }}
              className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-2.5 rounded-xl hover:from-green-600 hover:to-blue-600 transition font-semibold shadow-lg focus:outline-none focus:ring-2 focus:ring-green-300"
            >
              <HiPlusCircle className="w-6 h-6" />
              <span className="hidden sm:inline">Add Vendor</span>
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-2.5 rounded-xl hover:from-red-600 hover:to-pink-600 transition font-semibold shadow-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
              title="Logout"
            >
              <HiLogout className="w-6 h-6" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
        <div className="mb-6">
          <div className="w-full h-2 rounded-full bg-gradient-to-r from-blue-200 via-green-200 to-blue-100 opacity-60 shadow-inner"></div>
        </div>
        <VendorTable
          vendors={vendors}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onShare={(vendor) => {
            navigator.clipboard.writeText(
              `Vendor: ${vendor.name}\nEmail: ${vendor.email}\nPhone: ${vendor.phone}`
            );
            alert("Vendor info copied to clipboard!");
          }}
        />
        {isFormOpen && (
          <VendorForm
            onSubmit={handleAddVendor}
            onClose={() => setIsFormOpen(false)}
            vendor={editingVendor}
          />
        )}
      </div>
    </div>
  );
}
