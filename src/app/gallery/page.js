import Footer from "@/components/modules/footer/Footer";
import Navbar from "@/components/modules/navbar/Navbar";
import ProductCard from "@/components/modules/productCard/ProductCard";
import React from "react";
import { authUser } from "@/utils/serverHelpers";

async function Gallery() {
  const user = await authUser();

  return (
    <div className="">
      <Navbar isLogin={user ? true : false} />
      {/* <!-- sidebar --> */}
      <div className="grid grid-cols-12 gap-y-5 md:gap-x-7 min-h-screen bg-backgroundColor mx-auto text-center lg:px-32 px-5 pt-48">
        <aside className="col-span-full lg:col-span-4 xl:col-span-3 lg:sticky top-6 space-y-6">
          {/* <!-- SearchBox --> */}
          <form id="archive_filters" className="space-y-6">
            <div className="h-17 bg-white dark:bg-darker rounded-xl p-4 md:p-5">
              <div className="flex justify-between gap-x-6 h-full text-slate-500 dark:text-white">
                <input
                  type="text"
                  name="s"
                  className="md:font-danaMedium placeholder-slate-500 bg-transparent flex-grow"
                  placeholder="جستجو بین دوره ها"
                />
                <button type="submit">
                  <svg className="w-7 h-7">
                    <use href="#magnifying-glass"></use>
                  </svg>
                </button>
              </div>
            </div>
            {/* <!-- Toggle Box Container --> */}
            <div className="h-17 bg-white dark:bg-darker rounded-xl p-5 hidden md:block">
              <div className="flex items-center justify-between">
                <span className="font-danaDemiBold">فقط دوره های رایگان</span>
                <label className="toggle">
                  <input
                    className="toggle__input"
                    type="checkbox"
                    name="only_free"
                    value="yes"
                  />
                  <span className="toggle__marker"></span>
                </label>
              </div>
            </div>
            <div className="h-17 bg-white dark:bg-darker rounded-xl p-5 hidden md:block">
              <div className="flex items-center justify-between">
                <span className="font-danaDemiBold">در حال پیش فروش</span>
                <label className="toggle">
                  <input
                    className="toggle__input"
                    type="checkbox"
                    name="presell"
                    value="yes"
                  />
                  <span className="toggle__marker"></span>
                </label>
              </div>
            </div>
            <div className="h-17 bg-white dark:bg-darker rounded-xl p-5 hidden md:block">
              <div className="flex items-center justify-between">
                <span className="font-danaDemiBold">دوره ها خریداری شده</span>
                <label className="toggle">
                  <input
                    className="toggle__input"
                    type="checkbox"
                    name="enrolled"
                    value="yes"
                  />
                  <span className="toggle__marker"></span>
                </label>
              </div>
            </div>
            {/* <!-- Category Filter --> */}
          </form>
        </aside>

        {/* <!-- products --> */}
        <div className="col-span-full lg:col-span-8 xl:col-span-9 order-1 lg:order-2">
          {/* <!-- sorting --> */}
          <div className="mb-4 flex items-center">
            <button className="bg-primary border border-primary text-white px-10 py-3 font-medium rounded uppercase hover:bg-transparent hover:text-primary transition lg:hidden text-sm mr-3 focus:outline-none">
              Filter
            </button>
            <select className="w-44 text-sm text-gray-600 px-4 py-3 border-gray-300 shadow-sm rounded focus:ring-primary focus:border-primary">
              <option>Default sorting</option>
              <option>Price low-high</option>
              <option>Price high-low</option>
              <option>Latest product</option>
            </select>
          </div>
          {/* <!-- sorting end --> */}
          {/* <!-- product wrapper --> */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 sm:grid-cols-2 gap-6">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
          {/* <!-- product wrapper end --> */}
        </div>
        {/* <!-- products end --> */}
      </div>

      <Footer />
    </div>
  );
}

export default Gallery;
