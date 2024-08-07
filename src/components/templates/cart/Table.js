"use client";
import { useState, useEffect } from "react";
import Select from "react-select";
import stateData from "@/utils/stateData";

const stateOptions = stateData();
const Table = () => {
  const [cart, setCart] = useState([]);
  const [discount, setDiscount] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const [stateSelectedOption, setStateSelectedOption] = useState(null);
  const [changeAddress, setChangeAddress] = useState(false);

  useEffect(() => {
    const localCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(localCart);
  }, []);

  useEffect(calcTotalPrice, [cart]);

  function calcTotalPrice() {
    let price = 0;

    if (cart.length) {
      price = cart.reduce(
        (prev, current) => prev + current.price * current.count,
        0
      );
      setTotalPrice(price);
    }

    setTotalPrice(price);
  }

  return (
    <>
      <div className="container lg:grid grid-cols-12 gap-6 items-start pb-16 pt-4">
        {/* <!-- product cart --> */}
        <div className="xl:col-span-9 lg:col-span-8">
          {/* <!-- cart title --> */}
          <div className="bg-gray-200 py-2 pl-12 pr-20 xl:pr-48 mb-4 hidden md:flex">
            <p className="text-gray-600 text-center"></p>
            <p className="text-gray-600 text-center ml-auto mr-16 xl:mr-24">
              محصول
            </p>
            <p className="text-gray-600 text-center  ml-auto mr-16 xl:mr-32">
              قیمت
            </p>
            <p className="text-gray-600 text-center ml-auto mr-16 xl:mr-24">
              تعداد
            </p>
            <p className="text-gray-600 text-center ml-auto mr-16 xl:mr-28">
              جمع جزء
            </p>
          </div>

          <div className="space-y-4">
            {cart.map((item) => (
              <div className="flex items-center md:justify-between gap-4 md:gap-6 p-4 border border-gray-200 rounded flex-wrap md:flex-nowrap">
                <div className="w-full md:w-32 flex-shrink-0">
                  <img src="/image/menu1.jpg" className="w-full" />
                </div>
                <div className=" w-full">
                  <h2 className="text-gray-800 mb-3 xl:text-xl textl-lg font-medium uppercase">
                    {item.name}
                  </h2>
                </div>
                <div className="md:w-1/3 w-full text-primary text-lg font-semibold">
                  {item.price.toLocaleString()} تومان
                </div>
                <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300">
                  <div className="flex flex-row items-center">
                    <button
                      className="bg-gray-200 py-2 px-5 rounded-lg text-violet-800 text-3xl"
                      onClick={() => setCount(count - 1)}
                    >
                      -
                    </button>
                    <span className="py-4 px-6 rounded-lg">{item.count}</span>
                    <button
                      className="bg-gray-200 py-2 px-4 rounded-lg text-violet-800 text-3xl"
                      onClick={() => setCount(count + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="ml-auto md:ml-0">
                  <p className="text-primary text-lg font-semibold">
                    {(item.count * item.price).toLocaleString()}{" "}
                  </p>
                </div>
                <div className="text-gray-600 hover:text-primary cursor-pointer">
                  <i className="fas fa-trash"></i>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="xl:col-span-3 lg:col-span-4 border border-gray-200 px-4 py-4 rounded mt-6 lg:mt-0">
          <h4 className="text-gray-800 text-lg mb-4 font-medium uppercase">
            جمع کل سبد خرید
          </h4>
          <div className="space-y-1 text-gray-600 pb-3 border-b border-gray-200">
            <div className="flex justify-between font-medium border-b-2 border-gray-300 pb-2">
              <p className="text-gray-800">جمع جزء </p>
              <p>{totalPrice.toLocaleString()} تومان</p>
            </div>

            <div className="flex justify-between mt-2">
              <p className="text-gray-800"> پیک موتوری: </p>
              <p>
                {" "}
                <strong> 30,000 </strong>{" "}
              </p>
            </div>

            <div className="flex justify-between md:py-4">
              <p className="text-gray-800">حمل و نقل </p>
              <span className="text-sm">حمل و نقل به تهران</span>
            </div>
            <p
              className="flex justify-end text-gray-900"
              onClick={() => setChangeAddress((prev) => !prev)}
            >
              تغییر آدرس
            </p>
            {changeAddress && (
              <div className="flex flex-col gap-2 py-2">
                <Select
                  defaultValue={stateSelectedOption}
                  onChange={setStateSelectedOption}
                  isClearable={true}
                  placeholder={"استان"}
                  isRtl={true}
                  isSearchable={true}
                  options={stateOptions}
                />
                <input
                  type="text"
                  placeholder="شهر"
                  className="w-full border-2 border-gray-400"
                />
                <input
                  type="number"
                  placeholder="کد پستی"
                  className="w-full border-2 border-gray-400"
                />
                <button
                  className="bg-primary border border-primary text-white px-5 font-medium rounded-r-md hover:bg-transparent hover:text-primary transition text-sm font-roboto py-1"
                  onClick={() => setChangeAddress(false)}
                >
                  بروزرسانی
                </button>
              </div>
            )}
          </div>
          <div className="flex justify-between my-3 text-gray-800 font-semibold uppercase">
            <h4>مجموع</h4>
            <h4>{totalPrice.toLocaleString()} تومان</h4>
          </div>

          <div className="flex mb-5">
            <input
              type="text"
              className="pl-4 w-full border border-r-0 border-primary py-2 px-3 rounded-l-md focus:ring-primary focus:border-primary text-sm"
              placeholder="کد تخفیف"
            />
            <button
              type="submit"
              className="bg-primary border border-primary text-white px-5 font-medium rounded-r-md hover:bg-transparent hover:text-primary transition text-sm font-roboto"
            >
              اعمال
            </button>
          </div>

          <a
            href="checkout.html"
            className="bg-primary border border-primary text-white px-4 py-3 font-medium rounded-md uppercase hover:bg-transparent
             hover:text-primary transition text-sm w-full block text-center"
          >
            ادامه جهت تسویه حساب
          </a>
        </div>
      </div>
    </>
  );
};

export default Table;
