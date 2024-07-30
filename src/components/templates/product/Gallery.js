"use client";
import React, { useState } from "react";
function Gallery() {

    
  const [images, setImages] = useState({
    img1: "/image/1-2.png",
    img2: "/image/1-1.png",
  });
  const [activeImg, setActiveImage] = useState(images.img1);
  return (
    <div className="flex flex-col gap-6 justify-center items-center">
      <div className="lg:w-52 lg:h-52">
        <img
          src={activeImg}
          alt=""
          className="md:w-full h-full aspect-square object-cover rounded-xl"
        />
      </div>

      <div className="md:w-[450px] flex flex-row justify-center h-24 gap-x-4 mt-4">
        <img
          src={images.img1}
          alt=""
          className="w-24 h-24 rounded-md cursor-pointer"
          onClick={() => setActiveImage(images.img1)}
        />
        <img
          src={images.img2}
          alt=""
          className="w-24 h-24 rounded-md cursor-pointer"
          onClick={() => setActiveImage(images.img2)}
        />
      </div>
    </div>
  );
}

export default Gallery;
