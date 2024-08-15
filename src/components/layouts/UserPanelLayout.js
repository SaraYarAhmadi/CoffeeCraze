import React from "react";
import Sidebar from "@/components/modules/p-user/Sidebar";
import Topbar from "@/components/modules/p-user/Topbar";
import { authUser } from "@/utils/serverHelpers";
import { redirect } from "next/navigation";
import Navbar from "@/components/modules/navbar/Navbar";
import Footer from "@/components/modules/footer/Footer";


const Layout = async ({ children }) => {
  const user = await authUser();
  if (!user) {
    redirect("/login-register");
  }

  return (
    <>
    <Navbar isLogin={user ? true : false} />
     <main className="bg-backgroundColor flex min-h-screen mx-auto text-center lg:px-32 px-5 py-32 pt-24 md:pt-48 pb-16">
       <Sidebar />
      <section className="w-full max-w-[1432px] mx-auto bg-backgroundColor lg:rounded-4xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] border-primary">
      <Topbar />
      {children}
      </section>
    </main>
    <Footer />
    </>
   
  );
};

export default Layout;

// <div className={styles.layout}>
//   <section className={styles.section}>
//     <Sidebar />
//     <div className={styles.contents}>
//       <Topbar />
//       {children}
//     </div>
//   </section>
// </div>




