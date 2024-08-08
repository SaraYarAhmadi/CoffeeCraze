import Button from '@/components/modules/button/Button'
import ProductCard from '@/components/modules/productCard/ProductCard'
import React from 'react'

function ShopBranches() {
    return (
        <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-backgroundColor">
            <h1 className=" font-semibold text-center text-4xl lg:mt-14 mt-14 mb-8">
            دسترسی به شعب
            </h1>
            <div data-aos="fade-up" data-aos-duration="1000" className="flex flex-col lg:flex-row gap-12 justify-center">
                <div className=" w-full lg:w-1/4  p-3 rounded-lg">
                    <img className=" rounded-lg" src='./image/menu2.jpg' alt="img" />
                    <div className=" flex flex-col items-center mt-5 gap-3">
                        <Button title="شعبه استانبول در نقشه" />
                    </div>
                </div>
                <div className=" w-full lg:w-1/4 p-3 rounded-lg">
                    <img className=" rounded-lg" src='./image/menu2.jpg' alt="img" />
                    <div className=" flex flex-col items-center mt-5 gap-3">
                        <Button title=" شعبه پاسداران در نقشه " />
                    </div>
                </div>
                <div className=" w-full lg:w-1/4 p-3 rounded-lg">
                    <img className=" rounded-lg" src='./image/menu2.jpg' alt="img" />
                    <div className=" flex flex-col items-center mt-5 gap-3">
                        <Button title=" شعبه پیروزی در نقشه " />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShopBranches