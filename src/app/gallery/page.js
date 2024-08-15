import Footer from "@/components/modules/footer/Footer";
import Navbar from "@/components/modules/navbar/Navbar";
import Aside from "../../components/templates/gallery/Aside";
import Breadcrumb from "../../components/modules/Breadcrumb/Breadcrumb";
import React from "react";
import { authUser } from "@/utils/serverHelpers";
import ProductModel from "@/models/Product";

async function Gallery() {
  const user = await authUser();
  const allProducts = await ProductModel.find({}).sort({ _id: -1 });

  return (
    <div className="">
      <Navbar isLogin={user ? true : false} />
      {/* <!-- sidebar --> */}

      <>
        <div className="min-h-screen bg-backgroundColor mx-auto text-center lg:px-32 px-5 pt-24 md:pt-48  pb-16">
          <Breadcrumb
            links={[
              { id: 1, title: "خانه", to: "/" },
              { id: 2, title: "محصولات", to: "/Article-info/article" },
            ]}
          />
          <div className="grid grid-cols-12 gap-y-5 md:gap-x-7 ">
            <Aside allProducts={allProducts} />
          </div>
        </div>
      </>

      <Footer />
    </div>
  );
}

export default Gallery;
