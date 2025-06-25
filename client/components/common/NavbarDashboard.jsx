"use client";
import { Bell, User, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const navItems = [
  { name: "Komunitas", href: "/dashboard/komunitas" },
  { name: "Edukasi", href: "/dashboard/edukasi" },
  { name: "Belanja", href: "/dashboard/shop" },
  { name: "Konsultasi", href: "/coming-soon" },
  { name: "Kontak", href: "/dashboard/contact" },
];

const NavbarDashboard = () => {
  const pathname = usePathname();

  return (
    <header className="w-full bg-white px-15 py-4 flex items-center justify-between">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/logo.jpg"
          alt="SafeSpaceID Logo"
          width={60}
          height={60}
          className="rounded-full"
        />
      </Link>

      {/* Search Bar */}
      <div className="flex-1 mx-6 max-w-md hidden sm:flex">
        <div className="flex items-center w-full bg-white border border-gray-200 rounded-lg px-4 py-2 transition hover:ring-1 hover:ring-blue-300">
          <input
            type="text"
            placeholder="Type to search"
            className="bg-transparent outline-none flex-1 text-sm text-gray-700 placeholder:text-gray-400"
          />
          <Search className="w-4 h-9 text-gray-500" />
        </div>
      </div>

      {/* Menu */}
      <nav className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={clsx(
              "relative text-sm transition",
              pathname === item.href
                ? "text-black font-medium after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-blue-500 after:rounded-full"
                : "text-gray-400 hover:text-black"
            )}
          >
            {item.name}
          </Link>
        ))}
      </nav>

      {/* Icons */}
      <div className="flex items-center gap-3 ml-6">
        <button className="w-9 h-9 flex items-center justify-center bg-[#F9F9F9] rounded-full">
          <Bell className="w-4 h-4 text-blue-600" />
        </button>
        <button className="w-9 h-9 flex items-center justify-center bg-[#F9F9F9] rounded-full">
          <User className="w-4 h-4 text-gray-700" />
        </button>
      </div>
    </header>
  );
};

export default NavbarDashboard;
