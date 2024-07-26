"use client"
import React from "react";
import { FaRegHeart, FaShoppingCart } from "react-icons/fa";
import { CiStar } from 'react-icons/ci'
import Link from "next/link";

const ProductCard = (props: any) => {
  return (
    <div className='p-2 border-2 border-gray-200 rounded-2xl bg-white relative shadow-xl'>
      <div className='relative mb-2 rounded-t-lg overflow-hidden'>
        <img src="./image/menu2.jpg" alt="img1" className='w-32 mx-auto md:w-auto' />
      </div>
      <h5 className="font-danaMedium max-h-12 line-clamp-2 text-zinc-700 mb-2 min-h-[40px] md:min-h-[56px]"> {props.title}</h5>
      <div className='flex items-center justify-center gap-x-2 md:gap-x-2.5 mt-1.5 md:mt-2.5 pb-3 border-b border-b-gray-300'>
        <div className='text-orange-400 pr-1'>
          <span className='font-DanaDemiBold text-base lg:text-xl'>
            154000
          </span>
          <span className='text-xs md:text-sm tracking-tighter'>
            تومان
          </span>
        </div>
      </div>
      <div className='flex items-center justify-between mt-2.5'>
        <Link href="#" className='flex items-center cursor-pointer bg-[#FFDCAB] px-3 py-2 rounded-full'>
            <FaShoppingCart size={20} />
        </Link>
        <Link href="/wishlist" className="relative">
          <FaRegHeart />
        </Link>
        <div className=' md:h-6 text-base md:text-2xl flex items-center justify-center text-yellow-400'>
          <CiStar />
          <CiStar />
          <CiStar />
          <CiStar />
          <CiStar />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
