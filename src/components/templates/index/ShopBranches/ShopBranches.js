import Button from "@/components/modules/button/Button";
import ProductCard from "@/components/modules/productCard/ProductCard";
import Link from "next/link";
import React from "react";
import Image from "next/image";

function ShopBranches() {
  return (
    <div className="flex flex-col justify-center lg:px-24 px-5 bg-backgroundColor pb-10">
      <h1 className=" font-semibold text-center text-2xl lg:mt-14 mt-14 mb-8">
        دسترسی به شعب
      </h1>
      <div
        data-aos-duration="1000"
        className="grid grid-cols-1 md:grid-cols-3 gap-x-3 lg:gap-5 place-items-center"
      >
        <div className="flex flex-col justify-center items-center rounded-lg">
          <div className="w-full md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px] lg:p-3 rounded-lg">
            <Image
              className="w-full h-full rounded-lg"
              src="/image/shopping5.png"
              alt="img"
              width={500}
              height={500}
            />
          </div>
          <Link
            href="/contact-us"
            className=" flex flex-col items-center my-5 gap-3"
          >
            <Button title="شعبه استانبول " />
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center rounded-lg">
          <div className="w-full md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px] lg:p-3">
            <Image
              className="w-full h-full rounded-lg"
              src="/image/shopping4.png"
              alt="img"
              width={500}
              height={500}
            />
          </div>
          <Link
            href="/contact-us"
            className=" flex flex-col items-center my-5 gap-3"
          >
            <Button title=" شعبه پاسداران " />
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center rounded-lg">
          <div className="w-full md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px] lg:p-3">
            <Image
              className="w-full h-full rounded-lg"
              src="/image/shopping3.png"
              alt="img"
              width={500}
              height={500}
            />
          </div>
          <Link
            href="/contact-us"
            className=" flex flex-col items-center my-5 gap-3"
          >
            <Button title=" شعبه میرداماد  " />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ShopBranches;
