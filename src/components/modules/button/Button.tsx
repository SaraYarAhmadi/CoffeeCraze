// import React from "react";

// const Button = (props: { title: string | undefined; }) => {
//     return (
//         <div>
//             <button className="px-6 py-1 border-2 border-white bg-[#FFDCAB] hover:text-[#AB6B2E] transition-all rounded-full">
//                 {props.title}


//             </button>


//             <div className="px-5 md:px-0">
//           <h3 className="md:hidden font-danaDemiBold text-zinc-700 dark:text-white mb-7">
//             سروش طهرانی عزیز؛ خوش اومدی 🙌
//           </h3>{" "}
//           <div className="flex flex-wrap gap-x-3 gap-y-4 md:gap-x-10 mb-10">
//             <div className="flex items-center gap-x-2.5 md:gap-x-4 flex-grow md:flex-grow-0 md:w-60 bg-amber-400 dark:bg-yellow-400 p-2 rounded-2xl">
//               <div className="flex-center w-14 h-14 md:w-[68px] md:h-[68px] bg-white/20 rounded-2xl">
//                 <svg className="w-8 h-8 md:w-9 md:h-9 text-white">
//                   <use href="#credit-card"></use>
//                 </svg>
//               </div>
//               <div className="flex flex-col gap-y-1.5 md:gap-y-2 text-white">
//                 <span className="text-xs">مجموع پرداخت ها</span>
//                 <span className="font-danaDemiBold text-sm md:text-lg">
//                   3,107,500&nbsp;<span className="slms-price_symbol">تومان</span>
//                 </span>
//               </div>
//             </div>
//             <div className="flex items-center gap-x-2.5 md:gap-x-4 flex-grow md:flex-grow-0 md:w-60 bg-sky-500 dark:bg-secondary p-2 rounded-2xl">
//               <div className="flex-center w-14 h-14 md:w-[68px] md:h-[68px] bg-white/20 rounded-2xl">
//                 <svg className="w-8 h-8 md:w-9 md:h-9 text-white">
//                   <use href="#rocket-launch"></use>
//                 </svg>
//               </div>
//               <div className="flex flex-col gap-y-1.5 md:gap-y-2 text-white">
//                 <span className="text-xs">دوره های من</span>
//                 <span className="font-danaDemiBold text-sm md:text-lg">
//                   23 دوره
//                 </span>
//               </div>
//             </div>
//             <div className="flex items-center gap-x-2.5 md:gap-x-4 flex-grow md:flex-grow-0 md:w-60 bg-pink-500 dark:bg-rose-500 p-2 rounded-2xl">
//               <div className="flex-center w-14 h-14 md:w-[68px] md:h-[68px] bg-white/20 rounded-2xl">
//                 <svg className="w-8 h-8 md:w-9 md:h-9 text-white">
//                   <use href="#ticket"></use>
//                 </svg>
//               </div>
//               <div className="flex flex-col gap-y-1.5 md:gap-y-2 text-white">
//                 <span className="text-xs">مجموع تیکت ها</span>
//                 <span className="font-danaDemiBold text-sm md:text-lg">6 تیکت</span>
//               </div>
//             </div>
//             <div className="flex items-center gap-x-2.5 md:gap-x-4 flex-grow md:flex-grow-0 md:w-60 bg-primary p-2 rounded-2xl">
//               <div className="flex-center w-14 h-14 md:w-[68px] md:h-[68px] bg-white/20 rounded-2xl">
//                 <svg className="w-8 h-8 md:w-9 md:h-9 text-white">
//                   <use href="#currency-dollar"></use>
//                 </svg>
//               </div>
//               <div className="flex flex-col gap-y-1.5 md:gap-y-2 text-white">
//                 <span className="text-xs">موجودی حساب</span>
//                 <span className="font-danaDemiBold text-sm md:text-lg">
//                   100,000&nbsp;<span className="slms-price_symbol">تومان</span>
//                 </span>
//               </div>
//             </div>
//           </div>
//           <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-7 items-start">
//             <div>
//               <div className="flex justify-between items-center bg-white dark:bg-gray-800 px-3.5 py-2.5 md:p-4.5 mb-4 md:mb-5 rounded-2xl">
//                 <span className="font-danaMedium md:text-xl text-zinc-700 dark:text-white">
//                   اخیرا مشاهده شده
//                 </span>
//                 <a
//                   href="https://sabzlearn.ir/my-account/courses"
//                   className="button-sm bg-sky-500/10 text-sky-500 dark:bg-secondary/10 dark:text-secondary text-sm"
//                 >
//                   همه دوره های ثبت‌نام شده
//                   <svg className="w-4 h-4">
//                     <use href="#arrow-left"></use>
//                   </svg>
//                 </a>
//               </div>
//               <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-4">
//                 <div className="course flex flex-col overflow-hidden bg-white dark:bg-gray-800 shadow-light dark:shadow-none dark:border dark:border-gray-700 rounded-2xl">
//                   {/* <!-- Course Banner --> */}
//                   <div className="relative h-42">
//                     <a
//                       className="w-full h-full block"
//                       href="https://sabzlearn.ir/course/next-js/#lessons"
//                       title="آموزش Next.js بصورت پروژه محور"
//                     >
//                       <img
//                         className="block w-full h-full object-cover rounded-2xl"
//                         src="https://sabzlearn.ir/wp-content/uploads/2023/12/ezgif.com-jpg-to-webp-converted-27-1-768x432.webp"
//                         alt="آموزش Next.js بصورت پروژه محور"
//                       />
//                     </a>
//                   </div>
//                   {/* <!-- Course Body --> */}
//                   <div className="px-5 pb-3.5 pt-2.5 flex-grow ">
//                     {/* <!-- Course Title --> */}
//                     <h4 className="font-danaMedium h-12 line-clamp-2 text-zinc-700 dark:text-white mb-2.5">
//                       <a href="https://sabzlearn.ir/course/next-js/#lessons">
//                         آموزش Next.js بصورت پروژه محور
//                       </a>
//                     </h4>
//                     {/* <!-- Course Footer --> */}
//                     <div className="pt-3 border-t border-t-gray-100 dark:border-t-gray-700">
//                       <div className="flex items-center justify-between text-xs mb-1.5">
//                         <span className="text-zinc-700 dark:text-white">
//                           میزان مشاهده
//                         </span>
//                         <span className="text-slate-500 dark:text-slate-400">
//                           48%
//                         </span>
//                       </div>
//                       <div className="bg-gray-100 dark:bg-gray-700 h-[5px] rounded-full">
//                         <div
//                           className="bg-primary h-full rounded-full"
//                           style="width: 48%"
//                         ></div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="course flex flex-col overflow-hidden bg-white dark:bg-gray-800 shadow-light dark:shadow-none dark:border dark:border-gray-700 rounded-2xl">
//                   {/* <!-- Course Banner --> */}
//                   <div className="relative h-42">
//                     <a
//                       className="w-full h-full block"
//                       href="https://sabzlearn.ir/course/pwa/#lessons"
//                       title="آموزش PWA بصورت پروژه محور"
//                     >
//                       <img
//                         className="block w-full h-full object-cover rounded-2xl"
//                         src="https://sabzlearn.ir/wp-content/uploads/2023/12/ezgif.com-jpg-to-webp-converted-26-1-768x432.webp"
//                         alt="آموزش PWA بصورت پروژه محور"
//                       />
//                     </a>
//                   </div>
//                   {/* <!-- Course Body --> */}
//                   <div className="px-5 pb-3.5 pt-2.5 flex-grow ">
//                     {/* <!-- Course Title --> */}
//                     <h4 className="font-danaMedium h-12 line-clamp-2 text-zinc-700 dark:text-white mb-2.5">
//                       <a href="https://sabzlearn.ir/course/pwa/#lessons">
//                         آموزش PWA بصورت پروژه محور
//                       </a>
//                     </h4>
//                     {/* <!-- Course Footer --> */}
//                     <div className="pt-3 border-t border-t-gray-100 dark:border-t-gray-700">
//                       <div className="flex items-center justify-between text-xs mb-1.5">
//                         <span className="text-zinc-700 dark:text-white">
//                           میزان مشاهده
//                         </span>
//                         <span className="text-slate-500 dark:text-slate-400">
//                           58%
//                         </span>
//                       </div>
//                       <div className="bg-gray-100 dark:bg-gray-700 h-[5px] rounded-full">
//                         <div
//                           className="bg-primary h-full rounded-full"
//                           style="width: 58%"
//                         ></div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="course flex flex-col overflow-hidden bg-white dark:bg-gray-800 shadow-light dark:shadow-none dark:border dark:border-gray-700 rounded-2xl">
//                   {/* <!-- Course Banner --> */}
//                   <div className="relative h-42">
//                     <a
//                       className="w-full h-full block"
//                       href="https://sabzlearn.ir/course/websocket/#lessons"
//                       title="آموزش پروژه محور WebSocket"
//                     >
//                       <img
//                         className="block w-full h-full object-cover rounded-2xl"
//                         src="https://sabzlearn.ir/wp-content/uploads/2024/01/IMAGE-1402-10-21-20_14_43-1-768x432.webp"
//                         alt="آموزش پروژه محور WebSocket"
//                       />
//                     </a>
//                   </div>
//                   {/* <!-- Course Body --> */}
//                   <div className="px-5 pb-3.5 pt-2.5 flex-grow ">
//                     {/* <!-- Course Title --> */}
//                     <h4 className="font-danaMedium h-12 line-clamp-2 text-zinc-700 dark:text-white mb-2.5">
//                       <a href="https://sabzlearn.ir/course/websocket/#lessons">
//                         آموزش پروژه محور WebSocket
//                       </a>
//                     </h4>
//                     {/* <!-- Course Footer --> */}
//                     <div className="pt-3 border-t border-t-gray-100 dark:border-t-gray-700">
//                       <div className="flex items-center justify-between text-xs mb-1.5">
//                         <span className="text-zinc-700 dark:text-white">
//                           میزان مشاهده
//                         </span>
//                         <span className="text-slate-500 dark:text-slate-400">
//                           2%
//                         </span>
//                       </div>
//                       <div className="bg-gray-100 dark:bg-gray-700 h-[5px] rounded-full">
//                         <div
//                           className="bg-primary h-full rounded-full"
//                           style="width: 2%"
//                         ></div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="course flex flex-col overflow-hidden bg-white dark:bg-gray-800 shadow-light dark:shadow-none dark:border dark:border-gray-700 rounded-2xl">
//                   {/* <!-- Course Banner --> */}
//                   <div className="relative h-42">
//                     <a
//                       className="w-full h-full block"
//                       href="https://sabzlearn.ir/course/graphql/#lessons"
//                       title="آموزش جامع پروژه محور GraphQL"
//                     >
//                       <img
//                         className="block w-full h-full object-cover rounded-2xl"
//                         src="https://sabzlearn.ir/wp-content/uploads/2024/01/IMAGE-1402-10-21-20_14_45-2-768x432.webp"
//                         alt="آموزش جامع پروژه محور GraphQL"
//                       />
//                     </a>
//                   </div>
//                   {/* <!-- Course Body --> */}
//                   <div className="px-5 pb-3.5 pt-2.5 flex-grow ">
//                     {/* <!-- Course Title --> */}
//                     <h4 className="font-danaMedium h-12 line-clamp-2 text-zinc-700 dark:text-white mb-2.5">
//                       <a href="https://sabzlearn.ir/course/graphql/#lessons">
//                         آموزش جامع پروژه محور GraphQL
//                       </a>
//                     </h4>
//                     {/* <!-- Course Footer --> */}
//                     <div className="pt-3 border-t border-t-gray-100 dark:border-t-gray-700">
//                       <div className="flex items-center justify-between text-xs mb-1.5">
//                         <span className="text-zinc-700 dark:text-white">
//                           میزان مشاهده
//                         </span>
//                         <span className="text-slate-500 dark:text-slate-400">
//                           9%
//                         </span>
//                       </div>
//                       <div className="bg-gray-100 dark:bg-gray-700 h-[5px] rounded-full">
//                         <div
//                           className="bg-primary h-full rounded-full"
//                           style="width: 9%"
//                         ></div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div>
//               <div className="bg-white dark:bg-gray-800 p-3.5 md:p-4.5 rounded-2xl">
//                 <div className="flex justify-between items-center pb-3.5 md:pb-4.5 mb-6 md:mb-7 border-b border-b-gray-200 dark:border-b-gray-700">
//                   <span className="font-danaMedium md:text-xl text-zinc-700 dark:text-white">
//                     تیکت های اخیر
//                   </span>
//                   <a
//                     href="https://sabzlearn.ir/my-account/tickets"
//                     className="flex items-center gap-x-1.5 text-sky-500 dark:text-secondary text-sm"
//                   >
//                     همه تیکت ها
//                     <svg className="w-4 h-4">
//                       <use href="#arrow-left"></use>
//                     </svg>
//                   </a>
//                 </div>
//                 <div>
//                   <div className="flex items-center justify-between flex-wrap gap-y-3 p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-colors">
//                     <a
//                       href="https://sabzlearn.ir/my-account/view_ticket?id=8301"
//                       className="text-zinc-700 dark:text-white w-full sm:max-w-sm sm:truncate"
//                     >
//                       مشکل در پخش ویدیو
//                     </a>
//                     <div className="flex items-center gap-3">
//                       <span className="text-xs text-slate-500 dark:text-slate-400">
//                         1402/08/19
//                       </span>
//                       <span className="text-xs py-1 px-1.5 text-slate-500 dark:text-yellow-400 bg-slate-500/10 dark:bg-yellow-400/10 rounded">
//                         بسته شده
//                       </span>
//                     </div>
//                   </div>
//                   <div className="flex items-center justify-between flex-wrap gap-y-3 p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-colors">
//                     <a
//                       href="https://sabzlearn.ir/my-account/view_ticket?id=8251"
//                       className="text-zinc-700 dark:text-white w-full sm:max-w-sm sm:truncate"
//                     >
//                       عدم پخش دوره ها با پلیر جدید
//                     </a>
//                     <div className="flex items-center gap-3">
//                       <span className="text-xs text-slate-500 dark:text-slate-400">
//                         1402/08/20
//                       </span>
//                       <span className="text-xs py-1 px-1.5 text-slate-500 dark:text-yellow-400 bg-slate-500/10 dark:bg-yellow-400/10 rounded">
//                         بسته شده
//                       </span>
//                     </div>
//                   </div>
//                   <div className="flex items-center justify-between flex-wrap gap-y-3 p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-colors">
//                     <a
//                       href="https://sabzlearn.ir/my-account/view_ticket?id=8221"
//                       className="text-zinc-700 dark:text-white w-full sm:max-w-sm sm:truncate"
//                     >
//                       درخواست دسترسی به فیگما
//                     </a>
//                     <div className="flex items-center gap-3">
//                       <span className="text-xs text-slate-500 dark:text-slate-400">
//                         1402/08/14
//                       </span>
//                       <span className="text-xs py-1 px-1.5 text-slate-500 dark:text-yellow-400 bg-slate-500/10 dark:bg-yellow-400/10 rounded">
//                         بسته شده
//                       </span>
//                     </div>
//                   </div>
//                   <div className="flex items-center justify-between flex-wrap gap-y-3 p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-colors">
//                     <a
//                       href="https://sabzlearn.ir/my-account/view_ticket?id=8194"
//                       className="text-zinc-700 dark:text-white w-full sm:max-w-sm sm:truncate"
//                     >
//                       عدم نمایش فیلم های مباحث آموزشی جدید
//                     </a>
//                     <div className="flex items-center gap-3">
//                       <span className="text-xs text-slate-500 dark:text-slate-400">
//                         1402/08/14
//                       </span>
//                       <span className="text-xs py-1 px-1.5 text-slate-500 dark:text-yellow-400 bg-slate-500/10 dark:bg-yellow-400/10 rounded">
//                         بسته شده
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="bg-white dark:bg-gray-800 p-3.5 md:p-4.5 rounded-2xl mt-7">
//                 <div className="flex justify-between items-center pb-3.5 md:pb-4.5 mb-6 md:mb-7 border-b border-b-gray-200 dark:border-b-gray-700">
//                   <span className="font-danaMedium md:text-xl text-zinc-700 dark:text-white">
//                     پرسش های اخیر
//                   </span>
//                 </div>
//                 <div>
//                   <div className="flex items-center justify-between flex-wrap gap-y-3 p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-colors">
//                     <a
//                       href="https://sabzlearn.ir/lesson/44-25755/#q-18541"
//                       className="text-zinc-700 dark:text-white w-full sm:max-w-sm sm:truncate"
//                     >
//                       آموزش PWA بصورت پروژه محور - تست اپلیکیشن Pwa و رفع مشکلات
//                     </a>
//                     <div className="flex items-center gap-3">
//                       <span className="text-xs text-slate-500 dark:text-slate-400">
//                         1403/05/12
//                       </span>
//                       <span className="text-xs py-1 px-1.5 text-slate-500 dark:text-yellow-400 bg-slate-500/10 dark:bg-yellow-400/10 rounded">
//                         بسته شده
//                       </span>
//                     </div>
//                   </div>
//                   <div className="flex items-center justify-between flex-wrap gap-y-3 p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-colors">
//                     <a
//                       href="https://sabzlearn.ir/lesson/45-28015/#q-3225"
//                       className="text-zinc-700 dark:text-white w-full sm:max-w-sm sm:truncate"
//                     >
//                       آموزش Next.js بصورت پروژه محور - معرفی پروژه سایت کافه
//                     </a>
//                     <div className="flex items-center gap-3">
//                       <span className="text-xs text-slate-500 dark:text-slate-400">
//                         1402/08/15
//                       </span>
//                       <span className="text-xs py-1 px-1.5 text-slate-500 dark:text-yellow-400 bg-slate-500/10 dark:bg-yellow-400/10 rounded">
//                         بسته شده
//                       </span>
//                     </div>
//                   </div>
//                   <div className="flex items-center justify-between flex-wrap gap-y-3 p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-colors">
//                     <a
//                       href="https://sabzlearn.ir/lesson/44-27965/#q-3133"
//                       className="text-zinc-700 dark:text-white w-full sm:max-w-sm sm:truncate"
//                     >
//                       آموزش PWA بصورت پروژه محور - دسترسی به لوکیشن دقیق کاربر -
//                       سخن پایانی
//                     </a>
//                     <div className="flex items-center gap-3">
//                       <span className="text-xs text-slate-500 dark:text-slate-400">
//                         1402/08/17
//                       </span>
//                       <span className="text-xs py-1 px-1.5 text-slate-500 dark:text-yellow-400 bg-slate-500/10 dark:bg-yellow-400/10 rounded">
//                         بسته شده
//                       </span>
//                     </div>
//                   </div>
//                   <div className="flex items-center justify-between flex-wrap gap-y-3 p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-colors">
//                     <a
//                       href="https://sabzlearn.ir/lesson/44-27890/#q-2962"
//                       className="text-zinc-700 dark:text-white w-full sm:max-w-sm sm:truncate"
//                     >
//                       آموزش PWA بصورت پروژه محور - تبدیل Push Subscription به
//                       Buffer
//                     </a>
//                     <div className="flex items-center gap-3">
//                       <span className="text-xs text-slate-500 dark:text-slate-400">
//                         1402/08/11
//                       </span>
//                       <span className="text-xs py-1 px-1.5 text-slate-500 dark:text-yellow-400 bg-slate-500/10 dark:bg-yellow-400/10 rounded">
//                         بسته شده
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="db-overlay invisible opacity-0 fixed w-full h-full top-0 left-0 bg-black/40 z-20 transition-all"></div>
//         </div>
//         </div>
//     );
// };

// export default Button;
