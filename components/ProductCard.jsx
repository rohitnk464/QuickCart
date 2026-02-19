import React from 'react'
import { assets } from '@/assets/assets'
import Image from 'next/image';
import Link from 'next/link';
import { useAppContext } from '@/context/AppContext';

const ProductCard = ({ product }) => {

    const { currency } = useAppContext();

    const imageUrl =
        product?.images && product.images.length > 0
            ? product.images[0]
            : assets.upload_area; // fallback image

    return (
        <div className="flex flex-col items-start gap-0.5 max-w-[200px] w-full relative">
            <div className="group relative bg-gray-500/10 rounded-lg w-full h-52 flex items-center justify-center">
                <Link href={`/product/${product._id}`} className="w-full h-full flex items-center justify-center cursor-pointer">
                    <Image
                        src={imageUrl}
                        alt={product.name}
                        className="group-hover:scale-105 transition object-cover w-4/5 h-4/5 md:w-full md:h-full"
                        width={800}
                        height={800}
                    />
                </Link>
                <button
                    className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:scale-110 transition z-10 focus:outline-none focus:ring-2 focus:ring-gray-300"
                    aria-label="Add to wishlist"
                >
                    <Image
                        className="h-3 w-3"
                        src={assets.heart_icon}
                        alt=""
                    />
                </button>
            </div>

            <Link href={`/product/${product._id}`} className="w-full cursor-pointer hover:text-gray-900 transition">
                <p className="md:text-base font-medium pt-2 w-full truncate">{product.name}</p>
            </Link>

            <p className="w-full text-xs text-gray-500/70 max-sm:hidden truncate">{product.description}</p>

            <div className="flex items-center gap-2">
                <p className="text-xs">{4.5}</p>
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
                            alt=""
                        />
                    ))}
                </div>
            </div>

            <div className="flex items-end justify-between w-full mt-1">
                <p className="text-base font-medium">{currency}{product.offerPrice}</p>
                <Link href={`/product/${product._id}`} className="max-sm:hidden px-4 py-1.5 text-gray-500 border border-gray-500/20 rounded-full text-xs hover:bg-slate-50 transition text-center">
                    Buy now
                </Link>
            </div>
        </div>
    )
}

export default ProductCard;
