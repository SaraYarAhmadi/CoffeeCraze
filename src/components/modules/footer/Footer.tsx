import React from 'react'
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaLocationArrow,
    FaMobileAlt,
} from "react-icons/fa";
import { SiCoffeescript } from 'react-icons/si';

function Footer() {
    return (
        <div className=" bg-gradient-to-r from-[#FFDCAB] to-[#AB6B2E] text-black mt-8 md:mt-0">
            <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
                <div className=" w-full md:w-1/4">
                    <h1 className="sm:text-4xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
                        <SiCoffeescript size={25} />
                    </h1>
                    <p className=" text-sm">اولین برند پیشرو در صنعت  قهوه در کشور ایران که از سال 1311، افتخار همراهی مشتریان خود را دارد.
                    </p>
                </div>
                <div>
                    <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">لینک های مفید</h1>
                    <nav className=" flex flex-col gap-2">
                        <a
                            className=" hover:text-backgroundColor transition-all cursor-pointer"
                            href="/"
                        >
                            محصولات
                        </a>
                        <a
                            className=" hover:text-backgroundColor transition-all cursor-pointer"
                            href="/"
                        >
                            وبلاگ
                        </a>
                        <a
                            className=" hover:text-backgroundColor transition-all cursor-pointer"
                            href="/"
                        >
                            درباره ما
                        </a>
                        <a
                            className=" hover:text-backgroundColor transition-all cursor-pointer"
                            href="/"
                        >
                            تماس با ما
                        </a>
                    </nav>
                </div>
                <div>
                    <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">آدرس شعب</h1>
                    <nav className=" flex flex-col gap-2">
                        <a
                            className=" hover:text-backgroundColor transition-all cursor-pointer"
                            href="/"
                        >
                            تهران، چهارراه استانبول، جنب پاساژ گلشن، پلاک 410
                        </a>
                        <a
                            className=" hover:text-backgroundColor transition-all cursor-pointer"
                            href="/"
                        >
                            تهران خیابان شریعتی، بالاتر از میرداماد، نبش بن بست شریفی
                        </a>
                        <a
                            className=" hover:text-backgroundColor transition-all cursor-pointer"
                            href="/"
                        >
                            تهران خیابان شریعتی، بالاتر از پل سیدخندان، پلاک 121
                        </a>
                    </nav>
                </div>
                <div>
                    <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0"> تماس با ما </h1>
                    <nav className=" flex flex-col gap-2">
                        <a className=" hover:text-backgroundColor transition-all cursor-pointer" href="/">
                            CoffeeCraze@email.com
                        </a>
                        <a className=" hover:text-backgroundColor transition-all cursor-pointer" href="/">
                            09372470000
                        </a>
                        <div className="flex items-center gap-3 mt-6">
                            <a href="#">
                                <FaInstagram className="text-3xl" />
                            </a>
                            <a href="#">
                                <FaFacebook className="text-3xl" />
                            </a>
                            <a href="#">
                                <FaLinkedin className="text-3xl" />
                            </a>
                        </div>
                    </nav>
                </div>
            </div>
            <div>
                <p>
                    <p className=" text-center py-4">
                        @copyright developed by
                        <span className=" text-backgroundColor">
                            {" "}
                            champion programmers{" "}
                        </span>
                        | All rights reserved
                    </p>
                </p>
            </div>
        </div>
    )
}

export default Footer