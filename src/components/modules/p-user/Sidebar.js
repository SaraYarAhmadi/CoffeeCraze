"use client";

import { FaComments, FaHeart, FaShoppingBag } from "react-icons/fa";
import { TbListDetails } from "react-icons/tb";
import Link from "next/link";
import { MdSms, MdLogout } from "react-icons/md";
import { SiCoffeescript } from "react-icons/si";
import { ImReply } from "react-icons/im";
import Link from "next/link";
import swal from "sweetalert";
import { useRouter } from "next/navigation";

const Sidebar = () => {
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
            router.replace("/");
          });
        }
      }
    });
  };

  return (
    <>
      <aside class="hidden md:flex flex-col md:w-64 px-7 py-5 shrink-0 lg:min-h-[calc(100vh-68px)] transition-all lg:transition-none md:p-10 bg-gradient-to-b from-primary to-primary/90 ">
        <div class="flex items-center justify-between mb-7 border-b md:border-none border-b-gray-200 dark:border-b-slate ">
          <a
            href="https://sabzlearn.ir"
            class="flex items-center gap-x-1.5 md:gap-x-2.5"
          >
            <SiCoffeescript size={40} />
          </a>
        </div>
        <ul className="flex-col space-y-4 md:space-y-8 md:mt-5 text-lg">
          <Link
           href={"/p-user"}
            className="flex gap-x-1 items-center opacity-50"
          >
            <ImReply />
            پیشخوان
          </Link>
          <Link href={"/p-user/orders"} className="flex gap-x-1 items-center">
            <FaShoppingBag />
            سفارش ها
          </Link>
          <Link href={"/p-user/comments"} className="flex gap-x-1 items-center">
            <FaComments />
            کامنت ها
          </Link>
          <Link href={"/p-user/wishlist"} className="flex gap-x-1 items-center">
            <FaHeart />
            علاقه مندی
          </Link>
          <Link
            href={"/p-user/account-details"}
            className="flex gap-x-1 items-center"
          >
            <TbListDetails />
            جزئیات اکانت
          </Link>
        </ul>

        <div
          className="flex justify-between items-center cursor-pointer w-full border-t-2 border-gray-500 mt-10 pt-2"
          onClick={logoutHandler}
        >
          <MdLogout />
          خروج
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
