"use client"
import React, { useState } from "react";
import { SiCoffeescript } from "react-icons/si";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaShoppingCart, FaRegHeart } from "react-icons/fa";

const Navbar = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <div className="fixed w-full z-10">
      <div>
        <div className=" flex flex-row justify-between p-5 lg:px-32 px-5 bg-gradient-to-r from-backgroundColor to-brightColor shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <div className="hidden md:flex flex-row items-center cursor-pointer gap-2">
            <span>
              <SiCoffeescript size={25} />
            </span>
          </div>

          <nav className="hidden md:flex flex-row items-center text-lg font-medium gap-8">
            <Link
              href="/"
              className="group relative inline-block cursor-pointer hover:text-brightColor"
            >
              صفحه اصلی
              <span className="absolute inset-x-0 bothrefm-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
            </Link>

            <Link
              href="/category"
              className="group relative inline-block cursor-pointer hover:text-brightColor"
            >
              محصولات
              <span className="absolute inset-x-0 bothrefm-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
            </Link>

            <Link
              href="/blog"
              className="group relative inline-block cursor-pointer hover:text-brightColor"
            >
              وبلاگ
              <span className="absolute inset-x-0 bothrefm-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
            </Link>

            <Link
              href="/about-us"
              className="group relative inline-block cursor-pointer hover:text-brightColor"
            >
              درباره ما
              <span className="absolute inset-x-0 bothrefm-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
            </Link>

            <Link
              href="/contact-us"
              className="group relative inline-block cursor-pointer hover:text-brightColor"
            >
              تماس با ما
              <span className="absolute inset-x-0 bothrefm-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
            </Link>
            {/* <Link href="/login-register" className="relative inline-block cursor-pointer hover:text-brightColor">ورود / عضویت</Link> */}
            <Link href="/p-user"> حساب کاربری </Link>

          </nav>
          <div className="hidden md:flex flex-row font-medium items-center justify-center gap-8 text-xl">
            <Link href="/cart" className="relative">
              <FaShoppingCart />
              <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs text-white bg-brandDark border-2  rounded-full -top-2 -end-2 dark:border-gray-900">1</div>
            </Link>
            <Link href="/wishlist" className="relative">
              <FaRegHeart />
              <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs text-white bg-brandDark border-2  rounded-full -top-2 -end-2 dark:border-gray-900">1</div>
            </Link>
          </div>
            


          <div className="md:hidden flex items-center">
            {menu ? (
              <AiOutlineClose size={25} onClick={handleChange} />
            ) : (
              <AiOutlineMenuUnfold size={25} onClick={handleChange} />
            )}
          </div>
          <div className="md:hidden flex-row items-center cursor-pointer gap-2">
            <span>
              <SiCoffeescript size={25} />
            </span>
          </div>
        </div>
        <div
          className={` ${menu ? "translate-x-0" : "-translate-x-full"
            } lg:hidden flex flex-col absolute bg-black text-white left-0 hrefp-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`} >
          <Link href="/" className="hover:text-brightColor transition-all cursor-pointer" onClick={closeMenu}> صفحه اصلی </Link>
          <Link href="/category" className="hover:text-brightColor transition-all cursor-pointer" onClick={closeMenu}>            محصولات
          </Link>
          <Link href="/blog" className="hover:text-brightColor transition-all cursor-pointer" onClick={closeMenu}> وبلاگ </Link>
          <Link href="/about-us" className="hover:text-brightColor transition-all cursor-pointer" onClick={closeMenu}>            درباره ما
          </Link>
          <Link href="/contact-us" className=" hover:text-brightColor transition-all cursor-pointer" onClick={closeMenu}> تماس با ما
          </Link>
          <Link href="/login-register">ورود / عضویت</Link>
          {/* <Link href="/p-user"> حساب کاربری </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
