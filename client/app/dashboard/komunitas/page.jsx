"use client";
import React from "react";
import { Heart, MessageCircle, Eye } from "lucide-react";
import SidebarCommunity from "@/components/common/SidebarCommunity";

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
    image: ["/img/1.jpg", "/img/2.jpg"],
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
    image: ["/img/3.jpg"],
  },
  {
    id: 3,
    author: "CatLovers55",
    time: "4h",
    title:
      "Dia ngirimin foto gak senonoh tanpa aku minta, tapi malah aku yang disalahin.",
    content: "",
    views: "3.2k",
    comments: "48",
    image: ["/img/4.jpg"],
  },
];

const Komunitas = () => {
  return (
    <div className="bg-[#f8f9fb] min-h-screen flex">
      {/* Sidebar */}
         <SidebarCommunity />

      {/* Main Feed */}
      <main className="flex-1 max-w-4xl mx-auto p-6 space-y-6">
        <input
          type="text"
          placeholder="Apa yang kamu rasakan sekarang?"
          className="w-full border px-4 py-3 rounded-lg text-sm bg-white"
        />

        {dummyPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white p-5 rounded-xl shadow-sm flex justify-between"
          >
            <div className="flex-1 space-y-2">
              <div className="text-xs text-gray-500">
                <strong>{post.author}</strong> · {post.time}
              </div>
              <h2 className="text-lg font-semibold leading-snug">
                {post.title}
              </h2>
              {post.content && (
                <p className="text-sm text-gray-600">{post.content}</p>
              )}
              <div className="flex space-x-4 mt-2 text-gray-500 text-xs items-center">
                <span className="flex items-center gap-1">
                  <Eye size={14} />
                  {post.views}
                </span>
                <span className="flex items-center gap-1">
                  <MessageCircle size={14} />
                  {post.comments}
                </span>
                <Heart size={14} className="cursor-pointer hover:text-red-500" />
              </div>
            </div>
            {post.image && (
              <div className="flex gap-2 ml-4">
                {post.image.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt="post-img"
                    className="w-20 h-20 object-cover rounded-md"
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </main>

      {/* Right Column */}
      <aside className="w-[300px] hidden xl:block p-6 space-y-6">
        <div className="bg-white p-4 rounded-lg space-y-3">
          <h3 className="font-semibold text-lg">Sedang Banyak Dibaca</h3>
          <ul className="text-sm">
            <li className="mb-3">
              <p className="font-semibold">Curhat soal pasangan yang manipulatif tapi selalu playing victim</p>
              <p className="text-xs text-gray-500">5.2k Views · <span className="text-orange-600">213 Comments</span></p>
            </li>
            <li className="mb-3">
              <p className="font-semibold">Dikira lebay karena nangis habis di-body shaming di DM</p>
              <p className="text-xs text-gray-500">3.9k Views · <span className="text-orange-600">132 Comments</span></p>
            </li>
            <li>
              <p className="font-semibold">Aku diem, tapi dia terus ngirimin chat toxic tiap malam</p>
              <p className="text-xs text-gray-500">3.5k Views · <span className="text-orange-600">98 Comments</span></p>
            </li>
          </ul>
          <a href="#" className="text-blue-600 text-sm">+ Lihat Semuanya</a>
        </div>

        <div className="bg-white p-4 rounded-lg space-y-4">
          <h3 className="font-semibold text-lg">Info Terbaru</h3>
          <div className="space-y-3 text-sm">
            <div>
              <p><strong>📌 [FITUR BARU]</strong> Sekarang kamu bisa menyimpan thread favorit!</p>
              <button className="text-blue-600 mt-1 text-xs">Lihat</button>
            </div>
            <div>
              <p><strong>🧑‍💻 [Webinar]</strong> “Keamanan Digital untuk Perempuan” – 14 Juni 2025</p>
              <button className="text-blue-600 mt-1 text-xs">Lihat</button>
            </div>
            <div>
              <p><strong>📣 [Campaign]</strong> #AmanBersama – Bantu sebarkan suara survivors</p>
              <button className="text-blue-600 mt-1 text-xs">Lihat</button>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Komunitas;
