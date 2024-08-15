import React from "react";
import Link from "next/link";
import UserPanelLayout from "@/components/layouts/UserPanelLayout";
import { TbShoppingCartX } from "react-icons/tb";
 
function page() {
  return (
    <UserPanelLayout>
      <main>
        <h1 className="flex justify-start mb-16 mr-10 text-xl font-bold border-b-2 border-gray-700 pb-2 w-[90%]">
            <span> سفارشات </span>
          </h1>
        <div className="relative my-20 text-center md:mt-3">
          <div className="w-full flex items-center justify-center md:my-4">
            <TbShoppingCartX className="text-9xl text-gray-300" />
          </div>
          <p className="text-4xl my-2">محصولی یافت نشد</p>
          <span className="text-lg md:my-4">
            شما هنوز هیچ محصولی در لیست سفارشات خود ندارید.
          </span>
          <span>
            پس از خرید از فروشگاه می توانید جزییات سفارش را مشاهده کنید.{" "}
          </span>
          <div className="mt-9 md:mt-6">
            <Link
              className="bg-gradient-to-r from-brightColor to-brightColor shadow-[0_3px_10px_rgb(0,0,0,0.2)] px-6 py-2 border-2 border-white bg-[#FFDCAB] hover:text-[#AB6B2E] transition-all rounded-full"
              href="/gallery"
            >
              بازدید از فروشگاه
            </Link>
          </div>
        </div>

      </main>
    </UserPanelLayout>
  );
}

export default page;
