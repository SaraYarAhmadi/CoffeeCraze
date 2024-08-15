import Footer from "@/components/modules/footer/Footer";
import Navbar from "@/components/modules/navbar/Navbar";
import Table from "../../components/templates/cart/Table";
import { authUser } from "../../utils/serverHelpers";

const page =async () => {
  const user = await authUser();

  return (
    <>
      <Navbar isLogin={user ? true : false}/>

      <main className="min-h-screen bg-backgroundColor mx-auto text-center lg:px-32 px-5 pt-24">
        <Table />
      </main>

      <Footer />
    </>
  );
};

export default page;
