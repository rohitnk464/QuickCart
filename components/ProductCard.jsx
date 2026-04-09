import React from 'react'
import { assets } from '@/assets/assets'
import Image from 'next/image';
import Link from 'next/link';
import { useAppContext } from '@/context/AppContext';

const ProductCard = ({ product }) => {

    const { currency, router, addToCart } = useAppContext();

    const imageUrl =
        product?.images && product.images.length > 0
            ? product.images[0]
            : assets.upload_area; // fallback image

    return (
        <div className="flex flex-col items-start gap-0.5 max-w-[200px] w-full relative group">
            <Link
                href={'/product/' + product._id}
                className="absolute inset-0 z-10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded-lg"
                aria-label={`View details for ${product.name}`}
            />

            <div className="bg-gray-500/10 rounded-lg w-full h-52 flex items-center justify-center relative">
                <Image
                    src={imageUrl}
                    alt={product.name}
                    className="group-hover:scale-105 transition object-cover w-4/5 h-4/5 md:w-full md:h-full"
                    width={800}
                    height={800}
                />
                <button
                    className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md z-20 hover:bg-gray-100 transition"
                    onClick={() => router.push('/product/' + product._id)}
                    aria-label="Add to wishlist"
                >
                    <Image
                        className="h-3 w-3"
                        src={assets.heart_icon}
                        alt=""
                        aria-hidden="true"
                    />
                </button>
            </div>

            <p className="md:text-base font-medium pt-2 w-full truncate">{product.name}</p>
            <p className="w-full text-xs text-gray-500/70 max-sm:hidden truncate">{product.description}</p>

            <div className="flex items-center gap-2" aria-label="Rated 4.5 out of 5 stars">
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
                            aria-hidden="true"
                        />
                    ))}
                </div>
            </div>

            <div className="flex items-end justify-between w-full mt-1">
                <p className="text-base font-medium">{currency}{product.offerPrice}</p>
                <button
                    className="max-sm:hidden px-4 py-1.5 text-gray-500 border border-gray-500/20 rounded-full text-xs hover:bg-slate-50 transition relative z-20"
                    onClick={() => { addToCart(product._id); router.push('/cart'); }}
                    aria-label={`Buy ${product.name} now`}
                >
                    Buy now
                </button>
            </div>
        </div>
    )
}

export default ProductCard;
