import Image from "next/image";

const menuItems = [
  { name: "Home", icon: "/assets/home.png" },
  { name: "Orders", icon: "/assets/home.png" },
  { name: "Products", icon: "/assets/home.png" },
  { name: "Delivery", icon: "/assets/home.png" },
  { name: "Marketing", icon: "/assets/home.png" },
  { name: "Analytics", icon: "/assets/home.png" },
  { name: "Payouts", icon: "/assets/home.png" },
  { name: "Discounts", icon: "/assets/home.png" },
  { name: "Audience", icon: "/assets/home.png" },
  { name: "Appearance", icon: "/assets/home.png" },
  { name: "Plugins", icon: "/assets/home.png" },
];

export default function SideBar() {
  return (
    <div className="bg-blue-950 h-screen p-4 flex flex-col gap-6">
      {/* Store Header */}
      <div className="flex items-center gap-3">
        <Image src="/assets/image_icon.png" height={48} width={48} alt="main-icon" />
        <div>
          <h3 className="font-bold text-white">Dipit</h3>
          <h3 className="underline text-white cursor-pointer">View Store</h3>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="flex flex-col gap-2">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 p-3 text-white cursor-pointer rounded-lg hover:bg-gray-700 transition"
          >
            <Image src={item.icon} height={24} width={24} alt={`${item.name}-icon`} />
            <span>{item.name}</span>
          </div>
        ))}
      </nav>
    </div>
  );
}
