"use client";
import { useState, useEffect } from "react";
import { TbShoppingCartX } from "react-icons/tb";
import Link from "next/link";
import { IoCloseSharp } from "react-icons/io5";
import swal from "sweetalert";
import { useRouter } from "next/navigation";

const Table = () => {
  const router = useRouter();

  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

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

  const increaseCount = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].count += 1;
    setCart(updatedCart);

    // Update local storage
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    // Recalculate total price
    calcTotalPrice(updatedCart);
  };

  const decreaseCount = (index) => {
    const updatedCart = [...cart];
    if (updatedCart[index].count > 1) {
      updatedCart[index].count -= 1;
      setCart(updatedCart);

      // Update local storage
      localStorage.setItem("cart", JSON.stringify(updatedCart));

      // Recalculate total price
      calcTotalPrice(updatedCart);
    }
  };

  const removeProduct = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1); // حذف محصول از لیست بر اساس ایندکس
    setCart(updatedCart);

    // Update local storage
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    // Recalculate total price
    calcTotalPrice(updatedCart);
  };

  const OrderSettlementHandler = () => {
    swal({
      title: " بزرودی ... ",
      icon: "error",
      buttons: {
        confirm: "فهمیدم",
        viewCart: {
          text: " مشاهده محصولات ",
          value: "viewCart",
        },
      },
    }).then((value) => {
      if (value === "viewCart") {
        router.replace("/gallery");
      }
    });
  };

  return (
    <>
      {!!cart.length && (
        <div className="container lg:grid grid-cols-12 gap-4 items-start pb-16 pt-4">
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
              <p className="text-gray-600 text-center ml-auto mr-16 xl:mr-20">
                جمع جزء
              </p>
            </div>

            <div className="space-y-4">
              {cart.map((item, index) => (
                <div className="hidden md:flex items-center md:justify-between gap-4 md:gap-6 md:flex-nowrap border-2 border-solid box-border rounded-xl w-full md:w-[90%] mx-auto p-8 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                  <div className="flex-col items-center md:w-24 flex-shrink-0">
                    <img src={item.img} className="w-full" />
                    <div className=" md:h-6 text-base md:text-lg flex items-center justify-center text-yellow-400 mt-1">
                      <div
                        className="text-2xl text-red-500 hover:text-primary cursor-pointer"
                        onClick={removeProduct}
                      >
                        <IoCloseSharp />
                      </div>
                    </div>
                  </div>
                  <div className=" md:w-full">
                    <h2 className="text-gray-800 mb-3 text-sm font-medium">
                      {item.name}
                    </h2>
                  </div>
                  <div className="md:w-1/3 text-primary text-sm font-semibold">
                    {item.price.toLocaleString()} تومان
                  </div>
                  <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300">
                    <div className="flex flex-row items-center">
                      <button
                        className="bg-gray-200 py-2 px-4 rounded-lg text-violet-800 text-3xl"
                        onClick={() => decreaseCount(index)}
                      >
                        -
                      </button>
                      <span className="py-2 px-4 rounded-lg">{item.count}</span>
                      <button
                        className="bg-gray-200 py-2 px-3 rounded-lg text-violet-800 text-3xl"
                        onClick={() => increaseCount(index)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="ml-auto md:ml-0">
                    <p className="text-primary text-sm font-semibold">
                      {(item.count * item.price).toLocaleString()}{" "}
                    </p>
                  </div>
                </div>
              ))}

              {cart.map((item, index) => (
                <div class="w-full md:hidden max-w-sm flex-wrap md:flex-nowrap border-2 border-solid box-border rounded-xl mx-auto p-8 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                  <a href="#">
                    <img
                      class="p-8 rounded-t-lg"
                      src={item.img}
                      alt="product image"
                    />
                  </a>
                  <div class="px-5 pb-5">
                    <a href="#">
                      <h5 class="tracking-tight text-gray-800 mb-3 text-sm font-medium">
                        {item.name}
                      </h5>
                    </a>
                    <div class="flex text-primary text-sm font-semibold items-center justify-center mt-2.5 mb-5">
                      {item.price.toLocaleString()} تومان
                    </div>
                    <div class="flex items-center justify-between gap-x-2">
                      <div class="text-primary text-sm font-semibold border border-gray-300 py-2 px-1">
                        <span className="text-gray-700 text-sm pl-2 py-3">
                          جمع جزئی :{" "}
                        </span>
                        {(item.count * item.price).toLocaleString()}{" "}
                      </div>
                      <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300">
                        <div className="flex flex-row items-center">
                          <button
                            className="bg-gray-200 py-2 px-3 rounded-lg text-violet-800 text-3xl"
                            onClick={() => decreaseCount(index)}
                          >
                            -
                          </button>
                          <span className="py-2 px-3 rounded-lg">
                            {item.count}
                          </span>
                          <button
                            className="bg-gray-200 py-2 px-2 rounded-lg text-violet-800 text-3xl"
                            onClick={() => increaseCount(index)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="w-full md:w-28 flex justify-center mt-5">
                      <button
                        className="bg-gradient-to-r from-primary to-secondary border-2 border-primary hover:scale-105 duration-200 text-white py-2 px-8 rounded-full"
                        onClick={removeProduct}
                      >
                        حذف
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="xl:col-span-3 lg:col-span-4 border border-gray-200 px-4 py-4 rounded mt-10 lg:mt-10">
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
                <span className="text-sm"> ( فقط تهران ) </span>
              </div>
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

            <button
              className="bg-primary border border-primary text-white px-4 py-3 font-medium rounded-md uppercase hover:bg-transparent
             hover:text-primary transition text-sm w-full block text-center"
              onClick={OrderSettlementHandler}
            >
              ادامه جهت تسویه حساب
            </button>
          </div>
        </div>
      )}

      {cart.length === 0 && (
        <div className="relative text-center md:mt-3">
          <div class="w-full flex items-center justify-center md:my-4 ">
            <TbShoppingCartX className="text-9xl text-gray-300" />
          </div>
          <p className="text-2xl my-4">سبد خرید شما در حال حاضر خالی است. </p>
          <span className="text-lg md:my-4">
            قبل از تسویه حساب، باید چند محصول را به سبد خرید خود اضافه کنید.
          </span>
          <span>در صفحه "فروشگاه"، محصولات جالب زیادی خواهید یافت.</span>
          <div className="mt-9 md:mt-8">
            <Link
              className="bg-gradient-to-r from-brightColor to-brightColor shadow-[0_3px_10px_rgb(0,0,0,0.2)] px-6 py-2 border-2 border-white bg-[#FFDCAB] transition-all rounded-full"
              href="/gallery"
            >
              بازگشت به فروشگاه
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Table;
