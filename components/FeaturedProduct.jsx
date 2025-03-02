'use client';

  import React from "react";
  import { assets } from "@/assets/assets";
  import Image from "next/image";

  const products = [
    {
      id: 1,
      image: assets.girl_with_headphone_image,
    },
    {
      id: 2,
      image: assets.girl_with_earphone_image,
    },
    {
      id: 3,
      image: assets.boy_with_laptop_image,
    },
  ];

  const FeaturedProduct = () => {
    return (
      <div className="mt-14">
        <div className="flex flex-col items-center">
          <p className="text-3xl font-medium text-white">Featured Products</p>
          <div className="w-28 h-0.5 bg-orange-600 mt-2"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-14 mt-12 md:px-14 px-4">
          {products.map(({ id, image }) => (
            <div key={id} className="relative group">
              <Image
                src={image}
                alt={`Product ${id}`}
                className="group-hover:scale-110 transition duration-300 w-full h-auto object-cover rounded-md" // เพิ่ม rounded ที่นี่
              />
              <div className="group-hover:-translate-y-4 group-hover:opacity-100 opacity-0 transition duration-300 absolute bottom-8 left-8 text-white space-y-2">
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  export default FeaturedProduct;