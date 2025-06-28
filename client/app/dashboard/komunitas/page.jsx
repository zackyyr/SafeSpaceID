"use client";
import React, { useState } from "react";
import SidebarCommunity from "@/components/common/SidebarCommunity";
import PostList from "@/components/common/PostList";
import SidebarHighlights from "@/components/common/SidebarHighlights";
import PostInputBar from "@/components/common/PostInputBar";
import PostModalEditor from "@/components/common/PostModalEditor";

const dummyPosts = [
  {
    id: 1,
    author: "Kangaroo12",
    time: "4h",
    title: "Aku gak tahu ini salah siapa, tapi aku capek disalahin terus.",
    content:
      "Kadang yang kita butuhin bukan solusi, cuma tempat buat didengerin. Hari ini aku ngerasa semuanya nyalahin aku, bahkan saat aku cuma diem.",
    views: "101k",
    comments: "76",
    image: ["/img/dummy.png", "/img/dummy.png"], // 2 image
  },
  {
    id: 2,
    author: "iH8Nuggetss",
    time: "2h",
    title:
      "Setelah aku speak up soal pelecehan online, banyak yang bilang aku cari perhatian.",
    content:
      "Awalnya aku kira speak up itu langkah berani—ternyata yang datang justru hujatan. Tapi aku tetap yakin aku gak salah.",
    views: "2.8k",
    comments: "103",
    image: ["/img/dummy.png"], // 1 image
  },
];

const Komunitas = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="bg-[#f8f9fb] min-h-screen flex">
      {/* Sidebar kiri */}
      <div className="hidden lg:block w-[250px] sticky top-0 h-screen overflow-y-auto">
        <SidebarCommunity />
      </div>

      {/* Main feed tengah */}
      <main className="flex-1 max-w-4xl mx-auto p-6 space-y-6">
        <PostInputBar onOpenModal={() => setShowModal(true)} />
        <PostList posts={dummyPosts} />
      </main>

      {/* Sidebar kanan */}
      <aside className="w-[360px] hidden xl:block p-6 sticky top-0 h-screen overflow-y-auto">
        <SidebarHighlights />
      </aside>

      {showModal && <PostModalEditor onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default Komunitas;
