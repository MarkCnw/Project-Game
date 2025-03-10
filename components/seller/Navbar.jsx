import React from "react";
import { assets } from "../../assets/assets";
import Image from "next/image";
import { useAppContext } from "@/context/AppContext";

const Navbar = () => {
  const { router } = useAppContext();

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-32 py-4 bg-gray-900 text-white border-b border-gray-700 shadow-lg">
      {/* Logo */}
      <Image
        className="cursor-pointer w-32"
        onClick={() => router.push("/")}
        src={assets.logo}
        alt="logo"
      />

      {/* Logout Button */}
      <button className="bg-blue-600 hover:bg-blue-500 transition text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm">
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
