import Image from "next/image";

export default function Navbar() {
  return (
    <div className="p-4 border-b">
      <nav className="flex items-center gap-4">
        {/* Title */}
        <h2 className="text-xl text-black font-semibold">Payouts</h2>

        {/* "How it works" section */}
        <div className="flex items-center text-gray-500 text-sm cursor-pointer">
          <span className="mr-1">❓</span> How it works
        </div>

        {/* Search bar */}
        <input
          type="search"
          placeholder="Search features, tutorials, etc."
          className="bg-gray-100 px-3 py-2 w-80 rounded-md text-sm outline-none text-black"
        />

        {/* Icons */}
        <div className="flex items-center gap-2 ml-auto">
          <button className="p-2 rounded-full bg-gray-200">
            <Image
              src="/assets/home.png"
              height={24}
              width={24}
              alt="Chat Icon"
            />
          </button>
          <button className="p-2 rounded-full bg-gray-200">
            <Image
              src="/assets/home.png"
              height={24}
              width={24}
              alt="Dropdown Icon"
            />
          </button>
        </div>
      </nav>
    </div>
  );
}
