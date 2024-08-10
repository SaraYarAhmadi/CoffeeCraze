"use client";
import React, { useContext, useEffect, useState } from "react";
import Slider from "react-slider";
import ProductCard from "../../modules/productCard/ProductCard";
import { FaRegStar, FaStar } from "react-icons/fa";
import Link from "next/link";

const max = 1000000;
const min = 0;

export const initialFilterValue = {
  searchValue: "",
  isMale: false,
  isFemale: false,
  priceFilterList: [min, max],
};

export default function Aside({ allProducts }) {
  const [filtersValue, setFiltersValue] = useState(initialFilterValue);
  const { searchValue, priceFilterList } = filtersValue;
  const suggestedProducts = allProducts.slice(-3);
  console.log("suggestedProducts", suggestedProducts);

  const productSearchHandler = (e) => {
    if (e.keyCode === 13) {
      searchHandler();
    }
  };

  const searchHandler = () => {
    setFiltersValue(filtersValue);
  };

  const ShoePriceFilterHandler = (value) => {
    const newFiltersValue = {
      ...filtersValue,
      priceFilterList: value,
    };
    setFiltersValue(newFiltersValue);
  };

  function productFilter(allProducts) {
    const keywordFilter = allProducts.filter((item) =>
      item.name.includes(searchValue)
    );

    const priceFilter = keywordFilter.filter(
      ({ price }) => price > priceFilterList[0] && price < priceFilterList[1]
    );

    return priceFilter;
  }
  return (
    <>
      <aside className="col-span-full lg:col-span-4 xl:col-span-3 lg:sticky top-6 space-y-6">
        <div className=" h-[100vh] bg-transparent">
          <div className="h-[100vh]">
            <div className="space-y-5">
              <div className="h-17 shadow-light dark:shadow-none bg-white dark:bg-gray-800 dark:border border-gray-700 rounded-2xl">
                <div className="h-full flex text-slate-500 dark:text-gray-500">
                  <input
                    type="text"
                    name="s"
                    className="w-full bg-transparent dark:bg-transparent text-sm font-dana pr-7 border-none py-3 pl-8 text-gray-900 border border-gray-300 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    placeholder="در بین محصولات جستجو کنید"
                    value={searchValue}
                    onChange={(e) =>
                      setFiltersValue((prevFilterData) => ({
                        ...prevFilterData,
                        searchValue: e.target.value,
                      }))
                    }
                    onKeyUp={(e) => productSearchHandler(e)}
                  />
                  <button
                    className="mr-4 ml-6"
                    type="submit"
                    onClick={searchHandler}
                  >
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              {/* <!-- Category Filter --> */}
              {/* <!-- Toggle Box Container --> */}
              <div className="hidden sm:grid grid-cols-1 gap-5 ">
                <div className="">
                  <aside className=" p-2 lg:pr-7 h-17 shadow-light dark:shadow-none bg-white dark:bg-gray-800 dark:border border-gray-700 rounded-2xl py-2 text-base  font-DanaDemiBold relative w-full inline-block text-zinc-700 dark:text-white z-10 shadow-xl">
                    <div className="widget_title">فیلتر براساس قیمت :</div>
                    <div className="block pt-5 px-4 relative font-medium">
                      <form method="get" className="p-0">
                        <div className="relative pt-2">
                          <Slider
                            className="slider"
                            onChange={(value) => ShoePriceFilterHandler(value)}
                            min={min}
                            max={max}
                            value={priceFilterList}
                          />
                          <div
                            className="flex items-center mt-4 justify-between"
                            data-step="10"
                          >
                            {/* <button type="submit" className="button">فیلتر</button> */}
                            <div className="price-label">
                              قیمت:{" "}
                              <span className="from">
                                {priceFilterList[1]}&nbsp;تومان
                              </span>{" "}
                              —{" "}
                              <span className="to">
                                {priceFilterList[0]}&nbsp;تومان
                              </span>
                            </div>
                            <div className="clear"></div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </aside>
                </div>
              </div>

              <div className="hidden lg:flex flex-col bg-white p-4 gap-y-2 mt-10">
                <p className=""> پیشنهادی برای شما</p>
                {suggestedProducts.map((product) => (
                  <div className="flex items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 p-2">
                    <div className="w-[100px] overflow-hidden rounded-xl">
                      <img
                        className="object-cover w-full h-full overflow-hidden"
                        src={product.img}
                        alt=""
                      />
                    </div>

                    <div className="flex flex-col justify-between p-4 leading-normal">
                      <Link href={`product/${product._id}`} className="mb-2 tracking-tight text-gray-900 text-sm">
                        {product.name}
                      </Link>
                      <div className="flex items-center justify-center gap-x-2 md:gap-x-2.5 mt-1.5 md:mt-2.5 pb-3 border-b border-b-gray-300">
                        <div className="text-orange-400 pr-1">
                          <span className="font-DanaDemiBold text-base">
                            {product.price}
                          </span>
                          <span className="text-xs tracking-tighter pr-1">
                            تومان
                          </span>
                        </div>
                      </div>
                      <div className=" md:h-6 text-base flex items-center justify-center text-yellow-400 mt-1">
                        {new Array(product.score).fill(0).map((item, index) => (
                          <FaStar key={index} />
                        ))}
                        {new Array(5 - product.score)
                          .fill(0)
                          .map((item, index) => (
                            <FaRegStar key={index} />
                          ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </aside>

      <div className="col-span-full lg:col-span-8 xl:col-span-9 order-1 lg:order-2">
        {/* <!-- product wrapper --> */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 sm:grid-cols-2 gap-6">
          {productFilter(allProducts).map((product) => (
            <ProductCard key={product._id} {...product} />
          ))}
        </div>
        {/* <!-- product wrapper end --> */}
      </div>
    </>
  );
}
