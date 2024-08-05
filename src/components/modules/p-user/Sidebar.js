
const Sidebar = () => {
  
  return (
    <aside class="sidebar fixed top-0 bottom-0 -right-64 z-30 lg:static bg-white dark:bg-gray-800 flex flex-col w-64 lg:w-56 lg:mt-10 px-7 py-5 lg:px-0 lg:py-0 shrink-0 lg:min-h-[calc(100vh-68px)] transition-all lg:transition-none">
        <div class="flex items-center justify-between pb-5 mb-7 border-b md:border-none border-b-gray-200 dark:border-b-slate">
          <a
            href="https://sabzlearn.ir"
            class="flex items-center gap-x-1.5 md:gap-x-2.5"
          >
            <img
              src="https://sabzlearn.ir/wp-content/themes/sabzlearn-theme/images/logo.webp"
              class="h-10 md:h-14"
              alt="سبز لرن"
            />
           
          </a>
        
        </div>
        <div class="space-y-4 text-zinc-700 dark:text-white">
          <a
            href="https://sabzlearn.ir/my-account"
            class="flex items-center gap-x-2.5 h-10 px-3 rounded-lg bg-primary text-white"
          >
            پیشخوان{" "}
          </a>
          <a
            href="https://sabzlearn.ir/my-account/courses"
            class="flex items-center gap-x-2.5 h-10 px-3 rounded-lg "
          >
           
            دوره های من{" "}
          </a>
          <a
            href="https://sabzlearn.ir/my-account/tickets"
            class="flex items-center gap-x-2.5 h-10 px-3 rounded-lg "
          >
           
            تیکت ها{" "}
          </a>
          <a
            href="https://sabzlearn.ir/my-account/edit-account"
            class="flex items-center gap-x-2.5 h-10 px-3 rounded-lg "
          >
           
            جزئیات حساب{" "}
          </a>
          <a
            href="javascript:if(confirm('آیا مطمئن هستید که می‌خواهید خارج شوید؟')){window.location.href='https://sabzlearn.ir/logout';}"
            class="flex items-center gap-x-2.5 h-10 px-3 rounded-lg "
          >
         
            خروج{" "}
          </a>
        </div>
      </aside>
  );
};

export default Sidebar;
