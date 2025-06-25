"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center relative px-4 sm:px-6 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/drtz59hup/image/upload/v1750751253/safespacebg_selatz.jpg')",
      }}
    >
      {/* Tombol kembali */}
      <Link
        href="/"
        className="absolute top-4 left-4 flex items-center gap-2 text-xs sm:text-sm border border-white px-3 py-1 rounded-full hover:bg-white/70 transition z-10 bg-white"
      >
        <ArrowLeft className="w-4 h-4" />
        Kembali ke Halaman
      </Link>

      {/* Logo di luar card */}
      <div className="z-10 mb-4 sm:mb-6">
        <div className="rounded-full overflow-hidden w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] border-2 border-white shadow-md">
          <Image
            src="/logo.jpg"
            alt="Logo"
            width={70}
            height={70}
            className="object-cover"
          />
        </div>
      </div>

      {/* Card form */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-md mx-auto p-5 sm:p-6 md:p-8 bg-white rounded-2xl z-10 border border-[#dbdbdb] shadow-xl"
      >
        {/* Heading */}
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-center mb-1">
          Welcome Back!
        </h2>
        <p className="text-center text-xs sm:text-sm text-gray-500 mb-6">
          We missed you dear! How have you been?
        </p>

        {/* Form */}
        <form>
          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email :
            </label>
            <input
              type="email"
              id="email"
              placeholder="Masukkan Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Masukkan Password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <span
                className="absolute right-3 top-2.5 text-gray-400 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
              </span>
            </div>
          </div>

          {/* Remember & Forgot */}
          <div className="flex justify-between items-center mb-6">
            <label className="flex items-center text-sm gap-2">
              <input type="checkbox" />
              Ingat saya
            </label>
            <Link href="#" className="text-blue-600 text-sm hover:underline">
              Lupa Password?
            </Link>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="cursor-pointer w-full py-2 bg-[#2875D4] text-white rounded-lg font-light hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        {/* Redirect */}
        <p className="text-center text-xs sm:text-sm text-gray-600 mt-6">
          Belum punya akun?{" "}
          <Link href="/auth/register" className="text-blue-600 hover:underline">
            Daftar sekarang
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
