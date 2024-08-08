"use client"
import React from "react";
import { FaRegHeart, FaShoppingCart } from "react-icons/fa";
import { CiStar } from 'react-icons/ci'
import Link from "next/link";

const ProductCard = ({name,price ,img,_id}) => {
  return (
    <div className='p-2 border-2 border-gray-200 rounded-2xl bg-white relative shadow-xl'>
      <div className='relative mb-2 rounded-t-lg overflow-hidden'>
        <img src={img} alt="img1" className='w-32 mx-auto md:w-auto' />
      </div>
      <h5 className="font-danaMedium max-h-12 line-clamp-2 text-zinc-700 mb-2 min-h-[40px] md:min-h-[56px]"> {name}</h5>
      <div className='flex items-center justify-center gap-x-2 md:gap-x-2.5 mt-1.5 md:mt-2.5 pb-3 border-b border-b-gray-300'>
        <div className='text-orange-400 pr-1'>
          <span className='font-DanaDemiBold text-base lg:text-xl'>
          {price}
          </span>
          <span className='text-xs md:text-sm tracking-tighter pr-1'>
             تومان
          </span>
        </div>
      </div>
      <div className='flex items-center justify-between mt-2.5'>
        <Link href={`product/${_id}`} className='flex items-center cursor-pointer bg-[#FFDCAB] px-3 py-2 rounded-full'>
            <FaShoppingCart size={20} />
        </Link>
        <Link href={`product/${_id}`} className="flex items-center cursor-pointer bg-[#FFDCAB] px-3 py-2 rounded-full">
          <FaRegHeart />
        </Link>
        <Link href={`product/${_id}`} className=' md:h-6 text-base md:text-2xl flex items-center justify-center text-yellow-400'>
          <CiStar />
          <CiStar />
          <CiStar />
          <CiStar />
          <CiStar />
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
