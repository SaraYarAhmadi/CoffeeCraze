import Footer from "@/components/modules/footer/Footer";
import Navbar from "@/components/modules/navbar/Navbar";
import WishlistModel from "../../../models/Wishlist";
import connectToDB from "@/configs/db";
import { authUser } from "@/utils/serverHelpers";
import React from "react";
import { FaRegHeart } from "react-icons/fa";
import Link from "next/link";
import Product from "@/components/templates/p-user/wishlist/Product";

async function page() {
  connectToDB();
  const user = await authUser();
  let wishes = [];
  if (user) {
    wishes = await WishlistModel.find({ user: user._id })
      .populate("product", "name price score img")
      .lean();
  }

  return (
    <div className="">
      <Navbar isLogin={user ? true : false} />
      <div className="col-span-9 space-y-4 min-h-screen bg-backgroundColor mx-auto text-center lg:px-32 px-5 pt-24">
        <h1 className="text-3xl font-bold md:my-4">علاقه مندی ها</h1>
        {!!wishes.length &&
          wishes.map((wish) => (
            <Product
              key={wish._id}
              productID={String(wish.product._id)}
              name={wish.product.name}
              price={wish.product.price}
              score={wish.product.score}
              img={wish.product.img}
            />
          ))}

        {wishes.length === 0 && (
          <div className="relative my-20 text-center md:mt-3" data-aos="fade-up">
            <div className="w-full flex items-center justify-center md:my-4">
              <FaRegHeart className="text-9xl text-gray-300" />
            </div>
            <p className="text-4xl my-2">محصولی یافت نشد</p>
            <span className="text-lg md:my-4">
              شما هنوز هیچ محصولی در لیست علاقه مندی های خود ندارید.
            </span>
            <span>در صفحه "فروشگاه" محصولات جالب زیادی پیدا خواهید کرد.</span>
            <div className="mt-9 md:mt-6">
              <Link
                className="bg-gradient-to-r from-brightColor to-brightColor shadow-[0_3px_10px_rgb(0,0,0,0.2)] px-6 py-2 border-2 border-white bg-[#FFDCAB] transition-all rounded-full"
                href="/gallery"
              >
                بازگشت به فروشگاه
              </Link>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default page;
