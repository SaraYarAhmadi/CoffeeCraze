import Footer from '@/components/modules/footer/Footer'
import Navbar from '@/components/modules/navbar/Navbar'
import React from 'react'

function page() {
    return (
        <div className=''>
            <Navbar />
            <div className="col-span-9 mt-6 lg:mt-0 space-y-4 min-h-screen bg-backgroundColor mx-auto text-center lg:px-32 px-5 py-24">
               <h1 className='text-3xl font-bold md:my-4'>علاقه مندی ها</h1>
                <div className="flex items-center md:justify-between gap-4 md:gap-6 flex-wrap md:flex-nowrap border-2 border-solid box-border rounded-xl w-full p-8 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                    <div className="w-full md:w-28 flex-shrink-0">
                        <img src="./image/1-1.png" className="w-full" />
                    </div>
                    <div className="md:w-1/3 w-full">
                    <h2 className="text-gray-800 mb-1 xl:text-xl textl-lg font-medium uppercase">
                        دانه قهوه Caffè crema – ORO (گلد-Arabica 100%)
                        </h2>
                    </div>
                    <div className="">
                        <p className="text-primary text-lg font-semibold">320.00</p>
                    </div>
                    <a href="#"
                        className="ml-auto md:ml-0 block px-6 py-2 text-center text-sm text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium">
                       اضافه کردن به سبد خرید
                    </a>
                    <div className="text-gray-600 hover:text-primary cursor-pointer">
                        <i className="fas fa-trash"></i>
                    </div>
                </div>
                <div className="flex items-center md:justify-between gap-4 md:gap-6 flex-wrap md:flex-nowrap border-2 border-solid box-border rounded-xl w-full p-8 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                    <div className="w-28 flex-shrink-0">
                        <img src="./image/1-2.png" className="w-full" />
                    </div>
                    <div className="md:w-1/3 w-full">
                        <h2 className="text-gray-800 mb-1 xl:text-xl textl-lg font-medium uppercase">
                        دانه قهوه Caffè crema – ORO (گلد-Arabica 100%)
                        </h2>
                    </div>
                    <div className="">
                        <p className="text-primary text-lg font-semibold">320.00</p>
                    </div>
                    <a href="#"
                        className="ml-auto md:ml-0 block px-6 py-2 text-center text-sm text-white bg-primary border border-primary rounded uppercase font-roboto font-medium cursor-not-allowed bg-opacity-80">
                       اضافه کردن به سبد خرید
                    </a>
                    <div className="text-gray-600 hover:text-primary cursor-pointer">
                        <i className="fas fa-trash"></i>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default page