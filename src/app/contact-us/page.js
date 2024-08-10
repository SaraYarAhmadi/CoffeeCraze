import Footer from "@/components/modules/footer/Footer";
import Navbar from "@/components/modules/navbar/Navbar";
import Map from "@/components/templates/contact-us/Map";
import { authUser } from "@/utils/serverHelpers";
import Link from "next/link";
import {
  FaEnvelopeOpenText,
  FaInternetExplorer,
  FaPhone,
  FaTelegramPlane,
} from "react-icons/fa";
import { PiCoffeeFill } from "react-icons/pi";
import { BiSolidContact } from "react-icons/bi";

// [35.77470387076072, 51.44456674589585] میرداماد
// [35.70083817411949, 51.418822569587114] استانبول
// [35.73213968414207, 51.37810042047109] گیشا
const page = async () => {
  const user = await authUser();

  return (
    <div>
      <Navbar isLogin={user ? true : false} />
      <div className="min-h-screen lg:px-32 px-5 bg-backgroundColor mx-auto text-center md:pt-24 pt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <section className="bg-white rounded-lg relative z-10">
            <Map
              position={[35.77470387076072, 51.44456674589585]}
              center={[35.77470387076072, 51.44456674589585]}
            >
              <h3> فروشگاه شعبه 1 </h3>
              <p>تهران, خیابان شریعتی, تقاطع میرداماد, نبش بن بست شریفی</p>
              <p>021-887777</p>
            </Map>
          </section>
          <section className="bg-white rounded-lg relative z-10">
            <Map
              position={[35.70083817411949, 51.418822569587114]}
              center={[35.70083817411949, 51.418822569587114]}
            >
              <h3> فروشگاه شعبه 2 </h3>
              <p>تهران، چهارراه استانبول، جنب پاساژ گلشن، قهوه ریو</p>
              <p>021-8844444</p>
            </Map>
          </section>
          <section className="bg-white rounded-lg relative z-10">
            <Map
              position={[35.73213968414207, 51.37810042047109]}
              center={[35.73213968414207, 51.37810042047109]}
            >
              <h3> فروشگاه شعبه 3 </h3>
              <p>تهران، گیشا، نبش پانزدهم, پلاک ۲۳۰</p>
              <p>021-8855555</p>
            </Map>
          </section>
        </div>

        <div className="flex bg-white shadow-2xl rounded-2xl md:flex-row md:my-10 my-5">
          {/* <!-- left side --> */}
          <div className="flex flex-col p-6 gap-y-6 justify-start items-center w-1/2">
            <div className="w-full flex flex-col justify-start text-start items-center">
              <h4 className="mb-2">تماس با ما</h4>
              <p>اطلاعات تماس</p>
            </div>

            <div className="w-full flex gap-x-2 items-center">
              <PiCoffeeFill />
              <p>شرکت فنجان داغ (کارخانه قهوه )</p>
            </div>
            <div className="w-full flex gap-x-2 items-center">
              <FaInternetExplorer />
              <p>set-coffee.com</p>
            </div>
            <div className="w-full flex h-4 items-center">
              <BiSolidContact />
              <p>
                تهران، کیلومتر 40 جاده خاوران، شهرک صنعتی عباس آباد، بلوار ابن
                سینا، خیابان چکاوک
              </p>
            </div>
            <div className="w-full flex gap-x-2 items-center">
              <FaPhone />
              <p>021-36479228</p>
            </div>
            <div className="w-full flex gap-x-2 items-center">
              <FaEnvelopeOpenText />
              <p>offee[at]set-coffee.com</p>
            </div>
            <div className="w-full flex gap-x-2 items-center">
              <FaEnvelopeOpenText />
              <p>whole[at]set-coffee.com</p>
            </div>
            <div className="w-full flex gap-x-2 items-center">
              <FaTelegramPlane />
              <p>تماس با مدیریت از طریق واتساپ و یا تلگرام : 09366726563</p>
            </div>
          </div>

          {/* right side */}

          <div className="relative w-1/2">
            <img
              src="./image/contact-us.jpg"
              alt="img"
              className="w-full h-full hidden rounded-2xl md:block object-cover bg-center bg-auto bg-no-repeat"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default page;
