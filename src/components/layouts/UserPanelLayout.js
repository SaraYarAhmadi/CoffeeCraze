import React from "react";
import Sidebar from "@/components/modules/p-user/Sidebar";
import Topbar from "@/components/modules/p-user/Topbar";
import { authUser } from "@/utils/serverHelpers";
import { redirect } from "next/navigation";

const Layout = async ({ children }) => {
  const user = await authUser();
  if (!user) {
    redirect("/login-register");
  }

  return (
    <main class="md:bg-white md:dark:bg-gray-800 flex gap-x-10 2xl:gap-x-14 lg:px-8 xl:px-14 2xl:px-25 lg:py-7">
       <Sidebar />
      <section class="w-full max-w-[1432px] mx-auto bg-gray-100 dark:bg-gray md:p-10 lg:rounded-4xl">
      <Topbar />
      {children}
      </section>
    </main>
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




