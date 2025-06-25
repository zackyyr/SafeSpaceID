"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Send,
  Bookmark,
  Heart,
  Reply,
  FileText,
  Info,
} from "lucide-react";

const SidebarCommunity = () => {
  const pathname = usePathname();

  // Fungsi untuk menentukan apakah menu sedang aktif
  const isActive = (href) => pathname === href || pathname.startsWith(href + "/");

  const menuMain = [
    { name: "Beranda", href: "/dashboard/komunitas", icon: <Home size={16} /> },
    { name: "Post Anda", href: "/dashboard/komunitas/post-anda", icon: <Send size={16} /> },
    { name: "Tersimpan", href: "/dashboard/komunitas/tersimpan", icon: <Bookmark size={16} /> },
  ];

  const menuSupport = [
    { name: "Notifikasi", href: "/dashboard/komunitas/notifikasi", icon: <Heart size={16} /> },
    { name: "Balasan", href: "/dashboard/komunitas/balasan", icon: <Reply size={16} /> },
    { name: "Panduan", href: "/dashboard/komunitas/panduan", icon: <FileText size={16} /> },
  ];

  const renderMenu = (items) => (
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i}>
          <Link
            href={item.href}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition ${
              isActive(item.href)
                ? "bg-white text-black font-medium shadow"
                : "hover:bg-white"
            }`}
          >
            <div className="w-6 h-6 flex items-center justify-center bg-[#ecf1f6] rounded-md">
              {item.icon}
            </div>
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <aside className="w-[250px] hidden lg:flex flex-col bg-[#f2f6fa] min-h-screen px-6 py-8 text-sm text-gray-700">
      {/* Main Navigation */}
      <div className="mb-10">
        <h3 className="text-xs font-medium text-gray-500 mb-4">Main Navigation</h3>
        {renderMenu(menuMain)}
      </div>

      {/* Support & Info */}
      <div className="mb-10">
        <h3 className="text-xs font-medium text-gray-500 mb-4">Support & Info</h3>
        {renderMenu(menuSupport)}
      </div>

      {/* Tentang KGBO */}
      <div className="mt-auto">
        <Link
          href="/komunitas/tentang"
          className={`flex items-center gap-2 text-xs hover:underline ${
            isActive("/komunitas/tentang") ? "text-black font-medium" : "text-gray-500"
          }`}
        >
          <Info size={16} />
          Tentang KGBO
        </Link>
      </div>
    </aside>
  );
};

export default SidebarCommunity;
