"use client"
import Footer from '@/components/modules/footer/Footer';
import Navbar from '@/components/modules/navbar/Navbar';
import Link from 'next/link';
import React, { useState } from 'react'
import { FaRegHeart } from 'react-icons/fa';
import ProductCard from '@/components/modules/productCard/ProductCard';
import Comments from '../../../components/templates/product/Comments';

function page() {

    const [images, setImages] = useState({
        img1: "/image/1-2.png",
        img2: "/image/1-1.png",

    })
    const [activeImg, setActiveImage] = useState(images.img1)

    const [amount, setAmount] = useState(1);
    return (
        <div >
            <Navbar />
            <div className='min-h-screen py-24 bg-backgroundColor mx-auto text-center'>
                <div className='flex items-center justify-center min-h-screen lg:px-32 px-5 py-24 bg-backgroundColor mx-auto text-center'>
                    <div className='flex flex-col justify-between lg:flex-row gap-16 lg:items-center'>
                        <div className='flex flex-col gap-6 lg:w-2/4'>
                            <img src={activeImg} alt="" className='md:w-[450px] h-full aspect-square object-cover rounded-xl' />
                            <div className='md:w-[450px] flex flex-row justify-start h-24 gap-x-4'>
                                <img src={images.img1} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img1)} />
                                <img src={images.img2} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img2)} />
                            </div>
                        </div>
                        {/* ABOUT */}
                        <div className='flex flex-col text-justify justify-start gap-6 lg:w-2/4 md:mr-8'>

                            <h1 className='text-3xl font-bold'>
                                دانه قهوه Caffè crema – ORO (گلد-Arabica 100%)</h1>

                            <p className='text-gray-700'>
                                دو گونه گیاهی مطرح در دنیای قهوه که همواره در تقابل با هم بوده اند Robusta و Arabica در این ترکیب کنار هم قرار گرفته اند با این تفاوت که اکثریت آنرا بر خلاف دیگر محصولات برشته کاری ” قهوه ست ” دانه های Robusta تشکیل می دهند . برای افرادی که لذت نوشیدن قهوه را در میزان کافئین آن جستجو می کنند . قهوه ای ساده که اسیدیته پایینی دارد و در مقابل تن واری و کافئین  و تلخی بالاتری نسبت به دیگر محصولات  “قهوه ست ” دارد .
                            </p>
                            <span className='text-2xl font-semibold'>199.000</span>
                            <div className='flex flex-row items-center gap-12'>
                                <div className='flex flex-row items-center'>
                                    <button className='bg-gray-200 py-2 px-5 rounded-lg text-violet-800 text-3xl' onClick={() => setAmount((prev) => prev - 1)}>-</button>
                                    <span className='py-4 px-6 rounded-lg'>{amount}</span>
                                    <button className='bg-gray-200 py-2 px-4 rounded-lg text-violet-800 text-3xl' onClick={() => setAmount((prev) => prev + 1)}>+</button>
                                </div>
                                <button className="w-52 bg-gradient-to-r from-primary to-secondary border-2 border-primary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">
                                    اضافه کردن به سبد خرید
                                </button>
                            </div>
                            <div className='flex items-center justify-start'>
                                <Link href="/wishlist">
                                    <FaRegHeart />
                                </Link>
                                <span className="text-sm">اضافه کردن به علاقه مندی ها</span>
                            </div>

                        </div>
                    </div>
                </div>
                <Comments/>
                <div className="w-full mt-6 md:mt-10 lg:px-32 px-5">
                    <div className="overflow-auto flex flex-col justify-between bg-white border-2 border-solid box-border rounded-xl w-full p-8 bg-gradient-to-r from-brightColor to-brightColor shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                        <h4 className="section-title mb-4 md:mb-8"> محصولات مشابه </h4>
                        <div className='grid grid-cols-2 md:grid-cols-3 gap-3.5 md:gap-5 p-3 rounded-lg'>
                            <ProductCard title="دان قهوه عربیکا کلمبیا" />
                            <ProductCard title="دان قهوه عربیکا پرو" />
                            <ProductCard title="دان قهوه عربیکا نیکاراگوئه" />

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default page