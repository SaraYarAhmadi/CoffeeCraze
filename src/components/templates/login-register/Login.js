import React, { useState } from "react";
import showSwal from "../../../utils/helpers";
import { valiadteEmail, valiadtePassword } from "@/utils/auth";
import { useRouter } from "next/navigation";
import swal from "sweetalert";

function Login({ showRegisterForm }) {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [phoneOrEmail, setPhoneOrEmail] = useState("");

  const loginWithPassword = async () => {
    if (!phoneOrEmail) {
      return showSwal("لطفا شماره تماس یا ایمیل را وارد کنید", "error", "فهمیدم");
    }

    const isValidEmail = valiadteEmail(phoneOrEmail);
    if (!isValidEmail) {
      return showSwal("ایمیل وارد شده صحیح نیست", "error", "تلاش مجدد");
    }

    if (!password) {
      return showSwal("پسورد را وارد کنید", "error", "تلاش مجدد");
    }

    const isValidPassword = valiadtePassword(password);
    if (!isValidPassword) {
      return showSwal("پسورد به اندازه کافی قوی نیست", "error", "تلاش مجدد");
    }

    const user = { email: phoneOrEmail, password };

    const res = await fetch("/api/auth/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    const data = await res.json();

    if (res.status === 200) {
      swal({
        title: "با موفقیت لاگین شدین",
        icon: "success",
        buttons: "ورود به پنل کاربری",
      }).then(() => {
        router.replace("p-user");
      });
    } else if (res.status === 422 || res.status === 401) {
      showSwal("کاربری با این اطلاعات یافت نشد", "error", "تلاش مجدد");
    } else if (res.status === 419) {
      showSwal("ایمیل یا پسورد صحیح نیست", "error", "تلاش مجدد");
    }
  };
  return (
    <>
      <div className="w-[350px] md:w-[450px] h-[550px] flex flex-col justify-center p-8 md:p-14 text-base">
        <div className="py-2">
          <input
            type="text"
            className="w-full p-2 border border-gray-400 rounded-md placeholder:text-gray-500"
            name="email"
            id="email"
            value={phoneOrEmail}
            onChange={(event) => setPhoneOrEmail(event.target.value)}
            placeholder="ایمیل/شماره موبایل"
          />
        </div>
        <div className="py-2">
          <input
            type="password"
            name="pass"
            id="pass"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="w-full p-2 border border-gray-400 rounded-md placeholder:text-gray-500"
            placeholder="رمزعبور"
          />
        </div>
        <div className="flex items-center w-full py-3">
          <input type="checkbox" name="ch" id="ch" />
          <p className="text-sm mb-1 mr-1">مرا به یاد داشته باش</p>
        </div>
        <button
          className="w-full bg-black text-white p-2 rounded-lg mb-2 hover:bg-white hover:text-black hover:border hover:border-gray-300 bg-gradient-to-r from-primary to-secondary border-2 border-primary py-2 px-4"
          onClick={loginWithPassword}
        >
          ورود
        </button>
        <div className="flex items-center justify-center w-full py-1">
          <p className="text-sm mb-1 mr-1"> رمز عبور را فراموش کرده اید؟ </p>
        </div>

        <div className="text-center text-gray-400">
          <button
            className="w-full border border-gray-300 text-md p-2 mt-3 rounded-lg mb-6 text-black hover:bg-black hover:text-white hover:border hover:border-gray-300 hover:scale-105 duration-200 py-2  transition-all"
            onClick={showRegisterForm}
          >
            ثبت نام
          </button>
        </div>
      </div>
    </>
  );
}

export default Login;
