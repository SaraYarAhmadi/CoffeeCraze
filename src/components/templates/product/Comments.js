import React from "react";

import { FaRegUserCircle } from "react-icons/fa";
function Comments() {
  return (
    <div className="flex flex-col md:flex-row gap-x-4 lg:px-32 px-5 pt-24">
      <div className="w-full md:w-1/2 bg-white dark:bg-darker rounded-2xl p-4.5 sm:p-5 mt-8">
        {" "}
        {/* Modified className for mobile */}
        <div className="flex items-center justify-between mb-6 sm:mb-7">
          <div className="flex items-center gap-x-3 relative">
            <span className="absolute -left-6 sm:-left-[26px] block w-1.5 h-[34px] md:h-9.5 bg-red-500 rounded-r-sm"></span>
            <span className="font-danaDemiBold text-xl md:text-2xl">نظرات</span>
          </div>
        </div>
        {/* <!-- Comment List --> */}
        <div className="comments_wrap space-y-4.5 sm:space-y-5">
          {/* <!-- Comments --> */}
          <div
            id="comment-54937"
            className="p-4.5 md:p-5 bg-gray-100 dark:bg-dark rounded-xl"
          >
            <div className="flex flex-col pb-4 mb-4 border-b border-b-neutral-200/60 dark:border-white/10">
              <div className="flex items-center gap-x-3.5">
                <div className="w-12 h-12 border-b-neutral-200/60 dark:border-white/10 sm:flex-center w-15 h-15 border rounded-full relative">
                  <img
                    src="./image/home.png"
                    className="w-full flex object-cover rounded-full"
                    alt="img"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <span>علیرضا</span>
                  <span className="font-danaLight text-sm opacity-70">
                    1403/04/15
                  </span>
                </div>
              </div>
              <div>
                <p className="font-danaLight text-sm sm:text-base break-words">
                  سلام عالی بود
                </p>
              </div>
            </div>
          </div>
          <div
            id="comment-54937"
            className="p-4.5 md:p-5 bg-gray-100 dark:bg-dark rounded-xl"
          >
            <div className="flex flex-col pb-4 mb-4 border-b border-b-neutral-200/60 dark:border-white/10">
              <div className="flex items-center gap-x-3.5">
                <div className="w-12 h-12 border-b-neutral-200/60 dark:border-white/10 sm:flex-center w-15 h-15 border rounded-full relative">
                  <img
                    src="./image/home.png"
                    className="w-full flex object-cover rounded-full"
                    alt="img"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <span>علیرضا</span>
                  <span className="font-danaLight text-sm opacity-70">
                    1403/04/15
                  </span>
                </div>
              </div>
              <div>
                <p className="font-danaLight text-sm sm:text-base break-words">
                  سلام عالی بود
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Load more --> */}
        <div className=" mt-4.5 sm:mt-20">
          <button
            type="button"
            className="bg-gradient-to-r from-primary to-secondary border-2 border-primary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full mt-4"
          >
            مشاهده بیشتر
          </button>
        </div>
      </div>

      <div className="w-full md:w-1/2 bg-white dark:bg-darker rounded-2xl p-4.5 sm:p-5 mt-8 mr-auto md:mr-0">
        {" "}
        {/* Modified className for mobile */}
        <div>
          <p className="font-danaDemiBold text-xl md:text-2xl mb-3 sm:mb-4 tex">
            دیدگاه خود را بنویسید
          </p>
          <p className="flex items-center justify-start mb-3 sm:mb-4">
            نشانی ایمیل شما منتشر نخواهد شد.
          </p>
          <div className="flex items-center gap-x-3.5 mb-2.5 sm:mb-3">
            <FaRegUserCircle className="text-slate-500 text-2xl" />
            <span className="text-sm text-gray-400 gap-1">sara</span>
          </div>
          <textarea
            rows={6}
            className="w-full block p-4.5 md:p-4 bg-gray-100 dark:bg-dark text-gray-900 dark:text-white placeholder:text-slate-500/70 font-danaMedium text-sm rounded-xl"
            placeholder="نظر خود را بنویسید ..."
          ></textarea>
          <div className="py-2">
            <input
              type="text"
              className="w-full p-2 border border-gray-400 rounded-md placeholder:text-gray-500"
              name="email"
              id="email"
              placeholder="نام"
            />
          </div>
          <div className="py-2">
            <input
              type="email"
              name="email"
              id="email"
              className="w-full p-2 border border-gray-400 rounded-md placeholder:text-gray-500"
              placeholder="ایمیل (دلخواه)"
            />
          </div>
          <div className="flex items-center w-full py-3">
            <input type="checkbox" name="ch" id="ch" />
            <p className="text-sm mb-1 mr-1">مرا به یاد داشته باش</p>
          </div>
          <div className="flex gap-x-4 justify-end mt-4.5 sm:mt-6">
            <button className="flex-grow sm:grow-0 sm:w-36 bg-gradient-to-r from-primary to-secondary border-2 border-primary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">
              لغو
            </button>
            <button className="flex-grow sm:grow-0 sm:w-36 bg-gradient-to-r from-primary to-secondary border-2 border-primary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">
              ارسال
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comments;
