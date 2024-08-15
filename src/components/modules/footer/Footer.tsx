import Link from 'next/link';
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
        <div className=" bg-gradient-to-r from-[#FFDCAB] to-[#AB6B2E] text-black">
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
                        <Link
                            className=" hover:text-backgroundColor transition-all cursor-pointer"
                            href="/gallery"
                        >
                            محصولات
                        </Link>
                        <Link
                            className=" hover:text-backgroundColor transition-all cursor-pointer"
                            href="/"
                        >
                            وبلاگ
                        </Link>
                        <Link
                            className=" hover:text-backgroundColor transition-all cursor-pointer"
                            href="/about-us"
                        >
                            درباره ما
                        </Link>
                        <Link
                            className=" hover:text-backgroundColor transition-all cursor-pointer"
                             href="/contact-us"
                        >
                            تماس با ما
                        </Link>
                    </nav>
                </div>
                <div>
                    <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">آدرس شعب</h1>
                    <nav className=" flex flex-col gap-2">
                        <Link
                            className=" hover:text-backgroundColor transition-all cursor-pointer"
                            href="/contact-us"
                        >
                            تهران، چهارراه استانبول، جنب پاساژ گلشن، پلاک 410
                        </Link>
                        <Link
                            className=" hover:text-backgroundColor transition-all cursor-pointer"
                            href="/contact-us"
                        >
                            تهران خیابان شریعتی، بالاتر از میرداماد، نبش بن بست شریفی
                        </Link>
                        <Link
                            className=" hover:text-backgroundColor transition-all cursor-pointer"
                            href="/contact-us"
                        >
                            تهران خیابان پاسداران، نبش خیابان پانزدهم، پلاک 230 
                        </Link>
                    </nav>
                </div>
                <div>
                    <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0"> تماس با ما </h1>
                    <nav className=" flex flex-col gap-2">
                        <a className=" hover:text-backgroundColor transition-all cursor-pointer" href="/">
                            Coffee@email.com
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
                <p className=" text-center py-4">
                    @copyright developed by
                    <span className=" text-backgroundColor">
                        {" "}
                        champion programmers{" "}
                    </span>
                    | All rights reserved
                </p>
            </div>
        </div>
    )
}

export default Footer