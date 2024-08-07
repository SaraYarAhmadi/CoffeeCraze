import Layout from "@/components/layouts/UserPanelLayout";
import Box from "@/components/modules/infoBox/InfoBox";
import { authUser } from "@/utils/serverHelpers";
import WishlistModel from "@/models/Wishlist";

const page = async () => {
  const user = await authUser();

  const wishes = await WishlistModel.find({ user: user._id });

  return (
    <Layout>
      <main className="flex flex-wrap gap-x-3 gap-y-4 md:gap-x-10 mb-10 mx-auto w-full my-auto items-center justify-center">
        <Box title="مجموع کامنت ها " value="2" />
        <Box title="مجموع سفارشات" value="2" />
        <Box title="مجموع علاقه مندی ها" value={wishes.length} />
      </main>
    </Layout>
  );
};

export default page;
