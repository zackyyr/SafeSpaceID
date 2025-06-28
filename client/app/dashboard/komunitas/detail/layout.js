// app/komunitas/detail/layout.jsx
import SidebarCommunity from "@/components/common/SidebarCommunity";
import SidebarHighlights from "@/components/common/SidebarHighlights";
import React from "react";

export default function DetailLayout({ children }) {
  return (
    <div className="flex bg-[#f2f6fa] min-h-screen">
      <div className="hidden lg:block w-[250px] sticky top-0 h-screen overflow-y-auto">
        <SidebarCommunity />
      </div>
      <main className="flex-1 px-4 py-8">{children}</main>
      <aside className="w-[360px] hidden xl:block p-6 sticky top-0 h-screen overflow-y-auto">
        <SidebarHighlights />
      </aside>
    </div>
  );
}
