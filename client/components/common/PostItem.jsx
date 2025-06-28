"use client";

import { MessageCircle, Bookmark } from "lucide-react";
import Link from "next/link";

export default function PostItem({ post }) {
  const truncate = (text, maxLength) =>
    text.length > maxLength ? text.slice(0, maxLength) + "..." : text;

  return (
    <div className="p-4 rounded-xl mb-4 bg-white hover:shadow-md transition-all">
      {/* Header */}
      <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
        <span className="font-semibold">{post.author}</span>
        <span>{post.time}</span>
      </div>

      {/* Konten yang bisa diklik */}
      <Link href={`/dashboard/komunitas/detail/${post.slug}`}>
        <div>
          {/* Judul */}
          <h3 className="text-lg font-semibold text-gray-900 mb-1 hover:underline">
            {post.title}
          </h3>

          {/* Deskripsi */}
          {post.content && (
          <p className="text-sm text-gray-700 mb-3">
            {truncate(post.content?.[1]?.replace(/<[^>]+>/g, "") || "", 120)}
          </p>
          )}

          {/* Gambar */}
          {post.image?.length > 0 && (
            <div className={`flex gap-2 mb-3 ${post.image.length === 1 ? "flex-col" : "flex-row"}`}>
              {post.image.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`img-${index}`}
                  className={`rounded-lg object-cover ${
                    post.image.length === 1 ? "w-full h-60" : "w-1/2 h-48"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </Link>

      {/* Aksi */}
      <div className="flex items-center gap-4 text-sm text-gray-600">
        <button className="flex items-center gap-1 hover:text-blue-600">
          <MessageCircle size={16} />
          {post.comments} Balasan
        </button>
        <button className="flex items-center gap-1 hover:text-pink-500">
          <Bookmark size={16} />
          Simpan
        </button>
      </div>
    </div>
  );
}
