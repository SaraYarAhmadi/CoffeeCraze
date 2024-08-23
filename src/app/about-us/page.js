import Breadcrumb from "../../components/modules/Breadcrumb/Breadcrumb";
import Footer from "@/components/modules/footer/Footer";
import Navbar from "@/components/modules/navbar/Navbar";
import { authUser } from "@/utils/serverHelpers";
import Link from "next/link";
import Image from "next/image";
const page = async () => {
  const user = await authUser();

  return (
    <>
      <Navbar isLogin={user ? true : false} />
      <div className="fmin-h-screen lg:px-32 px-5 bg-backgroundColor mx-auto text-center md:pt-24 pt-10">
        <Breadcrumb
          links={[
            { id: 1, title: "خانه", to: "/" },
            { id: 2, title: "درباره ما", to: "/about-us" },
          ]}
        />
        <div className="flex items-center justify-center w-full h-full">
          <Image
            src="/image/about5.png"
            alt="about"
            className="bg-cover bg-center bg-no-repeat rounded-3xl"
            width={1000}
            height={500}
          />
        </div>

        <section className="flex justify-center items-center w-full px-8 mt-10">
          <div className="row align-center">
            <div className="col-lg-8 mx-auto">
              <div className="text-center">
                <h2 className="text-xl text-primary my-4">
                  داستان ما از کجا شروع شد؟
                </h2>
                <div className="editor-content main-content">
                  <p>
                    تجربه‌ای به قدمت چهار نسل و ارتباط مستمر با مصرف کنندگان
                    ضامن این ویژگی‌هاست. از ویژگی‌های بارز مجموعه قهوه واردات
                    مواد اولیه راسا به وسیله مدیریت مجموعه و انتخاب بهترین مواد
                    اولیه جهت تولید قهوه است. مجموعه قهوه اولین مجموعه مرتبط با
                    قهوه در ایران است که در سال 2007 به عضویت انجمن تخصصی قهوه
                    اروپا (Speciality coffee association of Europe) در آمده است
                    و بسیاری از دوره‌های مربوط به فرآوری قهوه را مدیریت این
                    مجموعه به صورت تخصصی در کارگاه‌های آموزشی این انجمن و همچنین
                    کارگاه‌های تخصصی فرآوری قهوه به خصوص در زمینه بو دادن
                    قهوه(Roasting) را در کشور آمریکا که از پیشگامان این صنعت است
                    را گذرانده است. اکنون با پشتوانه دستاوردهای گذشته و تکنولوژی
                    روز دنیا وارد مرحله تولید قهوه به صورت صنعتی و گسترده
                    شده‌ایم و مفتخریم اعلام کنیم که «قهوه» از این پس یک نام
                    تجاری صنعتی در صنعت قهوه ایران است.
                  </p>
                </div>{" "}
                <div className="my-8">
                  <Link
                    href="/contact-us"
                    className="bg-gradient-to-r from-primary to-secondary border-2 border-primary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full "
                    target="_self"
                  >
                    تماس با ما
                  </Link>
                </div>{" "}
              </div>
            </div>
          </div>
        </section>

        <div className="min-h-[550px]">
          <div className="min-h-[550px] flex justify-center items-center backdrop-blur-xl py-12 sm:py-0 ">
            <div
              data-aos="slide-up"
              data-aos-duration="2000"
              className="container"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Image section */}
                <div className="flex items-center justify-center text-center">
                  <Image
                    src="/image/about3.png"
                    alt="biryani img"
                    className="max-w-[430px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]"
                    width={500}
                    height={500}
                  />
                </div>
                {/* text content section */}
                <div className="flex flex-col justify-center gap-6 sm:pt-0">
                  <h1 className="text-3xl sm:text-4xl font-bold">
                    فنجان داغ قهوه
                  </h1>
                  <p className="text-sm text-gray-500 tracking-wide leading-5">
                    خرید آنلاین قهوه از فروشگاه قهوه می‌تواند یک تجربه‌ی
                    شگفت‌انگیز برای شما باشد، به خصوص زمانی که شما به دنبال
                    قهوه‌ ای با کیفیت بالا و تازگی و طراوت فوق‌ العاده از قهوه
                    خود هستید. فروشگاه اینترنتی قهوه ملو، به شما این امکان را
                    می‌دهد تا به راحتی و با اطمینان، قهوه‌ی مورد نظر خود را از
                    میان انواع مختلفی دانه قهوه که در این فروشگاه موجود است،
                    انتخاب نمایید.
                    <br />
                    <br />
                    از فروشگاه قهوه دارای مزایای بسیاری است که در ادامه به شما
                    بیان خواهیم کرد. قهوه مجموعه ایست در زمینه خرید قهوه و فروش
                    قهوه اینترنتی و ارائه انواع دانه قهوه و قهوه های آسیاب شده
                    همچنین لوازم و تجهیزات و دستگاه های خانگی حرفه ای به مشتریان
                    خانگی و قهوه فروشی ها، کافی شاپ ها، رستوران ها و... فعالیت
                    می کند. مجموعه ما از سال ۱۳۸۴ تا به امروز در زمینه روست و
                    ترکیب قهوه های مخصوص و ممتاز و همچنین ارائه برند های معتبر
                    در زمینه قهوه برند و کپسول قهوه لوازم و تجهیزات حرفه ای و
                    خانگی + انواع کافی میکس مشغول می باشد.
                  </p>
                  <div>
                    <Link
                      href="/gallery"
                      className="bg-gradient-to-r from-primary to-secondary text-white py-2 px-4 rounded-full shadow-xl hover:shadow-md text-center"
                    >
                      خرید آنلاین قهوه
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default page;
