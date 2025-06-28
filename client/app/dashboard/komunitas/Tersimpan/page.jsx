"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Heart,
  MessageCircle,
  BookmarkX,
} from "lucide-react";
import ConfirmDeleteModal from "@/components/common/ConfirmDeteleModal";


// Helper format tanggal
const formatDate = (isoDateOrFake) => {
  const date = new Date(isoDateOrFake);
  if (isNaN(date)) return isoDateOrFake; // fallback buat dummy "6h", "1d"
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = String(date.getFullYear()).slice(-2);
  return `${day}/${month}/${year}`;
};

const dummySavedPosts = [
  {
    id: 1,
    slug: "cerita-dia-soal-empati",
    author: "RealSupporter12",
    createdAt: "2025-06-27T08:00:00Z",
    title: "Cerita dia bikin aku mikir ulang soal empati.",
    content:
      "Terkadang yang kita butuh bukan solusi, tapi dipahami. Post ini bikin aku sadar pentingnya hadir buat orang lain.",
    views: "8.9k",
    comments: "12",
    image: [],
  },
  {
    id: 2,
    slug: "perjuangan-dia-validasi",
    author: "AnotherUser",
    createdAt: "2025-06-26T13:30:00Z",
    title: "Perjuangan dia bikin aku merasa gak sendirian.",
    content:
      "Aku simpan post ini karena bener-bener bikin aku ngerasa valid. Kadang, baca pengalaman orang bisa sembuhin juga.",
    views: "11.2k",
    comments: "34",
    image: ["/img/dummy.png"],
  },
];

const Tersimpan = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedPostId, setSelectedPostId] = useState(null);

  const handleDelete = (id) => {
    setSelectedPostId(id);
    setShowModal(true);
  };

  const confirmDelete = () => {
    // Lakukan aksi hapus dari daftar tersimpan (sementara cuma alert)
    alert(`Post ID ${selectedPostId} berhasil dihapus dari tersimpan ✌️`);
    setShowModal(false);
  };


  return (
    <div className="space-y-6 mt-4">
      <h2 className="text-lg font-semibold text-gray-700">Postingan Tersimpan</h2>

      {dummySavedPosts.length > 0 ? (
        dummySavedPosts.map((post) => (
          <Link
            key={post.id}
            href={`/dashboard/komunitas/detail/${post.slug}`}
            className="block"
          >
            <div className="bg-white shadow-sm rounded-xl p-4 flex items-start justify-between gap-4 hover:bg-gray-50 transition cursor-pointer">
              {/* Kiri: Konten Post */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <img
                    src="/img/avatar-placeholder.png"
                    alt="profile"
                    className="w-8 h-8 rounded-full bg-gray-200"
                  />
                  <div className="text-sm text-gray-600">
                    <span className="font-semibold mr-2">{post.author}</span>
                    <span className="text-xs text-gray-400">{formatDate(post.createdAt)}</span>
                  </div>
                </div>

                <h3 className="text-md font-semibold text-gray-800 mb-1">{post.title}</h3>
                <p className="text-sm text-gray-700 line-clamp-2">{post.content}</p>

                {/* Aksi */}
                <div className="flex gap-4 mt-4 text-gray-500 text-sm">
                  <div className="flex items-center gap-1">
                    <Heart size={16} />
                    {post.likes || 123}
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle size={16} />
                    {post.comments}
                  </div>
                  <div
                    className="flex items-center gap-1 hover:text-red-500 cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      handleDelete(post.id);
                    }}
                  >
                    <BookmarkX size={16} />
                    Hapus Tersimpan
                  </div>
                </div>
              </div>

              {/* Kanan: Gambar */}
              {post.image?.length > 0 && (
                <div className="w-[100px] h-[100px] flex-shrink-0">
                  <img
                    src={post.image[0]}
                    alt="thumb"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              )}
            </div>
          </Link>
        ))
      ) : (
        <div className="text-center text-gray-500 text-sm mt-10">
          Belum ada post yang kamu simpan.
        </div>
      )}

      <ConfirmDeleteModal
      isOpen={showModal}
      onClose={() => setShowModal(false)}
      onConfirm={confirmDelete}
    />

    </div>
  );
};

export default Tersimpan;
