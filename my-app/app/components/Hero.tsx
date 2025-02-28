export default function Hero() {
    return (
      <div className="p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-black">Overview</h2>
          <button className="bg-gray-200 text-black px-4 py-2 rounded-md border">
            This Month ⌄
          </button>
        </div>
  
        {/* Cards Section */}
        <div className="grid grid-cols-3 gap-4">
          {/* Next Payout Card */}
          <div className="bg-blue-600 text-white p-5 rounded-lg">
            <div className="flex items-center justify-between">
              <span className="font-semibold">Next payout</span>
              <span className="text-sm">❓</span>
            </div>
            <div className="text-2xl font-bold my-2">₹ 2,312.23</div>
            <a href="#" className="text-sm underline">23 orders →</a>
            <div className="mt-4 bg-blue-700 p-3 rounded-md text-sm">
              <span className="block">Next payout date:</span>
              <span className="font-bold">Today, 04:00 PM</span>
            </div>
          </div>
  
          {/* Amount Pending Card */}
          <div className="bg-white shadow-md p-5 rounded-lg border">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-black">Amount Pending</span>
              <span className="text-sm">❓</span>
            </div>
            <div className="text-2xl font-bold my-2 text-black">₹ 92,312.20</div>
            <a href="#" className="text-sm underline text-black">13 orders →</a>
          </div>
  
          {/* Amount Processed Card */}
          <div className="bg-white shadow-md p-5 rounded-lg border">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-black">Amount Processed</span>
              <span className="text-sm">❓</span>
            </div>
            <div className="text-2xl font-bold my-2 text-black">₹ 23,92,312.19</div>
          </div>
        </div>
      </div>
    );
  }
  