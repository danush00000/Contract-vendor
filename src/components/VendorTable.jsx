import { HiPencil, HiTrash, HiShare } from "react-icons/hi";
import { FiDownload } from "react-icons/fi";
import * as XLSX from "xlsx";

export default function VendorTable({ vendors, onEdit, onDelete, onShare }) {
  // Download vendors as Excel
  const handleDownload = () => {
    const worksheet = XLSX.utils.json_to_sheet(vendors);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Vendors");
    XLSX.writeFile(workbook, "vendors.xlsx");
  };

  return (
    <div className="overflow-x-auto rounded-3xl shadow-2xl border border-blue-200 bg-gradient-to-br from-blue-100 via-white to-green-100 p-6 backdrop-blur-md">
      <div className="flex justify-end mb-4">
        <button
          onClick={handleDownload}
          className="flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-blue-500 via-sky-400 to-green-400 text-white rounded-full hover:from-blue-600 hover:to-green-500 transition font-bold shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
          title="Download as Excel"
        >
          <FiDownload size={20} />
          <span className="hidden sm:inline">Download</span>
        </button>
      </div>
      <table className="min-w-full table-auto rounded-2xl overflow-hidden">
        <thead>
          <tr className="bg-gradient-to-r from-indigo-600 via-sky-500 to-emerald-500 text-white shadow">
            <th className="px-6 py-4 text-left font-bold rounded-tl-2xl tracking-wide drop-shadow">
              Vendor Name
            </th>
            <th className="px-6 py-4 text-left font-bold tracking-wide drop-shadow">
              Email
            </th>
            <th className="px-6 py-4 text-left font-bold tracking-wide drop-shadow">
              Phone
            </th>
            <th className="px-6 py-4 text-left font-bold rounded-tr-2xl tracking-wide drop-shadow">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {vendors.length === 0 ? (
            <tr>
              <td colSpan="4" className="text-center p-10 text-blue-400 italic bg-white/80 rounded-b-2xl">
                No vendors available.
              </td>
            </tr>
          ) : (
            vendors.map((vendor, idx) => (
              <tr
                key={vendor.id}
                className={`border-t transition-all duration-200 hover:bg-blue-100/60 ${
                  idx % 2 === 0 ? "bg-white/90" : "bg-green-50/80"
                }`}
              >
                <td className="px-6 py-4 font-semibold text-blue-900">
                  {vendor.name}
                </td>
                <td className="px-6 py-4 text-blue-700">{vendor.email}</td>
                <td className="px-6 py-4 text-blue-700">{vendor.phone}</td>
                <td className="px-6 py-4 flex gap-2">
                  <button
                    onClick={() => onEdit(vendor)}
                    className="flex items-center gap-1 px-4 py-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white rounded-full hover:from-yellow-500 hover:to-yellow-600 transition font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-300"
                    title="Edit"
                  >
                    <HiPencil size={18} />
                    <span className="hidden sm:inline">Edit</span>
                  </button>
                  <button
                    onClick={() => onDelete(vendor.id)}
                    className="flex items-center gap-1 px-4 py-2 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-full hover:from-pink-600 hover:to-red-600 transition font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-pink-300"
                    title="Delete"
                  >
                    <HiTrash size={18} />
                    <span className="hidden sm:inline">Delete</span>
                  </button>
                  <button
                    onClick={() => onShare && onShare(vendor)}
                    className="flex items-center gap-1 px-4 py-2 bg-gradient-to-r from-blue-400 to-green-400 text-white rounded-full hover:from-blue-500 hover:to-green-500 transition font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                    title="Share"
                  >
                    <HiShare size={18} />
                    <span className="hidden sm:inline">Share</span>
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
