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
        <div
            className="relative flex flex-col items-start gap-0.5 max-w-[200px] w-full cursor-pointer group/card"
        >
            <Link
                href={'/product/' + product._id}
                className="absolute inset-0 z-10"
                aria-label={`View details for ${product.name}`}
            >
                <span className="sr-only">View details</span>
            </Link>

            <div className="cursor-pointer group relative bg-gray-500/10 rounded-lg w-full h-52 flex items-center justify-center">
                <Image
                    src={imageUrl}
                    alt={product.name}
                    className="group-hover:scale-105 transition object-cover w-4/5 h-4/5 md:w-full md:h-full"
                    width={800}
                    height={800}
                />
                <button
                    type="button"
                    aria-label="Add to wishlist"
                    className="absolute top-2 right-2 z-20 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition"
                >
                    <Image
                        className="h-3 w-3"
                        src={assets.heart_icon}
                        alt=""
                    />
                </button>
            </div>

            <p className="md:text-base font-medium pt-2 w-full truncate">{product.name}</p>
            <p className="w-full text-xs text-gray-500/70 max-sm:hidden truncate">{product.description}</p>

            <div className="flex items-center gap-2" aria-label="Rating: 4.5 stars">
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
                <button
                    type="button"
                    aria-label="Buy now"
                    className="relative z-20 max-sm:hidden px-4 py-1.5 text-gray-500 border border-gray-500/20 rounded-full text-xs hover:bg-slate-50 transition"
                >
                    Buy now
                </button>
            </div>
        </div>
    )
}

export default ProductCard;
