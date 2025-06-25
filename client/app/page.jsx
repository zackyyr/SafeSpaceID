import Link from "next/link";

export default function Home() {
  return (
 <main className="min-h-screen flex flex-col items-center justify-center px-4 py-10 text-center">
      <h1 className="text-4xl sm:text-5xl font-bold text-red-600 mb-4">
        SafeSpaceID
      </h1>
      <p className="text-sm sm:text-base text-gray-500 mb-10 max-w-md">
        <i>
          Sementara pakai tombol ini dulu ya. Nantinya akan diarahkan ke halaman
          company profile ✨
        </i>
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        <Link href="/auth/register">
          <button className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition">
            Register
          </button>
        </Link>

        <Link href="/auth/login">
          <button className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition">
            Login
          </button>
        </Link>

        <Link href="/dashboard/komunitas">
          <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">
            Komunitas
          </button>
        </Link>

        <Link href="/dashboard/edukasi">
          <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">
            Edukasi
          </button>
        </Link>

        <Link href="/dashboard/shop">
          <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">
            Belanja
          </button>
        </Link>

        <Link href="/dashboard/konsultasi">
          <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">
            Konsultasi
          </button>
        </Link>

        <Link href="/dashboard/contact">
          <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">
            Kontak
          </button>
        </Link>
      </div>
    </main>
  );
}
