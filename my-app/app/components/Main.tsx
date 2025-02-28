import Image from "next/image";

export default function Main() {
  return (
    <div className="p-6">
      {/* Header */}
      <div className="text-black font-bold text-xl mb-4">Transactions | This Month</div>

      {/* Tab Buttons */}
      <div className="flex space-x-4 mb-4">
        <button className="rounded-lg text-black bg-gray-200 px-4 py-2">Payouts (22)</button>
        <button className="rounded-lg text-white bg-blue-500 px-4 py-2">Refunds (6)</button>
      </div>

      {/* Search Bar and Buttons */}
      <div className="flex justify-between items-center bg-white p-3 rounded-lg shadow-md mb-4">
        <input
          type="search"
          placeholder="Order ID or transaction ID"
          className="bg-gray-100 px-3 py-2 w-80 rounded-md text-sm outline-none text-black"
        />

        <div className="flex space-x-2">
          <button className="p-2 rounded-md bg-gray-200 text-black">Sort</button>
          <button className="p-2 rounded-md bg-gray-200">
            <Image src="/assets/home.png" height={24} width={24} alt="Dropdown Icon" />
          </button>
        </div>
      </div>

      {/* Transactions Table */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100 text-gray-600 text-sm">
              <th className="py-3 px-6">ORDER ID</th>
              <th className="py-3 px-6">STATUS</th>
              <th className="py-3 px-6">TRANSACTION ID</th>
              <th className="py-3 px-6">REFUND DATE</th>
              <th className="py-3 px-6">ORDER AMOUNT</th>
            </tr>
          </thead>
          <tbody className="text-black text-sm">
            {[
              { id: "#281209", status: "Successful", txn: "131634495747", date: "Today, 08:45 PM", amount: "₹1,125.00" },
              { id: "#281208", status: "Processing", txn: "131634495747", date: "Yesterday, 08:45 PM", amount: "₹1,125.00" },
              { id: "#281207", status: "Failed", txn: "131634495747", date: "12 Jul 2023, 3:00 PM", amount: "₹1,125.00" },
            ].map((order, index) => (
              <tr key={index} className="border-t">
                <td className="py-3 px-6 text-blue-600">{order.id}</td>
                <td className="py-3 px-6">
                  <span
                    className={`inline-flex items-center space-x-2 ${
                      order.status === "Successful" ? "text-green-600" :
                      order.status === "Processing" ? "text-gray-600" :
                      "text-red-600"
                    }`}
                  >
                    <span className="w-2 h-2 rounded-full bg-current"></span>
                    <span>{order.status}</span>
                  </span>
                </td>
                <td className="py-3 px-6">{order.txn}</td>
                <td className="py-3 px-6">{order.date}</td>
                <td className="py-3 px-6 font-semibold">{order.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
