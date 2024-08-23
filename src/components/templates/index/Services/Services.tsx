import React from "react";
import Image from "next/image";


const ServicesData = [
  {
    id: 1,
    img: "./image/roaster5.png",
    name: "ارسال با پیک و پست",
    description:
      "ارسال سفارشات به تمام نقاط کشور",
    aosDelay: "100",
  },
  {
    id: 2,
    img: "./image/roaster4.png",
    name: "ضمانت 7 روزه",
    description:
      "هفت روز ضمانت عودت در صورت داشتن مشکل ",
    aosDelay: "300",
  },
  {
    id: 3,
    img: "image/roaster1.png",
    name: "روست تخصصی قهوه ها",
    description:
      " قهوه ها در بهترین کیفیت و تازه ترین حالت به دست شما می رسد",
    aosDelay: "500",
  },
];
const Services = () => {
  return (
    <div className="flex flex-col justify-center lg:px-24 px-5 bg-backgroundColor">
      <div className="py-5">
        <div className="container">
          {/* Heading section  */}
          <div className="text-center mb-20">
            <h1 className="text-2xl font-bold font-cursive text-gray-800 pt-4">
              بهترین قهوه برای شماست
            </h1>
          </div>

          {/* Services Card section  */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
            {ServicesData.map((service) => (
              <div key={service.id} data-aos="fade-up" data-aos-delay={service.aosDelay} className="rounded-2xl bg-white relative shadow-xl duration-high group max-w-[300px]">
                <div className="h-[122px]">
                  <Image
                    src={`./${service.img}`} alt="" className="max-w-[150px] block mx-auto transform -translate-y-14
                  group-hover:scale-105 group-hover:rotate-6 duration-300 rounded-full"/>
                </div>
                <div className="w-[280px] h-[110px] p-4 text-center">
                  <h1 className="text-sm lg:text-xl font-bold mb-2">{service.name}</h1>
                  <p className=" text-gray-800 duration-high text-sm line-clamp-2">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
