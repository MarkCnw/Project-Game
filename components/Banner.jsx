'use client';

import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between md:pl-20 py-14 md:py-0 bg-gradient-to-r from-[#1e2a47] to-[#3b4c8e] my-16 rounded-xl overflow-hidden shadow-lg">
      <Image
        className="max-w-56 transform transition duration-300 hover:scale-105"
        src={assets.jbl_soundbox_image}
        alt="jbl_soundbox_image"
      />
      <div className="flex flex-col items-center justify-center text-center space-y-4 px-4 md:px-0 text-white">
        <h2 className="text-3xl md:text-4xl font-bold max-w-[290px]">
          Level Up Your Gaming Experience
        </h2>
        <p className="max-w-[343px] font-medium text-gray-200/90">
          From immersive sound to precise controls—everything you need to win.
        </p>
      </div>
      <Image
        className="hidden md:block max-w-80 transform transition duration-300 hover:scale-105"
        src={assets.md_controller_image}
        alt="md_controller_image"
      />
      <Image
        className="md:hidden transform transition duration-300 hover:scale-105"
        src={assets.sm_controller_image}
        alt="sm_controller_image"
      />
    </div>
  );
};

export default Banner;
