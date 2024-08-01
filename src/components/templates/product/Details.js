import { FaRegStar, FaStar } from "react-icons/fa";
import { IoCheckmark } from "react-icons/io5";
import AddToWishlist from "./AddToWishlist";
import AddCountProduct from "./AddCountProduct";

function Details({ product }) {

  return (
    <div className="flex flex-col text-justify justify-start gap-6 lg:w-2/4 md:mr-8">
      <h1 className="text-3xl font-bold"> {product.name} </h1>
      <div className="flex items-center justify-start">
        <div className=" md:h-6 text-base md:text-2xl flex items-center justify-center text-yellow-400">
          {new Array(product.score).fill(0).map((item, index) => (
            <FaStar key={index} />
          ))}
          {new Array(5 - product.score).fill(0).map((item, index) => (
            <FaRegStar key={index} />
          ))}
        </div>
        <p>(دیدگاه کاربر {product.comments.length})</p>
      </div>
      <p className="text-gray-900">{product.shortDescription}</p>
      <div className="flex flex-col text-sm gap-y-1 text-gray-900">
        <span> مناسب برای:{product.suitableFor} </span>
        <span className="my-2">میزان بو:{product.smell} </span>
        <p>وزن: {product.weight} گرم </p>
      </div>
      <span className="text-2xl font-semibold">
        {product.price.toLocaleString()} تومان
      </span>
      <div className="flex items-center justify-start gap-x-1">
        <IoCheckmark />
        <p className="text-sm gap-y-1 text-gray-900">موجود در انبار</p>
      </div>
      <AddCountProduct/>
      <AddToWishlist productID={product._id}/>
    </div>
  );
}

export default Details;