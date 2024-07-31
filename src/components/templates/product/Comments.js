"use client"
import React from "react";
import { FaRegStar, FaStar, FaRegUserCircle } from "react-icons/fa";
import CommentForm from "../../templates/product/CommentForm";


function Comments({ product }) {
  const { productID, comments } = product;

  return (
    <div className="flex flex-col md:flex-row gap-x-4 lg:px-32 px-5 pt-24">
      <div className="w-full md:w-1/2 bg-white dark:bg-darker rounded-2xl p-4.5 sm:p-5 mt-8">
        {" "}
        {/* Modified className for mobile */}
        <div className="flex items-center justify-between mb-6 sm:mb-7">
          <div className="flex items-center gap-x-3 relative">
            <span className="absolute -left-6 sm:-left-[26px] block w-1.5 h-[34px] md:h-9.5 bg-red-500 rounded-r-sm"></span>
            <span className="font-danaDemiBold text-xl md:text-2xl">
              نظرات ({comments.length})
            </span>
          </div>
        </div>
        {/* <!-- Comment List --> */}
        <div className="comments_wrap space-y-4.5 sm:space-y-5">
          {/* <!-- Comments --> */}
          {comments.map((comment) => (
            <div
              key={comment._id}
              id="comment-54937"
              className="p-4.5 md:p-5 bg-gray-100 dark:bg-dark rounded-xl"
            >
              <div className="flex flex-col pb-4 mb-4 border-b border-b-neutral-200/60 dark:border-white/10">
                <div className="flex items-center gap-x-3.5">
                  <div className="w-12 h-12 border-b-neutral-200/60 dark:border-white/10 sm:flex-center border rounded-full">
                    <img
                      src="/image/home.png"
                      className="w-full flex object-cover rounded-full"
                      alt="img"
                    />
                  </div>
                  <div className="flex flex-row gap-x-2">
                    <span>{comment.username}</span>
                    <span className="font-danaLight text-sm opacity-70">
                      {new Date(comment.date).toLocaleDateString("fa-IR")}
                    </span>
                    <div className="flex flex-row gap-1 text-yellow-400">
                      {new Array(product.score).fill(0).map((item, index) => (
                        <FaStar key={index} />
                      ))}

                      {new Array(5 - product.score).fill(0).map((item, index) => (
                        <FaRegStar key={index} />
                      ))}
                    </div>
                  </div>
                </div>
                <div>
                  <p className="font-danaLight text-sm sm:text-base break-words">
                    {comment.body}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* <!-- Load more --> */}
        <div className=" mt-4.5 sm:mt-20">
          <button
            type="button"
            className="bg-gradient-to-r from-primary to-secondary border-2 border-primary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full mt-4"
          >
            مشاهده بیشتر
          </button>
        </div>
      </div>
      <CommentForm  productID={product._id}/>
    </div>
  );
}

export default Comments;
