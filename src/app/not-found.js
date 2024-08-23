import Link from "next/link";
import Image from "next/image";

const page = () => {
  return (
    <div className="flex items-center justify-center min-h-screen lg:px-32 px-5 bg-backgroundColor mx-auto text-center">
      <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
        {/* <!-- left side --> */}
        <div className="relative flex justify-center">
          <div className="absolute hidden top-5 mt-2 mx-auto bg-opacity-30 backdrop-blur-sm rounded drop-shadow-lg md:block">
          
            <span className="mb-3 text-xl text-primary">  صفحه مورد نظر یافت نشد</span>
          </div>
          <Image
            src="./image/4044.png"
            alt="img"
            className="w-[450px] h-full hidden rounded-2xl md:block object-cover bg-center bg-auto bg-no-repeat "
          />
          {/* <!-- text on image  --> */}
          <div className="absolute hidden bottom-10 bg-opacity-30 backdrop-blur-sm rounded drop-shadow-lg md:block bg-black text-white p-2 mb-2 hover:bg-white hover:text-black hover:border hover:border-gray-300 bg-gradient-to-r from-primary to-secondary border-2 border-primary py-2 px-4">
            <Link href="/">برگشت به صفحه اصلی</Link>
          </div>
        </div>

        {/* right side */}

        <div className="relative">
          <Image
            src="./image/4042.png"
            alt="img"
            className="w-full h-full hidden rounded-2xl md:block object-cover bg-center bg-auto bg-no-repeat "
          />
        </div>
      </div>
    </div>
  );
};

export default page;
