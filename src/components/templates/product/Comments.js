"use client";
import React from "react";
import { FaRegStar, FaStar, FaRegUserCircle } from "react-icons/fa";
import CommentForm from "../../templates/product/CommentForm";
import Link from "next/link";
import { BiCommentX } from "react-icons/bi";

function Comments({ product }) {
  const { productID, comments } = product;

  return (
    <div className="flex flex-col md:flex-row gap-x-4 lg:px-32 px-5 pt-12">
      <div className="w-full md:w-1/2 bg-white dark:bg-darker rounded-2xl p-4.5 sm:p-5 mt-8">
        {" "}
        {/* Modified className for mobile */}
        <div className="flex items-center justify-between m-4 sm:mb-2">
          <div className="flex items-center gap-x-3 relative">
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
                      src="/image/avatar2.png"
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

                      {new Array(5 - product.score)
                        .fill(0)
                        .map((item, index) => (
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
          {comments.length === 0 && (
            <div className="relative my-20 text-center md:mt-3">
              <div className="flex justify-center mb-2">
                <BiCommentX className="text-5xl text-gray-300 text-center" />
              </div>
              

              <span className="text-lg md:my-4">
                 هنوز هیچ کامنتی  برای این محصولات ثبت نشده!
              </span>
              <p className="text-sm my-2">
                پس از خرید قهوه از ما لطفا نظر خود را با ما در میان بذارید
              </p>
              <div className="mt-9 md:mt-8">
                <Link
                  className="bg-gradient-to-r from-brightColor to-brightColor shadow-[0_3px_10px_rgb(0,0,0,0.2)] px-6 py-2 border-2 border-white bg-[#FFDCAB] transition-all rounded-full"
                  href="/gallery"
                >
                  بازگشت به فروشگاه
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
      <CommentForm productID={product._id} />
    </div>
  );
}

export default Comments;
