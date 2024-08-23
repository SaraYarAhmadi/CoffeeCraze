"use client"
import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const Hero = () => {

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="banner pt-24">
        <div className="container pb-8 sm:pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {/* text content section */}
            <div className="flex flex-col justify-center gap-6 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
              <h1 data-aos="fade-up" data-aos-once="true" className="text-xl sm:text-2xl lg:text-3xl font-bold">
                <span
                  data-aos="zoom-out"
                  data-aos-delay="300"
                  className="bg-clip-text text-transparent bg-gradient-to-b from-primary to-primary/90 font-cursive">
                  قهوه
                </span>{" "}
                همراهی ایده‌آل برای آغاز یک روز پرانرژی
              </h1>
              <div data-aos="fade-up" data-aos-delay="200" className="mt-3 mx-auto">
                <button className="bg-gradient-to-r from-primary to-secondary border-2 border-primary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">
                  مشاهده و خرید
                </button>
              </div>
            </div>
            {/* Image section */}
            <div
              data-aos="zoom-in" data-aos-duration="300" className="min-h-[450px] flex justify-center items-center relative order-1 sm:order-2 ">
              <Image data-aos-once="true" src="/image/b2.png" alt="biryani img" className="w-[350px] sm:w-[300px] lg:w-[450px] sm:scale-125 mx-auto spin " />
              <div
                data-aos="fade-left"
                className="bg-gradient-to-r from-primary to-secondary p-3 rounded-xl absolute top-10 left-10" >
                <h1 className="text-white"> برای هر سلیقه </h1>
              </div>
              <div
                data-aos="fade-right" data-aos-offset="0" className="bg-gradient-to-r from-primary to-secondary p-3 rounded-xl absolute bottom-10 right-10">
                <h1 className="text-white">بهترین قهوه </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
