"use client"
import Footer from "@/components/modules/footer/Footer";
import Navbar from "@/components/modules/navbar/Navbar";
import Services from "@/components/templates/index/Services/Services";
import ShopBranches from "@/components/templates/index/ShopBranches/ShopBranches";
import Banner from "@/components/templates/index/banner/Banner";
import Latest from "@/components/templates/index/latest/Latest";

export default function Home() {

  return (
    <main >
      <Navbar />
      <Banner />
      <Services/>
      <Latest/>
      <ShopBranches/>
      <Footer/>
    </main>
  );
}
