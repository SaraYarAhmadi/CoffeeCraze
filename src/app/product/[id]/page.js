
import Footer from "@/components/modules/footer/Footer";
import Navbar from "@/components/modules/navbar/Navbar";
import Comments from "../../../components/templates/product/Comments";
import MoreProducts from "../../../components/templates/product/MoreProducts";
import { authUser } from "../../../utils/serverHelpers";
import Details from "@/components/templates/product/Details";
import Gallery from "@/components/templates/product/Gallery";
import connectToDB from "@/configs/db";
import ProductModel from "@/models/Product";

const product = async ({ params }) => {
  const user = await authUser();
  connectToDB();
  const productID = params.id;
  const product = await ProductModel.findOne({ _id: productID }).populate(
    "comments"
  );

  const relatedProducts = await ProductModel.find({ smell: product.smell });
  return (
    <div>
      <Navbar isLogin={user ? true : false} />
      <div className="min-h-screen pt-24 bg-backgroundColor mx-auto text-center">
        <div className="flex items-center justify-center min-h-screen lg:px-32 px-5 py-24 bg-backgroundColor mx-auto text-center">
          <div className="flex flex-col justify-between lg:flex-row gap-5 lg:items-center">
            <Gallery />
            {/* ABOUT */}
            <Details product={JSON.parse(JSON.stringify(product))} />
          </div>
        </div>
        <Comments product={JSON.parse(JSON.stringify(product))} />
        <MoreProducts  relatedProducts={JSON.parse(JSON.stringify(relatedProducts))} />
      </div>
      <Footer />
    </div>
  );
};

export default product;
