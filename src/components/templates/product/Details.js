"use client";
import React, { useState } from "react";
import { FaRegHeart, FaRegStar, FaStar } from "react-icons/fa";
import Link from "next/link";
import { IoCheckmark } from "react-icons/io5";

function Details({ product }) {
  const [amount, setAmount] = useState(1);
  console.log(product);

  return (
    <div className="flex flex-col text-justify justify-start gap-6 lg:w-2/4 md:mr-8">
      <h1 className="text-3xl font-bold"> {product.name} </h1>
      <div className="flex items-center justify-start">
        <div className=" md:h-6 text-base md:text-2xl flex items-center justify-center text-yellow-400">
          {new Array(product.score).fill(0).map((item, index) => (
            <FaStar key={index} />
          ))}

          {new Array(5 - product.score).fill(0).map((item, index) => (
            <FaRegStar key={index} />
          ))}
        </div>
        <p>(دیدگاه کاربر {product.comments.length})</p>
      </div>

      <p className="text-gray-900">{product.shortDescription}</p>
      <div className="flex flex-col text-sm gap-y-1 text-gray-900">
        <span> مناسب برای:{product.suitableFor} </span>
        <span className="my-2">میزان بو:{product.smell} </span>
        <p>وزن: {product.weight} گرم </p>
      </div>
      <span className="text-2xl font-semibold">
        {product.price.toLocaleString()} تومان
      </span>
      <div className="flex items-center justify-start gap-x-1">
        <IoCheckmark />
        <p className="text-sm gap-y-1 text-gray-900">موجود در انبار</p>
      </div>
      <div className="flex flex-row items-center gap-12">
        <div className="flex flex-row items-center">
          <button
            className="bg-gray-200 py-2 px-5 rounded-lg text-violet-800 text-3xl"
            onClick={() => setAmount((prev) => prev - 1)}
          >
            -
          </button>
          <span className="py-4 px-6 rounded-lg">{amount}</span>
          <button
            className="bg-gray-200 py-2 px-4 rounded-lg text-violet-800 text-3xl"
            onClick={() => setAmount((prev) => prev + 1)}
          >
            +
          </button>
        </div>
        <button className="w-52 bg-gradient-to-r from-primary to-secondary border-2 border-primary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">
          اضافه کردن به سبد خرید
        </button>
      </div>
      <div className="flex items-center justify-start">
        <Link href="/wishlist">
          <FaRegHeart />
        </Link>
        <span className="text-sm">اضافه کردن به علاقه مندی ها</span>
      </div>
    </div>
  );
}

export default Details;
