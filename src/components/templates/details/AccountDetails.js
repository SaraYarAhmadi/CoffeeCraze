"use client";
import React, { useEffect } from "react";
import swal from "sweetalert";
import { useState } from "react";

function AccountDetails() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    const getUser = async () => {
      const res = await fetch("/api/auth/me");
      const data = await res.json();

      setName(data.name);
      setEmail(data.email);
      setPhone(data.phone);
    };
    getUser();
  }, []);

  const updateUser = async () => {
    // Validation (You)
    const userNewInfos = {
      name,
      email,
      phone,
    };

    console.log("userNewInfos", userNewInfos);
    const res = await fetch("/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userNewInfos),
    });
    console.log("resresresres", res);
    if (res.status === 200) {
      swal({
        title: "اطلاعات مورد نظر با موفقیت آپدیت شد",
        icon: "success",
        buttons: "فهمیدم",
      }).then(async (result) => {
        await fetch("/api/auth/signout", { method: "POST" });
        location.replace("/login-register");
      });
    }
  };

  return (
    <main className="mb-4">
      <div class="pb-4.5 border-b border-b-gray-200 dark:border-b-slate-500">
        <h1 className="flex justify-start mb-16 mr-10 text-xl font-bold border-b-2 border-gray-700 pb-2 w-[90%]">
          <span> جزئیات اکانت</span>
        </h1>
      </div>
      <div class="xl:col-span-2 bg-white dark:bg-gray-800 p-4.5 rounded-2xl w-[90%] mx-auto">
        <form id="edit-account-info" class="p-3.5 pt-8">
          <div className="grid grid-cols-2 gap-x-5 gap-y-6 my-10">
            <img
              src="https://secure.gravatar.com/avatar/817fc025272d1a7ac4e7459872c3e891?s=256&amp;d=mm&amp;r=g"
              class="w-32 md:w-44 h-32 md:h-44 rounded-full"
            />
            <div className="flex felx-col items-center justify-center gap-x-4">
              <button
                className="w-32 bg-black text-white rounded-lg hover:bg-white hover:text-black hover:border hover:border-gray-300 bg-gradient-to-r from-primary to-secondary border-2 border-primary py-2"
                onClick={() => setIsRegisterWithOtp(true)}
              >
                تغییر
              </button>
              <button
                className="w-32 bg-black text-white rounded-lg hover:bg-white hover:text-black hover:border hover:border-gray-300 bg-gradient-to-r from-primary to-secondary border-2 border-primary py-2"
                onClick={() => setIsRegisterWithOtp(true)}
              >
                حذف
              </button>
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-6">
            <div>
              <label for="username" class="text-zinc-700 text-start mb-1">
                نام کاربری
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-400 rounded-md placeholder:text-gray-500"
                disabled=""
                id="username"
                placeholder="لطفا نام کاربری خود را وارد کنید"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div>
              <label for="phone" class="text-zinc-700 text-start mb-1">
                شماره موبایل
              </label>
              <input
                type="number"
                id="phone"
                className="w-full p-2 border border-gray-400 rounded-md placeholder:text-gray-500"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                placeholder="لطفا شماره تماس خود را وارد کنید"
                disabled=""
              />
            </div>
            <div>
              <label for="first_name" class="text-zinc-700 text-start">
                ایمیل
              </label>
              <div className="py-2">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="لطفا ایمیل خود را وارد کنید"
                  className="w-full p-2 border border-gray-400 rounded-md placeholder:text-gray-500"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-5 gap-y-6 my-10">
            <div>
              <label for="email" class="text-zinc-700 text-start">
                پسورد
              </label>
              <div className="py-2">
                <input
                  type="password"
                  name="pass"
                  id="pass"
                  className="w-full p-2 border border-gray-400 rounded-md placeholder:text-gray-500"
                  placeholder="رمزعبور"
                />
              </div>
            </div>
            <button
              className="md:w-48 bg-black text-white rounded-lg mt-8 mb-2 hover:bg-white hover:text-black hover:border hover:border-gray-300 bg-gradient-to-r from-primary to-secondary border-2 border-primary md:px-4"
              onClick={() => setIsRegisterWithOtp(true)}
            >
              تغییر رمز عبور
            </button>
          </div>

          <button
            type="submit"
            onClick={updateUser}
            class="w-full bg-black text-white p-2 rounded-lg my-2 hover:bg-white hover:text-black hover:border hover:border-gray-300 bg-gradient-to-r from-primary to-secondary border-2 border-primary py-2 px-4"
          >
            ثبت اطلاعات
          </button>
        </form>
      </div>
    </main>
  );
}

export default AccountDetails;
