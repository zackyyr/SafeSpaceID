"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Heart,
  MessageCircle,
} from "lucide-react";
import PostModalEditor from "@/components/common/PostModalEditor";
import PostInputBar from "@/components/common/PostInputBar";
import detailPosts from "@/app/dashboard/data/DetailPost.json";

// Format tanggal ke DD/MM/YY
const formatDate = (isoDate) => {
  const date = new Date(isoDate);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = String(date.getFullYear()).slice(-2);
  return `${day}/${month}/${year}`;
};

const PostAnda = () => {
  const [showModal, setShowModal] = useState(false);

  // Ambil post dengan id 1 & 2
  const userPosts = detailPosts.filter((post) => post.id === 1 || post.id === 2);

  return (
    <>
      <PostInputBar onOpenModal={() => setShowModal(true)} />

      <div className="space-y-6 mt-6">
        {userPosts.length > 0 ? (
          userPosts.map((post) => (
            <Link
              key={post.id}
              href={`/dashboard/komunitas/detail/${post.slug}`}
              className="block"
            >
              <div className="bg-white shadow-sm rounded-xl p-4 flex items-start justify-between gap-4 hover:bg-gray-50 transition cursor-pointer">
                {/* Kiri: Konten Post */}
                <div className="flex-1">
                  {/* Header */}
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

                  {/* Isi Post */}
                  <h3 className="text-md font-semibold text-gray-800 mb-1">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-700 line-clamp-2">
                    {post.content?.[0]}
                  </p>

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
            Kamu belum membuat post apa pun.
          </div>
        )}
      </div>

      {showModal && <PostModalEditor onClose={() => setShowModal(false)} />}
    </>
  );
};

export default PostAnda;
