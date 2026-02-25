import React from 'react'
import { assets } from '@/assets/assets'
import Image from 'next/image';
import { useAppContext } from '@/context/AppContext';
import Link from 'next/link';
import toast from 'react-hot-toast';

const ProductCard = ({ product }) => {

    const { currency, router, addToCart, user } = useAppContext();

    const imageUrl =
        product?.images && product.images.length > 0
            ? product.images[0]
            : assets.upload_area; // fallback image

    return (
        <div
            className="flex flex-col items-start gap-0.5 max-w-[200px] w-full relative group"
        >
            <div className="cursor-pointer bg-gray-500/10 rounded-lg w-full h-52 flex items-center justify-center relative">
                <Image
                    src={imageUrl}
                    alt={product.name}
                    className="group-hover:scale-105 transition object-cover w-4/5 h-4/5 md:w-full md:h-full"
                    width={800}
                    height={800}
                />
                <button
                    onClick={(e) => { e.preventDefault(); toast("Wishlist feature coming soon!", { icon: '❤️' }); }}
                    className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md z-10 hover:bg-red-50 transition"
                    aria-label="Add to wishlist"
                >
                    <Image
                        className="h-3 w-3"
                        src={assets.heart_icon}
                        alt="heart_icon"
                    />
                </button>
            </div>

            <Link href={'/product/' + product._id} className="md:text-base font-medium pt-2 w-full truncate block before:absolute before:inset-0 before:z-0" aria-label={`View ${product.name} details`}>
                {product.name}
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
                            alt="star_icon"
                        />
                    ))}
                </div>
            </div>

            <div className="flex items-end justify-between w-full mt-1">
                <p className="text-base font-medium">{currency}{product.offerPrice}</p>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        addToCart(product._id);
                        if (!user) toast.success("Added to cart");
                    }}
                    className="max-sm:hidden px-4 py-1.5 text-gray-500 border border-gray-500/20 rounded-full text-xs hover:bg-slate-50 transition relative z-10"
                    aria-label="Add to cart"
                >
                    Buy now
                </button>
            </div>
        </div>
    )
}

export default ProductCard;
