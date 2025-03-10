import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { FaGithub } from "react-icons/fa"; // Import GitHub icon

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 px-6 md:px-12 border-t border-gray-700 shadow-lg relative overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-start text-sm text-gray-400">
        {/* 🔹 ด้านซ้าย: โลโก้ + รายละเอียด */}
        <div className="w-full md:w-1/3 text-left animate-fade-in">
          <Image className="cursor-pointer w-32" src={assets.logo} alt="logo" />
        </div>

        {/* 🔹 ตรงกลาง: Our Sponsors */}
        <div className="w-full md:w-1/3 flex flex-col items-center">
          <h2 className="text-lg font-semibold text-white mb-4 animate-slide-in">Our Sponsors</h2>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <a href="https://www.nintendo.com" target="_blank" rel="noopener noreferrer">
              <Image className="hover:scale-110 transition-transform duration-500 ease-in-out animate-pulse"
                src="https://logos-world.net/wp-content/uploads/2020/11/Nintendo-Logo-700x394.png" 
                alt="Nintendo"
                width={75}
                height={75} />
            </a>
            <a href="https://www.playstation.com" target="_blank" rel="noopener noreferrer">
              <Image className="hover:scale-110 transition-transform duration-500 ease-in-out animate-pulse"
              src="https://logos-world.net/wp-content/uploads/2020/11/PlayStation-Logo1994-2009-700x394.png" 
              alt="PlayStation"
              width={75} 
              height={75} />
            </a>
            <a href="https://www.blizzard.com" target="_blank" rel="noopener noreferrer">
              <Image className="hover:scale-110 transition-transform duration-500 ease-in-out animate-pulse"
              src="https://logos-world.net/wp-content/uploads/2022/06/Blizzard-Logo-700x394.png" 
              alt="Blizzard"
              width={75} 
              height={75} />
            </a>
          </div>
        </div>

        {/* 🔹 ด้านขวา: Create By */}
        <div className="w-full md:w-1/3 text-center animate-fade-in">
          <h2 className="text-white font-medium">Create By</h2>
          <a href="https://github.com/MarkCnw" target="_blank" rel="noopener noreferrer">
            <span>😎นาย ชิวงศ์ มูลครบุรี 66162110130-5😎</span>
          </a>
          <br />
          <a href="https://github.com/Toonagugaga" target="_blank" rel="noopener noreferrer">
            <span>😎นาย ภูศิษฐ์ ธนาศิริเดชานันท์ 66162110507-7😎</span>
          </a>
        </div>
      </div>

      {/* 🔹 ส่วนของ GitHub */}
      <p className="py-4 text-center text-xs md:text-sm flex items-center justify-center space-x-2 animate-fade-in">
        <FaGithub className="text-3xl animate-spin-slow" />
        <a href="https://github.com/MarkCnw/GameStore_Project" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          <span>View on GitHub Click to see</span>
        </a>
      </p>
    </footer>
  );
};

export default Footer;