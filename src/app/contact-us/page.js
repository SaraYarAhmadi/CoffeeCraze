import Footer from "@/components/modules/footer/Footer";
import Navbar from "@/components/modules/navbar/Navbar";
import Map from "../../components/templates/contact-us/Map";
import { authUser } from "@/utils/serverHelpers";
import {
  FaEnvelopeOpenText,
  FaInternetExplorer,
  FaPhone,
  FaTelegramPlane,
} from "react-icons/fa";
import { PiCoffeeFill } from "react-icons/pi";
import { BiSolidContact } from "react-icons/bi";
import Breadcrumb from "../../components/modules/Breadcrumb/Breadcrumb";
import Link from "next/link";
import { SiCoffeescript } from "react-icons/si";
import { RiInstagramLine, RiTelegramLine } from "react-icons/ri";

// [35.77470387076072, 51.44456674589585] میرداماد
// [35.70083817411949, 51.418822569587114] استانبول
// [35.73213968414207, 51.37810042047109] گیشا
const page = async () => {
  const user = await authUser();

  return (
    <div>
      <Navbar isLogin={user ? true : false} />
      <div className="min-h-screen lg:px-32 px-5 bg-backgroundColor mx-auto text-center md:pt-24 py-10">
        <Breadcrumb
          links={[
            { id: 1, title: "خانه", to: "/" },
            { id: 2, title: "تماس با ما", to: "/contact-us" },
          ]}
        />
        <h1 className="flex justify-start mt-10 mr-4 text-xl font-bold pb-2 w-[90%]">
          <span> آدرس فروشگاه ها </span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          <Link
            href="/"
            className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100"
          >
            <img
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
              src="./image/111.png"
              alt=""
            />
            <Map>
              <h3> فروشگاه شعبه 1 </h3>
              <p className="py-3 w-full">تهران, خیابان شریعتی, تقاطع میرداماد, نبش بن بست شریفی</p>
              <p>021-887777</p>
            </Map>
          </Link>
          <Link
            href="/"
            className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100"
          >
            <img
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
              src="./image/333.png"
              alt=""
            />
            <Map>
              <h3> فروشگاه شعبه 2 </h3>
              <p className="py-3">تهران، چهارراه استانبول، جنب پاساژ گلشن، قهوه ریو</p>
              <p>021-8844444</p>
            </Map>
          </Link>
          <Link
            href="/"
            className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100"
          >
            <img
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
              src="./image/444.png"
              alt=""
            />
            <Map>
              <h3> فروشگاه شعبه 3 </h3>
              <p className="py-3">تهران، پاسداران نبش پانزدهم, پلاک ۲۳۰</p>
              <p>021-8855555</p>
            </Map>
          </Link>
        </div>

        <div className="p-5 mb-5 sm:pb-8 sm:mb-8 bg-backgroundColor lg:rounded-4xl border-2 rounded-3xl mt-14 bg-gradient-to-r from-backgroundColor to-brightColor shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <div className="flex items-center justify-start gap-x-4">
            <Link
              href="/"
              title="coffee"
              className="flex items-center gap-x-3.5"
            >
              <div className="hidden md:flex flex-row items-center cursor-pointer gap-2">
                <SiCoffeescript size={40} />
              </div>
            </Link>
            <span className="flex justify-start mr-10 text-xl font-bold">
              {" "}
              ساعات کاری فروشگاه
            </span>
          </div>
          <div className="flex items-center flex-wrap gap-y-4  gap-x-12 mt-10 sm:mt-8">
            <h3> اینترنتی: 10 صبح تا 17 بعد از ظهر</h3>
            <h3> پنجشنبه: 10 صبح تا 14 بعد از ظهر</h3>
          </div>
        </div>

        <div className="flex-col md:flex bg-white shadow-2xl rounded-2xl md:flex-row md:my-16 my-5">
          {/* <!-- left side --> */}
          <div className="w-full relative md:w-1/2">
            <img
              src="./image/contact-us.jpg"
              alt="img"
              className="w-full h-full rounded-2xl md:block object-cover bg-center bg-auto bg-no-repeat"
            />
          </div>

          {/* right side */}
          <div className="w-full md:w-1/2 flex flex-col p-6 gap-y-6 justify-start items-center ">
            <div className="w-full flex flex-col md:justify-start text-justify md:text-start items-center">
              <h4 className="mb-2">تماس با ما</h4>
              <p>اطلاعات تماس</p>
            </div>

            <div className="w-full flex gap-x-2 items-center">
              <PiCoffeeFill />
              <p>شرکت فنجان داغ (کارخانه قهوه )</p>
            </div>
            <div className="w-full flex gap-x-2 items-center">
              <FaInternetExplorer />
              <p>coffee.com</p>
            </div>
            <div className="w-full flex h-4 items-center">
              <BiSolidContact />
              <p>
                تهران، شهرک صنعتی عباس آباد، بلوار ابن
                سینا  
              </p>
            </div>
            <div className="w-full flex gap-x-2 items-center">
              <FaPhone />
              <p>021-364772288</p>
            </div>
            <div className="w-full flex gap-x-2 items-center">
              <FaEnvelopeOpenText />
              <p>offee[at]-coffee.com</p>
            </div>
            <div className="w-full flex gap-x-2 items-center">
              <FaEnvelopeOpenText />
              <p>whole[at]-coffee.com</p>
            </div>
            <div className="w-full flex gap-x-2 items-center">
              <FaTelegramPlane />
              <p>تماس با مدیریت از طریق واتساپ و یا تلگرام : 09364444473</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default page;
