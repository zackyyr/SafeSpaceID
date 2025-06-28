import { X, ImagePlus } from "lucide-react";
import React, { useEffect, useState } from "react";

export default function PostModalEditor({ onClose }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [randomUsername, setRandomUsername] = useState("");
  const [randomAvatar, setRandomAvatar] = useState("/img/avatar-placeholder.png");

  const entities = [
    "Enderman", "Creeper", "Foxie", "Bee", "Skeleton",
    "Warden", "Mooshroom", "Axolotl", "Phantom", "Villager",
  ];

  useEffect(() => {
    const ent = entities[Math.floor(Math.random() * entities.length)];
    const serial1 = Math.floor(Math.random() * 100);
    const serial2 = Math.floor(Math.random() * 10);
    const randUsername = `${ent}${serial1}-${serial2}`;

    const randAvatarIndex = Math.floor(Math.random() * 9) + 1;  
    const randAvatar = `/avatar/PP${randAvatarIndex}.png`;

    setRandomUsername(randUsername);
    setRandomAvatar(randAvatar);
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    if (image) formData.append("image", image);
    formData.append("username", randomUsername);
    formData.append("avatar", randomAvatar); // opsional

    try {
      const res = await fetch("/api/posts", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Gagal kirim postingan");

      console.log("Post berhasil dikirim");
      onClose();
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-start pt-20 px-4 backdrop-blur-sm bg-black/10">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-xl">
        {/* Header */}
        <div className="relative flex items-center justify-between px-6 py-4 border-b">
          <div className="flex-1 text-center">
            <h2 className="text-base sm:text-lg font-semibold">Postingan Baru</h2>
          </div>
          <button
            onClick={onClose}
            className="absolute right-6 top-4 p-1 text-gray-600 hover:text-black"
          >
            <X size={20} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Anon user + Upload */}
          <div className="flex items-center gap-3">
            <img
              src={randomAvatar}
              alt="anon"
              className="w-10 h-10 rounded-full bg-gray-200"
            />
            <div>
              <p className="text-xs text-gray-500">Username mu akan menjadi :</p>
              <p className="text-sm font-semibold">{randomUsername}</p>
            </div>

            <label className="cursor-pointer ml-auto text-blue-600 flex items-center text-sm gap-1">
              <ImagePlus size={16} />
              Berikan Gambar
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </label>
          </div>

          {/* Preview */}
          {imagePreview && (
            <img src={imagePreview} alt="preview" className="w-full max-h-60 object-cover rounded-lg" />
          )}

          {/* Judul */}
          <div className="relative">
            <input
              type="text"
              placeholder="Berikan Judul"
              maxLength={80}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border-none border-b text-lg font-medium focus:outline-none focus:border-blue-600"
            />
            <span className="absolute right-0 top-0 text-xs text-gray-400">{title.length}/80</span>
          </div>

          {/* Konten */}
          <textarea
            rows={5}
            placeholder="Mau cerita apa hari ini?"
            className="w-full border-none text-gray-700 text-base resize-none focus:outline-none"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm"
            >
              Kirim
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
