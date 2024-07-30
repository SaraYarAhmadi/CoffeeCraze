"use client";
import React, { useState } from "react";
import { FaRegHeart, FaRegStar } from "react-icons/fa";
import { MdChatBubble } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";
import { IoCheckmark } from "react-icons/io5";
import { CiStar } from "react-icons/ci";

function Details({ product }) {
  const [amount, setAmount] = useState(1);
  console.log(product);

  return (
    <div className="flex flex-col text-justify justify-start gap-6 lg:w-2/4 md:mr-8">
      <h1 className="text-3xl font-bold"> {product.name} </h1>
      <div className="flex items-center justify-start">
        <div className=" md:h-6 text-base md:text-2xl flex items-center justify-center text-yellow-400">
          <CiStar />
          <CiStar />
          <CiStar />
          <CiStar />
          <CiStar />
        </div>
        <p>(دیدگاه کاربر)</p>
      </div>

      <p className="text-gray-700">
        دو گونه گیاهی مطرح در دنیای قهوه که همواره در تقابل با هم بوده اند
        Robusta و Arabica در این ترکیب کنار هم قرار گرفته اند با این تفاوت که
        اکثریت آنرا بر خلاف دیگر محصولات برشته کاری ” قهوه ست ” دانه های Robusta
        تشکیل می دهند . برای افرادی که لذت نوشیدن قهوه را در میزان کافئین آن
        جستجو می کنند . قهوه ای ساده که اسیدیته پایینی دارد و در مقابل تن واری و
        کافئین و تلخی بالاتری نسبت به دیگر محصولات “قهوه ست ” دارد .
      </p>
      <span className="text-2xl font-semibold">199.000 تومان</span>
      <div className="flex items-center justify-start gap-x-1">
        <IoCheckmark />
        <p>موجود در انبار</p>
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
