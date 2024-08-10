import React from "react";
import Link from "next/link";
import { FaAngleLeft } from "react-icons/fa6";
export default function Breadcrumb({ links }) {
  return (
    <>
      <div className="flex w-full h-[50px] items-center overflow-hidden rounded-2xl gap-x-2 font-DanaMedium text-xl border border-gray-300 shadow-xl text-zinc-600 lg:mb-10 pr-2 ">
        {links.map(({ id, title, to },index) => (
          <div className="breadcrumb__item relative" key={id}>
            <Link
              href={`${to}`}
              className="flex flex-shrink items-center justify-center text-base md:text-lg text-gray-700 text-center hover:text-primary"
            >
              <div>{title}</div>
              {index < links.length - 1 && ( // Conditionally render icon
                <FaAngleLeft
                  size={30}
                  className="font-medium text-gray-400 text-center"
                />
              )}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
