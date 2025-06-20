# 🛡️ SafeSpaceID

**Digital Shelter for Online Survivors**  
SafeSpaceID adalah platform digital yang dirancang untuk memberdayakan perempuan dan kelompok rentan dalam menghadapi Kekerasan Gender Berbasis Online (KGBO). Platform ini menyediakan ruang aman untuk belajar, melapor secara anonim, dan mendapatkan dukungan profesional.

---

## 🚀 Tentang Proyek

SafeSpaceID dikembangkan dalam program **WINIT: Young Entrepreneur x Programmer**, yang mempertemukan pengusaha non-teknis dengan programmer untuk menciptakan solusi digital berbasis kolaborasi. Fokus utama SafeSpaceID adalah menciptakan ekosistem online yang aman dan inklusif melalui:

- 🧠 Edukasi digital tentang KGBO
- 🫂 Komunitas anonim untuk berbagi cerita
- 📣 Fitur pelaporan aman yang terhubung dengan lembaga mitra
- 🤝 Akses ke layanan psikologis dan bantuan hukum (fitur lanjutan)

---

## ✨ Live Demo

🚧 _Coming soon..._

---

## 🧰 Tech Stack

**Frontend**  
- [Next.js](https://nextjs.org/) – React Framework  
- [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS framework  
- [NextAuth.js](https://next-auth.js.org/) – Autentikasi berbasis credential (support anonim)

**Backend (planned)**  
- [Express.js](https://expressjs.com/) – Backend API ringan  
- [PostgreSQL](https://www.postgresql.org/) – Relasional database  
- [Cloudinary](https://cloudinary.com/) / [Firebase Storage](https://firebase.google.com/products/storage) – Penyimpanan media (bukti laporan, gambar)

---

## 🗂️ Struktur Folder (Frontend)

safespaceid-client/
├── pages/ # Halaman utama
│ ├── index.js # Beranda
│ ├── komunitas.js # Forum anonim
│ ├── edukasi/ # Artikel & konten edukasi
│ │ └── [slug].js # Detail konten
│ ├── lapor.js # Form pelaporan
│ ├── tentang.js # Tentang platform
│ └── auth/ # Halaman login
│ └── signin.js
├── components/ # Komponen UI reusable
│ ├── Navbar.js
│ ├── Layout.js
│ └── ...
├── public/ # Aset publik (logo, gambar)
├── styles/ # Tailwind CSS & global style
├── .env.local # Variabel lingkungan
└── README.md

