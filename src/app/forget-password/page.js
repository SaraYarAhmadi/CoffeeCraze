import React from "react";
import Link from "next/link";
import Image from "next/image";

const ForgotPassword = () => {
  return (
    <>
    <div className="flex items-center justify-center min-h-screen lg:px-32 px-5 bg-backgroundColor mx-auto text-center">
      <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
      <div className="w-[350px] md:w-[450px] h-[550px] flex flex-col justify-center p-8 md:p-14 text-base">
            <span className="mb-3 text-xl font-bold"> فراموشی رمز </span>
            <div className="py-2">
                <input
                    type="text"
                    className="w-full p-2 border border-gray-400 rounded-md placeholder:text-gray-500"
                            placeholder="ایمیل / شماره موبایل"
                />
            </div>
            <button
                className="w-full bg-black text-white p-2 rounded-lg mt-4 mb-2 hover:bg-white hover:text-black hover:border hover:border-gray-300 bg-gradient-to-r from-primary to-secondary border-2 border-primary py-2 px-4">
                 بازنشانی رمزعبور
            </button>
            <div className="text-center text-gray-400">
                <Link href={"/login-register"} 
                    className="w-full flex items-center justify-center border border-gray-300 text-md p-2 mt-3 rounded-lg mb-6 text-black hover:bg-black hover:text-white hover:border hover:border-gray-300 hover:scale-105 duration-200 py-2 transition-all">
                    برگشت به ورود
                </Link>
            </div>
        </div>
        <div className="relative">
          <Image
            src="./image/backgound.jpg"
            alt="img"
            className="w-[450px] h-full hidden rounded-r-2xl md:block object-cover"
          />
          {/* <!-- text on image  --> */}
          <div
            className="absolute hidden bottom-10 right-6 p-6 bg-white bg-opacity-30 backdrop-blur-sm rounded drop-shadow-lg md:block"
          >
            <span className="text-white text-xl"
            >برای ما، قهوه تنها یک نوشیدنی نیست<br />
            </span>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ForgotPassword;
