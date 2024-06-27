"use client"
import Navbar from "@/components/modules/navbar/Navbar";
import Banner from "@/components/templates/index/banner/Banner";
import HomePage from "@/components/templates/index/home/HomePage";

export default function Home() {

  return (
    <main >
      <Navbar />
      <Banner />
      <HomePage/>
    </main>
  );
}
