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
  
          <tbody className="mb-4">
            {comments.map((comment, index) => (
              <tr
                className="odd:bg-white even:bg-gray-100 border-b"
                key={index}
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  {index + 1}
                </th>
                <td className="px-6 py-4">
                  {new Date(comment.date).toLocaleDateString("fa-IR")}
                </td>
                <td className="px-6 py-4">{comment.productID.name}</td>
                <td className="flex items-center justify-center  px-6 py-8">
                  {new Array(comment.score).fill(0).map((item, index) => (
                    <FaStar key={index} />
                  ))}
                  {new Array(5 - comment.score).fill(0).map((item, index) => (
                    <FaRegStar key={index} />
                  ))}
                </td>
                <td className="px-6 py-4">
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
    
  );
}
