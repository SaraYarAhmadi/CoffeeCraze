import Footer from "@/components/modules/footer/Footer";
import Navbar from "@/components/modules/navbar/Navbar";
import WishlistModel from "../../../models/Wishlist";
import connectToDB from "@/configs/db";
import { authUser } from "@/utils/serverHelpers";
import React from "react";
import { FaRegHeart } from "react-icons/fa";
import Link from "next/link";

async function page() {
  const user = await authUser();
  let wishes = [];
  connectToDB();
  if (user) {
    wishes = await WishlistModel.find({ user: user._id })
      .populate("product", "name price score")
      .lean();
  }

  return (
    <div className="">
      <Navbar isLogin={user ? true : false} />
      <div className="col-span-9 space-y-4 min-h-screen bg-backgroundColor mx-auto text-center lg:px-32 px-5 pt-24">
        <h1 className="text-3xl font-bold md:my-4">علاقه مندی ها</h1>
        {wishes.length > 0 &&
          wishes.map((wish) => (
            <div
              key={wish._id}
              className="flex items-center md:justify-between gap-4 md:gap-6 flex-wrap md:flex-nowrap border-2 border-solid box-border rounded-xl w-full p-8 shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
            >
              <div className="w-full md:w-28 flex-shrink-0">
                <img src="./image/1-1.png" className="w-full" />
              </div>
              <div className="md:w-1/3 w-full">
                <h2 className="text-gray-800 mb-1 xl:text-xl textl-lg font-medium uppercase">
                  {wish.product.name}
                </h2>
              </div>
              <div className="">
                <p className="text-primary text-lg font-semibold">
                  {wish.product.price}
                </p>
              </div>
              <a
                href="#"
                className="ml-auto md:ml-0 block px-6 py-2 text-center text-sm text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium"
              >
                اضافه کردن به سبد خرید
              </a>
              <div className="text-gray-600 hover:text-primary cursor-pointer">
                <i className="fas fa-trash"></i>
              </div>
            </div>
          ))}

        {wishes.length === 0 && (
          <div className="relative my-20 text-center md:mt-3" data-aos="fade-up">
            <div className="w-full flex items-center justify-center md:my-4">
              <FaRegHeart className="text-9xl text-gray-300"/>
            </div>
            <p className="text-4xl my-2">محصولی یافت نشد</p>
            <span className="text-lg md:my-4">شما هنوز هیچ محصولی در لیست علاقه مندی های خود ندارید.</span>
            <span>در صفحه "فروشگاه" محصولات جالب زیادی پیدا خواهید کرد.</span>
            <div className="mt-9 md:mt-6">
              <Link className="bg-gradient-to-r from-brightColor to-brightColor shadow-[0_3px_10px_rgb(0,0,0,0.2)] px-6 py-2 border-2 border-white bg-[#FFDCAB] hover:text-[#AB6B2E] transition-all rounded-full" href="/category">بازگشت به فروشگاه</Link>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default page;
