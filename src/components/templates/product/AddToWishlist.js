"use client";
import showSwal from "../../../utils/helpers";
import React, { useEffect, useState } from "react";
import { FaRegHeart, FaRegStar, FaStar } from "react-icons/fa";
import { useRouter } from "next/navigation";
import swal from "sweetalert";

function AddToWishlist({ productID }) {
  const [user, setUser] = useState({});
  const router = useRouter();

  useEffect(() => {
    const authUser = async () => {
      const res = await fetch("/api/auth/me");
      if (res.status === 200) {
        const data = await res.json();
        console.log(data);
        setUser({ ...data });
      }
    };

    authUser();
  }, []);

  const addToWishlist = async (event) => {
    event.preventDefault();
    if (!user?._id) {
      return showSwal(
        "برای اضافه کردن به علاقه مندی‌ها لطفا ابتدا لاگین بکنین",
        "error",
        "فهمیدم"
      );
    }

    const wish = {
      user: user._id,
      product: productID,
    };

    const res = await fetch("/api/wishlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(wish),
    });

    if (res.status === 201) {
      swal({
        title: "محصول مورد نظر به علاقه‌مندی‌ها اضافه شد",
        icon: "success",
        buttons: "ورود به علاقه مندی ها",
      }).then(() => {
        router.replace("/wishList");
      });
    }
  };

  return (
    <div onClick={addToWishlist}>
      <div className="flex items-center justify-start gap-x-2">
        <FaRegHeart />
        <span className="text-sm">اضافه کردن به علاقه مندی ها</span>
      </div>
    </div>
  );
}

export default AddToWishlist;
