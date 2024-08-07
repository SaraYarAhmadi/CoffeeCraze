"use client";
import showSwal from "../../../utils/helpers";
import React, { useEffect, useState } from "react";
import { FaRegHeart, FaRegStar, FaStar } from "react-icons/fa";
import Link from "next/link";

function AddToWishlist({ productID }) {
  const [user, setUser] = useState({});

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
      showSwal("محصول مورد نظر به علاقه‌مندی‌ها اضافه شد", "success", "فهمیدم");
    }
  };

  return (
    <div onClick={addToWishlist}>
        <Link className="flex items-center justify-start gap-x-2" href="/wishList">
          <FaRegHeart />
        <span className="text-sm">اضافه کردن به علاقه مندی ها</span>
        </Link>
    </div>
  );
}

export default AddToWishlist;
