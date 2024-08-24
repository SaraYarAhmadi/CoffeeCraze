import Layout from "@/components/layouts/UserPanelLayout";
import Box from "@/components/modules/infoBox/InfoBox";
import { authUser } from "@/utils/serverHelpers";
import WishlistModel from "@/models/Wishlist";
import CommentModel from "@/models/Comment";
import Image from "next/image";

const page = async () => {
  const user = await authUser();

  const wishes = await WishlistModel.find({ user: user?._id });
  const comments = await CommentModel.find({ user: user?._id });

  return (
    <Layout>
      <main className="flex flex-wrap gap-x-3 gap-y-4 md:gap-x-10 mb-10 mx-auto w-full my-auto items-center justify-center">
        <div className="flex-col md:flex bg-white shadow-2xl rounded-2xl md:flex-row md:my-16 m-5 ">
          <div className="w-full md:w-1/2 flex flex-col p-6 gap-y-6 justify-start items-center ">
            <Box title="مجموع کامنت ها " value={comments.length} />
            <Box title="مجموع سفارشات" value="2" />
            <Box title="مجموع علاقه مندی ها" value={wishes.length} />
          </div>
          <div className="w-full relative md:w-1/2">
            <Image
              src="/image/roaster3.png"
              alt="img"
              className="w-full h-full rounded-2xl md:block object-cover bg-center bg-auto bg-no-repeat"
              width={500}
              height={500}
            />
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default page;
