import React from "react";
import { FaRegHeart, FaShoppingCart } from "react-icons/fa";

import { CiStar } from 'react-icons/ci'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import Link from "next/link";

const ProductCard = (props: any) => {
  return (
    <div className='p-2 border-2 border-gray-200 rounded-2xl bg-white hover:text-white relative shadow-xl'>
      <div className='relative mb-2 rounded-t-lg overflow-hidden'>
        <img src="./image/coffee2.png" alt="img1" className='w-32 mx-auto md:w-auto' />
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
        <Link href="#" className='flex items-center cursor-pointer'>
          <span className=" flex items-center bg-[#FFDCAB] px-3 py-2 rounded-full">
            <FaShoppingCart size={20} />
          </span>
        </Link>
        <Link href="/wishlist" className="relative">
          <FaRegHeart />
          <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs text-white bg-brandDark border-2  rounded-full -top-2 -end-2 dark:border-gray-900">1</div>
        </Link>
        <span className=' md:h-6 text-base md:text-2xl flex items-center justify-center text-yellow-400'>
          <CiStar />
          <CiStar />
          <CiStar />
          <CiStar />
          <CiStar />
        </span>
      </div>
    </div>

    //   <div className=" w-full lg:w-1/4 bg-white p-3 rounded-lg">
    //   <div>
    //     <img className=" rounded-xl" src="./image/coffee2.png" alt="img1" />
    //   </div>
    //   <div className=" p-2 mt-5">
    //     <div className=" flex flex-row justify-between">
    //       <h3 className=" font-semibold text-xl">{props.title}</h3>
    //       <h3 className=" font-semibold text-xl">{props.value}</h3>
    //     </div>
    //     <div className=" flex flex-row justify-between mt-3">
    //       <div className=" flex gap-2">
    //         <button className="px-3 text-sm border-2 border-[#AB6B2E] bg-[#FFDCAB] hover:text-[#AB6B2E] transition-all rounded-lg">
    //           Hot
    //         </button>
    //         <button className="px-3 text-sm border-2 border-[#AB6B2E] bg-[#FFDCAB] hover:text-[#AB6B2E] transition-all rounded-lg">
    //           Cold
    //         </button>
    //       </div>
    //       <span className=" flex items-center bg-[#FFDCAB] px-3 py-2 rounded-full cursor-pointer">
    //         <FaShoppingCart size={20} />
    //       </span>
    //     </div>
    //   </div>
    // </div>
  );
};

export default ProductCard;
