import DataTable from "../../../components/templates/p-user/comments/DataTable";
import Layout from "@/components/layouts/UserPanelLayout";
import React from "react";
import connectToDB from "@/configs/db";
import Commentmodel from "@/models/Comment";
import { authUser } from "@/utils/serverHelpers";
import Link from "next/link";
import { BiCommentX } from "react-icons/bi";
const page = async () => {
  connectToDB();
  const user = await authUser();
  const comments = await Commentmodel.find(
    { user: user?._id },
    "-__v"
  ).populate("productID", "name");
  console.log(comments);

  return (
    <Layout>
      <main>
        <div>
          <h1 className="flex justify-start mb-16 mr-10 text-xl font-bold border-b-2 border-gray-700 pb-2 w-[90%]">
            <span> کامنت ها </span>
          </h1>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-[90%] mx-auto">
            {!!comments.length && (
              <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                <thead className="text-xs text-gray-700 uppercase shadow-lg">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      شناسه
                    </th>
                    <th scope="col" className="px-6 py-3">
                      تاریخ
                    </th>
                    <th scope="col" className="px-6 py-3">
                      محصول
                    </th>
                    <th scope="col" className="px-8 py-3">
                      امتیاز
                    </th>
                    <th scope="col" className="px-8 py-3">
                      مشاهده
                    </th>
                  </tr>
                </thead>
                <DataTable
                  comments={JSON.parse(JSON.stringify(comments))}
                  title="لیست کامنت‌ها"
                />
              </table>
            )}
          </div>
        </div>
        {comments.length === 0 && (
          <div className="relative my-20 text-center md:mt-3">
            <div className="w-full flex items-center justify-center md:my-4">
              <BiCommentX className="text-9xl text-gray-300" />
            </div>
            <p className="text-4xl mb-4">کامنتی یافت نشد</p>
            <span className="text-lg md:my-4">
              شما هنوز هیچ کامنتی در برای محصولات ثبت نکرده اید .
            </span>
            <p className="my-2">
              پس از خرید قهوه از ما لطفا نظر خود را با ما در میان بذارید
            </p>
            <div className="mt-9 md:mt-6">
              <Link
                className="bg-gradient-to-r from-brightColor to-brightColor shadow-[0_3px_10px_rgb(0,0,0,0.2)] px-6 py-2 border-2 border-white bg-[#FFDCAB] transition-all rounded-full"
                href="/"
              >
                بازگشت به فروشگاه
              </Link>
            </div>
          </div>
        )}
      </main>
    </Layout>
  );
};

export default page;
