import React from 'react'
import { assets } from '@/assets/assets'
import Image from 'next/image';
import { useAppContext } from '@/context/AppContext';

const ProductCard = ({ product }) => {
    const { currency, router } = useAppContext();

    return (
        <div
            onClick={() => { router.push('/product/' + product._id); scrollTo(0, 0); }}
            className="group flex flex-col items-start gap-2 max-w-[220px] w-full cursor-pointer bg-blue-50 p-3 rounded-lg shadow-lg hover:shadow-xl transition transform group-hover:scale-105"
        >
            {/* Image Section */}
            <div className="relative bg-gray-300 rounded-lg w-full h-52 flex items-center justify-center overflow-hidden group-hover:scale-105 transition duration-300">
                <Image
                    src={product.image[0]}
                    alt={product.name}
                    className="object-cover w-full h-full transition duration-300"
                    width={800}
                    height={800}
                />
            </div>

            {/* Product Name */}
            <p className="text-lg font-semibold text-gray-800 truncate w-full">{product.name}</p>

            {/* Description */}
            <p className="w-full text-xs text-gray-600 max-sm:hidden truncate">{product.description}</p>

            {/* Rating */}
            <div className="flex items-center gap-2">
                <p className="text-sm font-medium">{4.5}</p>
                <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <Image
                            key={index}
                            className="h-3 w-3"
                            src={
                                index < Math.floor(4)
                                    ? assets.star_icon
                                    : assets.star_dull_icon
                            }
                            alt="star_icon"
                        />
                    ))}
                </div>
            </div>

            {/* Price & Buy Button */}
            <div className="flex items-center justify-between w-full mt-2">
                <p className="text-lg font-bold text-gray-800">{currency}{product.offerPrice}</p>
                <button  className="px-4 py-1.5 text-white bg-blue-500 rounded-full text-sm hover:bg-blue-600 transition">
                    Buy now
                </button>
            </div>
        </div>
    );
}

export default ProductCard;
