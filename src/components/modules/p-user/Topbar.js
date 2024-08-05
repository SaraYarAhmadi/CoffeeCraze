
const Topbar = () => {

  return (
     <header class="flex items-center justify-between bg-white dark:bg-gray md:bg-transparent dark:border-b md:border-none border-b-gray-700 mb-6 md:mb-14 p-5 md:p-0">
          <h3 class="hidden md:block font-danaDemiBold text-2xl text-zinc-700 dark:text-white">
            سروش طهرانی عزیز؛ خوش اومدی 🙌
          </h3>
          <div class="sidebar__open-btn md:hidden font-danaMedium text-zinc-700 dark:text-white">
           
            پیشخوان{" "}
          </div>
      
              <div class="user-profile">
                <img
                  src="https://secure.gravatar.com/avatar/817fc025272d1a7ac4e7459872c3e891?s=96&amp;d=mm&amp;r=g"
                  alt="soroushsara"
                  class="object-cover w-12 h-12 md:w-14 md:h-14 rounded-full inline-block cursor-pointer"
                />
              </div>
          
        </header>
  );
};

export default Topbar;
