
import Footer from "@/components/modules/footer/Footer";
import Navbar from "@/components/modules/navbar/Navbar";
import Services from "@/components/templates/index/Services/Services";
import ShopBranches from "@/components/templates/index/ShopBranches/ShopBranches";
import Banner from "@/components/templates/index/banner/Banner";
import Latest from "@/components/templates/index/latest/Latest";
import {authUser} from "../utils/serverHelpers";
import ProductModel from "@/models/Product";

export default async function Home() {
  const user = await authUser();
  const latestProducts = await ProductModel.find({}).sort({ _id: -1 }).limit(3);

  return (
    <main >
      <Navbar isLogin={user ? true : false}  />
      <Banner />
      <Services />
      <Latest products={JSON.parse(JSON.stringify(latestProducts))}/>
      <ShopBranches />
      <Footer />
    </main>
  );
}
