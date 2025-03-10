'use client';

import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="w-full flex justify-center my-16 overflow-hidden shadow-lg">
      <Image
        src={assets.nitendo}
        alt="nitendo_image"
        width={1150} // เพิ่มขึ้น 2 ซม. (1200 + 76)
        height={324} // คงความสูงเดิม
        className="object-contain rounded-lg" // เพิ่มโค้งมน
        quality={100} // ป้องกันภาพเบลอ
        priority // โหลดเร็วขึ้น
      />
    </div>
  );
};

export default Banner;
