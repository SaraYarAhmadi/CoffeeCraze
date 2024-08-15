"use client";

import Link from "next/link";
import { MdSms, MdLogout } from "react-icons/md";
import { ImReply } from "react-icons/im";
import swal from "sweetalert";
import {useRouter } from "next/navigation";

const Topbar = () => {
  
  const router = useRouter();
  const logoutHandler = () => {
    swal({
      title: "آیا از خروج اطمینان دارید؟",
      icon: "warning",
      buttons: ["نه", "آره"],
    }).then(async (result) => {
      if (result) {
        const res = await fetch("/api/auth/signout", {
          method: "POST",
        });

        if (res.status === 200) {
          swal({
            title: "با موفقیت از اکانت خارج شدین",
            icon: "success",
            buttons: "فهمیدم",
          }).then((result) => {
            // location.replace("/");
            router.replace("/");
          });
        }
      }
    });
  };


  return (
    <header className="flex-col items-center justify-start md:border-none border-b-gray-700 mb-6 md:mb-14 p-5 bg-gradient-to-r from-backgroundColor to-brightColor shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <div className="flex items-center justify-between ">
        <h3 className="hidden md:block font-danaDemiBold text-xl text-zinc-800">
           خوش اومدی 🙌
        </h3>
        <div className="user-profile">
          <img
            src="/image/avatar.png"
            alt="soroushsara"
            className="object-cover w-12 h-12 md:w-14 md:h-14 rounded-full inline-block cursor-pointer"
          />
        </div>
        <div className="md:hidden flex justify-between items-center" onClick={logoutHandler}>
          <MdLogout size={25} />
        </div>
      </div>

      <ul className="md:hidden flex flex-wrap space-x-4 space-y-4 justify-between text-lg font-medium mt-4 pt-2  border-t border-gray-800">
        <Link href={"/p-user"} className="flex gap-x-1 items-center">
          پیشخوان
        </Link>
        <Link href={"/p-user/orders"} className="flex gap-x-1 items-center">
          سفارش ها
        </Link>
        <Link href={"/p-user/comments"} className="flex gap-x-1 items-center">
          کامنت ها
        </Link>
        <Link href={"/p-user/wishlist"} className="flex gap-x-1 items-center">
          علاقه مندی
        </Link>
        <Link
          href={"/p-user/account-details"}
          className="flex gap-x-1 items-center"
        >
          جزئیات اکانت
        </Link>
      </ul>
    </header>
  );
};

export default Topbar;
