"use client";

import React, { useState } from "react";
import PostList from "@/components/common/PostList";
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
    image: ["/img/dummy.png", "/img/dummy.png"],
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
    image: ["/img/dummy.png"],
  },
];

const Komunitas = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <PostInputBar onOpenModal={() => setShowModal(true)} />
      <PostList posts={dummyPosts} />
      {showModal && <PostModalEditor onClose={() => setShowModal(false)} />}
    </>
  );
};

export default Komunitas;
