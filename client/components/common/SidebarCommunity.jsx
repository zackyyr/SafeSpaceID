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

    const isActive = (href) => {
      // Khusus untuk halaman beranda, hanya cocok jika exact path
      if (href === "/dashboard/komunitas") return pathname === href;
      return pathname === href || pathname.startsWith(href + "/");
    };


  const menuMain = [
    { name: "Beranda", href: "/dashboard/komunitas", icon: <Home size={16} /> },
    { name: "Post Anda", href: "/dashboard/komunitas/PostAnda", icon: <Send size={16} /> },
    { name: "Tersimpan", href: "/dashboard/komunitas/Tersimpan", icon: <Bookmark size={16} /> },
  ];

  const menuSupport = [
    { name: "Notifikasi", href: "/coming-soon", icon: <Heart size={16} /> },
    { name: "Balasan", href: "/coming-soon", icon: <Reply size={16} /> },
    { name: "Panduan", href: "/coming-soon", icon: <FileText size={16} /> },
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
    <aside className="w-full h-screen flex flex-col bg-[#f2f6fa] px-6 py-9 text-sm text-gray-700">
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
      <div className="mt-auto pt-6 border-t border-gray-200">
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
