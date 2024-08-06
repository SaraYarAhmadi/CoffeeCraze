"use client";
import React from "react";
import swal from "sweetalert";
import { showSwal } from "@/utils/helpers";
import { FaRegStar, FaStar } from "react-icons/fa";

export default function DataTable({ comments, title }) {
  const showCommentBody = (commentBody) => {
    swal({
      title: commentBody,
      icon: undefined,
      buttons: "اوکی",
    });
  };

  return (
    <div>
      <h1 className="flex justify-start mb-16 mr-10 text-xl font-bold border-b-2 border-gray-700 pb-2 w-[90%]">
        <span> جزئیات اکانت</span>
      </h1>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg w-[90%] mx-auto">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead class="text-xs text-gray-700 uppercase shadow-lg">
            <tr>
              <th scope="col" class="px-6 py-3">
                شناسه
              </th>
              <th scope="col" class="px-6 py-3">
                تاریخ
              </th>
              <th scope="col" class="px-6 py-3">
                محصول
              </th>
              <th scope="col" class="px-6 py-3">
                امتیاز
              </th>
              <th scope="col" class="px-6 py-3">
                مشاهده
              </th>
            </tr>
          </thead>
          <tbody>
            {comments.map((comment, index) => (
              <tr class="odd:bg-white even:bg-gray-100 border-b" key={index}>
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  {index + 1}
                </th>
                <td class="px-6 py-4">
                  {new Date(comment.date).toLocaleDateString("fa-IR")}
                </td>
                <td class="px-6 py-4">
                  {new Array(score).fill(0).map((item, index) => (
                    <FaStar key={index} />
                  ))}
                  {new Array(5 - score).fill(0).map((item, index) => (
                    <FaRegStar key={index} />
                  ))}
                </td>
                <td class="px-6 py-4">$2999</td>
                <td class="px-6 py-4">
                  <button
                    className="bg-gradient-to-r from-primary to-secondary border-2 border-primary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full"
                    onClick={() => showCommentBody(comment.body)}
                  >
                    مشاهده
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
