import React from 'react'
import { assets } from '@/assets/assets'
import Image from 'next/image';
import { useAppContext } from '@/context/AppContext';
import Link from 'next/link';
import toast from 'react-hot-toast';

const ProductCard = ({ product }) => {

    const { currency, user, addToCart } = useAppContext();

    const imageUrl =
        product?.images && product.images.length > 0
            ? product.images[0]
            : assets.upload_area; // fallback image

    const handleWishlist = (e) => {
        e.preventDefault();
        e.stopPropagation();
        toast('Wishlist feature coming soon!', { icon: '💖' });
    };

    const handleBuyNow = (e) => {
        e.preventDefault();
        e.stopPropagation();
        addToCart(product._id);
        if (!user) {
            toast.success('Added to Cart');
        }
    };

    return (
        <div
            className="flex flex-col items-start gap-0.5 max-w-[200px] w-full relative"
        >
            <div className="cursor-pointer group relative bg-gray-500/10 rounded-lg w-full h-52 flex items-center justify-center">
                <Image
                    src={imageUrl}
                    alt={product.name}
                    className="group-hover:scale-105 transition object-cover w-4/5 h-4/5 md:w-full md:h-full"
                    width={800}
                    height={800}
                />
                <button
                    onClick={handleWishlist}
                    className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md z-10 hover:bg-red-50 transition"
                    aria-label="Add to wishlist"
                >
                    <Image
                        className="h-3 w-3"
                        src={assets.heart_icon}
                        alt=""
                    />
                </button>
            </div>

            <Link
                href={'/product/' + product._id}
                className="md:text-base font-medium pt-2 w-full truncate after:absolute after:inset-0 after:z-0"
                aria-label={`View ${product.name} details`}
            >
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
                            alt=""
                        />
                    ))}
                </div>
            </div>

            <div className="flex items-end justify-between w-full mt-1 relative z-10">
                <p className="text-base font-medium">{currency}{product.offerPrice}</p>
                <button
                    onClick={handleBuyNow}
                    className="max-sm:hidden px-4 py-1.5 text-gray-500 border border-gray-500/20 rounded-full text-xs hover:bg-slate-50 transition"
                    aria-label="Add to cart"
                >
                    Buy now
                </button>
            </div>
        </div>
    )
}

export default ProductCard;
