"use client";
import { useEffect, useState } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";

const ScrollToTop = () => {
  const [isVisible, setIsvisible] = useState(false)
  useEffect(() => {
    const toggleVisibility = () => {
      window.scrollY > 120 ? setIsvisible(true) : setIsvisible(false)
    }
    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)

  }, [])

  const handleScrollToTop = (): void => {
    window.scroll({
      top: 0,
      behavior: "smooth"
    });
  }


  return (
    <button className={`fixed flex items-center justify-center w-14 h-14 rounded-full bottom-8 left-4 border-2 text-orange-900 bg-gray-100  text-3xl ${isVisible ? " visible" : "hidden"}`} onClick={handleScrollToTop} >
      <MdKeyboardArrowUp />
    </button>
  );
};

export default ScrollToTop;
