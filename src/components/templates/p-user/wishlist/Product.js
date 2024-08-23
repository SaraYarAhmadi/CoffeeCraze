"use client";
import { FaRegStar, FaStar } from "react-icons/fa";
import swal from "sweetalert";
import Image from "next/image";

const Card = ({ price, score, name, productID,img }) => {
  const removeProduct = () => {
    swal({
      title: "آیا از حذف محصول اطمینان دارید؟",
      icon: "warning",
      buttons: ["نه", "آره"],
    }).then(async (result) => {
      if (result) {
        const res = await fetch(`/api/wishlist/${productID}`, {
          method: "DELETE",
        });
        console.log("Res ->", res);

        if (res.status === 200) {
          swal({
            title: "محصول با موفقیت از علاقه مندی‌ها حذف شد",
            icon: "success",
            buttons: "فهمیدم",
          }).then(() => {
            location.reload();
          });
        }
      }
    });
  };

  return (
    <div className="flex items-center md:justify-between gap-4 md:gap-6 flex-wrap md:flex-nowrap border-2 border-solid box-border rounded-xl w-full md:w-[90%] mx-auto p-8 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <div className="flex-col items-center w-full md:w-28 flex-shrink-0">
        <Image src={img} className="w-full" width={500} height={500}  />
        <div className=" md:h-6 text-base md:text-lg flex items-center justify-center text-yellow-400 mt-1">
          {new Array(score).fill(0).map((item, index) => (
            <FaStar key={index} />
          ))}
          {new Array(5 - score).fill(0).map((item, index) => (
            <FaRegStar key={index} />
          ))}
        </div>
      </div>
      <div className="w-full flex justify-center">
        <h2 className="text-gray-800 text-lg font-medium uppercase">{name}</h2>
      </div>
      <div className="w-full md:w-28 flex items-center justify-center gap-x-1">
        <p className="text-gray-800 text-xl font-semibold">
          {price.toLocaleString()}{" "}
        </p>
        <span>تومان</span>
      </div>
      <div className="w-full md:w-28 flex justify-center">
        <button
          className="bg-gradient-to-r from-primary to-secondary border-2 border-primary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full"
          onClick={removeProduct}
        >
          حذف
        </button>
      </div>
    </div>
  );
};

export default Card;
