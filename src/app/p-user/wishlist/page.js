import UserPanelLayout from "@/components/layouts/UserPanelLayout";
import connectToDB from "@/configs/db";
import { authUser } from "@/utils/serverHelpers";
import WishlistModel from "@/models/Wishlist";
import Product from "@/components/templates/p-user/wishlist/Product";
import { FaRegHeart } from "react-icons/fa";
import Link from "next/link";

const Page = async () => {
  connectToDB();
  const user = await authUser();

  const wishlist = await WishlistModel.find({ user: user._id })
    .populate("product", "name price score img")
    .lean();

  return (
    <UserPanelLayout>
      <main>
        <h1 className="flex justify-start mb-16 mr-10 text-xl font-bold border-b-2 border-gray-700 pb-2 w-[90%]">
          <span> علاقه مندی ها </span>
        </h1>

        <div>
          {!!wishlist.length &&
            wishlist.map((wish) => (
              <Product
                key={wish._id}
                productID={String(wish.product._id)}
                name={wish.product.name}
                price={wish.product.price}
                score={wish.product.score}
                img={wish.product.img}
              />
            ))}
        </div>
        {wishlist.length === 0 && (
          <div className="relative my-20 text-center md:mt-3">
            <div className="w-full flex items-center justify-center md:my-4">
              <FaRegHeart className="text-9xl text-gray-300" />
            </div>
            <p className="text-4xl my-2">محصولی یافت نشد</p>
            <span className="text-lg md:my-4">
              شما هنوز هیچ محصولی در لیست علاقه مندی های خود ندارید.
            </span>
            <span>در صفحه فروشگاه محصولات جالب زیادی پیدا خواهید کرد.</span>
            <div className="mt-9 md:mt-6">
              <Link
                className="bg-gradient-to-r from-brightColor to-brightColor shadow-[0_3px_10px_rgb(0,0,0,0.2)] px-6 py-2 border-2 border-white bg-[#FFDCAB] hover:text-[#AB6B2E] transition-all rounded-full"
                href="/gallery"
              >
                بازگشت به فروشگاه
              </Link>
            </div>
          </div>
        )}
      </main>
    </UserPanelLayout>
  );
};

export default Page;
