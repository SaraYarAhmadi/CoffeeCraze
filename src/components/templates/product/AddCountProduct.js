"use client";
import React, { useState } from "react";
import { useState } from "react";
import { showSwal } from "@/utils/helpers";

function AddCountProduct() {
  const [count, setCount] = useState(1);
  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length) {
      const isInCart = cart.some((item) => item.id === product._id);

      if (isInCart) {
        cart.forEach((item) => {
          if (item.id === product._id) {
            item.count = item.count + count;
          }
        });
        localStorage.setItem("cart", JSON.stringify(cart));
        showSwal("محصول با موفقیت به سبد خرید اضافه شد", "success", "فهمیدم");
      } else {
        const cartItem = {
          id: product._id,
          name: product.name,
          price: product.price,
          count,
        };

        cart.push(cartItem);

        localStorage.setItem("cart", JSON.stringify(cart));
        showSwal("محصول با موفقیت به سبد خرید اضافه شد", "success", "فهمیدم");
      }
    } else {
      const cartItem = {
        id: product._id,
        name: product.name,
        price: product.price,
        count,
      };

      cart.push(cartItem);

      localStorage.setItem("cart", JSON.stringify(cart));
      showSwal("محصول با موفقیت به سبد خرید اضافه شد", "success", "فهمیدم");
    }
  };
  return (
    <div className="flex flex-row items-center gap-12">
      <div className="flex flex-row items-center">
        <button
          className="bg-gray-200 py-2 px-5 rounded-lg text-violet-800 text-3xl"
          onClick={() => setCount(count - 1)}
        >
          -
        </button>
        <span className="py-4 px-6 rounded-lg">{count}</span>
        <button
          className="bg-gray-200 py-2 px-4 rounded-lg text-violet-800 text-3xl"
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
      </div>
      <button className="w-52 bg-gradient-to-r from-primary to-secondary border-2 border-primary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full" onClick={addToCart}>
        اضافه کردن به سبد خرید
      </button>
    </div>
  );
}

export default AddCountProduct;
