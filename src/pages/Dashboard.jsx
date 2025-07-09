import { useState } from "react";
import VendorTable from "../components/VendorTable";
import VendorForm from "../components/VendorForm";

export default function Dashboard() {
  const [vendors, setVendors] = useState([]);
  const [editingVendor, setEditingVendor] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

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

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-xl p-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-semibold text-gray-700">Contract Vendors</h1>
          <button
            onClick={() => {
              setEditingVendor(null);
              setIsFormOpen(true);
            }}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Add Vendor
          </button>
        </div>
        <VendorTable vendors={vendors} onEdit={handleEdit} onDelete={handleDelete} />
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
