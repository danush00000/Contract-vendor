import { HiPencil, HiTrash } from "react-icons/hi";

export default function VendorTable({ vendors, onEdit, onDelete }) {
  return (
    <div className="overflow-x-auto rounded-2xl shadow-lg border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-green-50 p-4">
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-gradient-to-r from-indigo-500 via-sky-400 to-emerald-400 text-white">
            <th className="px-6 py-4 text-left font-semibold rounded-tl-2xl tracking-wide">
              Vendor Name
            </th>
            <th className="px-6 py-4 text-left font-semibold tracking-wide">Email</th>
            <th className="px-6 py-4 text-left font-semibold tracking-wide">Phone</th>
            <th className="px-6 py-4 text-left font-semibold rounded-tr-2xl tracking-wide">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {vendors.length === 0 ? (
            <tr>
              <td colSpan="4" className="text-center p-10 text-gray-400 italic">
                No vendors available.
              </td>
            </tr>
          ) : (
            vendors.map((vendor, idx) => (
              <tr
                key={vendor.id}
                className={`border-t transition-all duration-200 hover:bg-blue-100/40 ${
                  idx % 2 === 0 ? "bg-white/90" : "bg-gray-100/80"
                }`}
              >
                <td className="px-6 py-4 font-semibold text-gray-900">
                  {vendor.name}
                </td>
                <td className="px-6 py-4 text-gray-700">{vendor.email}</td>
                <td className="px-6 py-4 text-gray-700">{vendor.phone}</td>
                <td className="px-6 py-4 flex gap-2">
                  <button
                    onClick={() => onEdit(vendor)}
                    className="flex items-center gap-1 px-4 py-2 bg-yellow-400/90 text-white rounded-xl hover:bg-yellow-500/90 transition-all duration-150 font-semibold shadow focus:outline-none focus:ring-2 focus:ring-yellow-300"
                    title="Edit"
                  >
                    <HiPencil size={18} />
                    <span className="hidden sm:inline">Edit</span>
                  </button>
                  <button
                    onClick={() => onDelete(vendor.id)}
                    className="flex items-center gap-1 px-4 py-2 bg-red-500/90 text-white rounded-xl hover:bg-red-600/90 transition-all duration-150 font-semibold shadow focus:outline-none focus:ring-2 focus:ring-red-300"
                    title="Delete"
                  >
                    <HiTrash size={18} />
                    <span className="hidden sm:inline">Delete</span>
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
