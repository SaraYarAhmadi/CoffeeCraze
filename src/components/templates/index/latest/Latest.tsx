import React from "react";
import ProductCard from "../../../modules/productCard/ProductCard";
import { IoIosArrowBack } from 'react-icons/io'

const Product = () => {
    return (
        <section className=" min-h-screen flex justify-center lg:px-32 px-5 bg-backgroundColor mx-auto text-center">
            <div className="w-full mt-6 md:mt-10">
                <div className="overflow-auto flex flex-col justify-between bg-white border-2 border-solid box-border rounded-xl w-full p-8 bg-gradient-to-r from-backgroundColor to-brightColor shadow-[0_3px_10px_rgb(0,0,0,0.2)]">

                    <div className="flex items-center justify-between mb-4 md:mb-8">
                        <div>
                            <h4 className="section-title"> انواع قهوه </h4>
                        </div>
                        <div>
                            <a href="#" className="section-link flex items-center justify-between  text-base font-DanaMedium tracking-tighter">
                                <span className="hidden md:inline-block">
                                    مشاهده همه
                                </span>
                                <span className="inline-block md:hidden"> مشاهده همه</span>
                                <div className="w-4 h-4 text-base">  <IoIosArrowBack /></div>

                            </a>
                        </div>

                    </div>

                    <div className='grid grid-cols-2 md:grid-cols-3 gap-3.5 md:gap-5 p-3 rounded-lg'>
                        <ProductCard title="دان قهوه عربیکا کلمبیا" />
                        <ProductCard title="دان قهوه عربیکا پرو" />
                        <ProductCard title="دان قهوه عربیکا نیکاراگوئه" />
                        <ProductCard title="دان قهوه روبوستا چری هند" />
                        <ProductCard title="دان قهوه روبوستا تانزانیا" />
                        <ProductCard title="دان قهوه روبوستا ساحل عاج" />

                    </div>
                </div>
            </div>
        </section>
        // <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-backgroundColor">

        //     <div className="flex items-center justify-between px-36 m-5 text-xl">
        //         <h1 className="font-semibold">
        //             انواع قهوه
        //         </h1>
        //         <Link href={"/"} className="text-sky-500">مشاهده همه</Link>
        //     </div>
        //     <div className=" flex flex-wrap pb-8 gap-8 justify-center">
        //         <ProductCard title="دان قهوه عربیکا کلمبیا" />
        //         <ProductCard title="دان قهوه عربیکا پرو" />
        //         <ProductCard title="دان قهوه عربیکا نیکاراگوئه" />
        //         <ProductCard title="دان قهوه روبوستا چری هند" />
        //         <ProductCard title="دان قهوه روبوستا تانزانیا" />
        //         <ProductCard title="دان قهوه روبوستا ساحل عاج" />
        //     </div>

        // </div>
    );
};

export default Product;
