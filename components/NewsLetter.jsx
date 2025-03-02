import React, { useState } from "react";
import { FaGamepad } from "react-icons/fa";  // นำเข้าไอคอนเกมส์คอนโซลจาก react-icons

const NewsLetter = () => {
  const [hearts, setHearts] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleClick = () => {
    if (inputValue.trim() !== "I love you toon") return; // ต้องพิมพ์ "I love you toon" เท่านั้น

    const newHearts = Array.from({ length: Math.floor(Math.random() * 10) + 10 }) // สุ่มหัวใจ 10-20 ดวง
      .map(() => ({
        id: Date.now() + Math.random(),
        randomLeft: Math.random() * 100, // กระจายหัวใจทั่วหน้าจอ
        randomSize: Math.random() * 20 + 30, // ขนาดหัวใจสุ่ม 30px - 50px
        randomRotate: Math.random() * 360, // หัวใจหมุนแบบสุ่ม
        delay: Math.random() * 500, // หน่วงเวลาแบบสุ่ม (0-500ms)
      }));

    setHearts((prev) => [...prev, ...newHearts]);

    setTimeout(() => {
      setHearts((prev) => prev.filter((heart) => !newHearts.some((h) => h.id === heart.id)));
    }, 3000); // หัวใจจะหายไปหลัง 3 วินาที
  };

  return (
    <div className="flex flex-col items-center justify-center text-center space-y-2 pt-8 pb-14 relative overflow-hidden">
      <h1 className="md:text-4xl text-2xl font-medium text-white">Write "I love you toon"</h1>
      <p className="md:text-base text-white pb-8">
        Type <strong>I love you toon</strong> to see the magic ❤️
      </p>
      <div className="flex items-center justify-between max-w-2xl w-full md:h-14 h-12">
        <input
          className="border border-gray-500/30 rounded-md h-full border-r-0 outline-none w-full rounded-r-none px-3 text-gray-500"
          type="text"
          placeholder="Write something"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          onClick={handleClick}
          className="md:px-12 px-8 h-full text-white bg-red-600 rounded-md rounded-l-none relative overflow-hidden transform transition duration-300 hover:scale-105 hover:bg-red-700 active:scale-95 active:bg-red-800"
        >
          <FaGamepad className="text-2xl" /> {/* แสดงไอคอนเกมส์คอนโซล */}
        </button>
      </div>

      {/* แสดงหัวใจลอยขึ้นทั่วหน้าจอ */}
      {hearts.map(({ id, randomLeft, randomSize, randomRotate, delay }) => (
        <div
          key={id}
          className="absolute text-red-500 animate-float"
          style={{
            left: `${randomLeft}%`,
            fontSize: `${randomSize}px`,
            transform: `rotate(${randomRotate}deg)`,
            animationDelay: `${delay}ms`,
          }}
        >
          ❤️
        </div>
      ))}

      {/* เพิ่ม CSS Animation */}
      <style>
        {`
          @keyframes floatUp {
            0% {
              transform: translateY(0) scale(1);
              opacity: 1;
            }
            50% {
              transform: translateY(-50vh) scale(1.2);
              opacity: 0.8;
            }
            100% {
              transform: translateY(-100vh) scale(1);
              opacity: 0;
            }
          }

          .animate-float {
            position: absolute;
            bottom: 0;
            animation: floatUp 3s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
};

export default NewsLetter;