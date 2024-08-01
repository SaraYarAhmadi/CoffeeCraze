"use client";
import React, { useState } from "react";

function AddCountProduct() {
  const [amount, setAmount] = useState(1);

  return (
    <div className="flex flex-row items-center gap-12">
      <div className="flex flex-row items-center">
        <button
          className="bg-gray-200 py-2 px-5 rounded-lg text-violet-800 text-3xl"
          onClick={() => setAmount((prev) => prev - 1)}
        >
          -
        </button>
        <span className="py-4 px-6 rounded-lg">{amount}</span>
        <button
          className="bg-gray-200 py-2 px-4 rounded-lg text-violet-800 text-3xl"
          onClick={() => setAmount((prev) => prev + 1)}
        >
          +
        </button>
      </div>
      <button className="w-52 bg-gradient-to-r from-primary to-secondary border-2 border-primary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">
        اضافه کردن به سبد خرید
      </button>
    </div>
  );
}

export default AddCountProduct;
