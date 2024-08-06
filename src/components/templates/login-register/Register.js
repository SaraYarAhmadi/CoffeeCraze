"use client";
import React, { useState } from "react";
import Sms from "./Sms";
import { valiadteEmail, valiadtePassword, valiadtePhone } from "@/utils/auth";
import showSwal from "../../../utils/helpers";

function Register({ showloginForm }) {
  const [isRegisterWithPass, setIsRegisterWithPass] = useState(false);
  const [isRegisterWithOtp, setIsRegisterWithOtp] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const hideOtpForm = () => setIsRegisterWithOtp(false);
  const signUp = async () => {
    if (!name.trim()) {
      return showSwal("نام را وارد بکنید", "error", "تلاش مجدد");
    }

    const isValidPhone = valiadtePhone(phone);
    if (!isValidPhone) {
      return showSwal("شماره تماس وارد شده معتبر نیست", "error", "تلاش مجدد ");
    }

    if (email) {
      const isValidEmail = valiadteEmail(email);
      if (!isValidEmail) {
        return showSwal("ایمیل وارد شده معتبر نیست", "error", "تلاش مجدد ");
      }
    }

    const isValidPassword = valiadtePassword(password);
    if (!isValidPassword) {
      return showSwal("پسورد وارد شده قابل حدس هست", "error", "تلاش مجدد ");
    }

    const user = { name, phone, email, password };

    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (res.status === 201) {
      showSwal("ثبت نام با موفقیت انجام شد", "success", "ورود به پنل کاربری");
    } else if (res.status === 422) {
      showSwal("کاربری با این اطلاعات از قبل وجود دارد", "error", "تلاش مجدد");
    }
  };
  return (
    <>
      {!isRegisterWithOtp ? (
        <>
          <div className="w-[350px] md:w-[450px] h-[550px] flex flex-col justify-center p-8 md:p-14 text-base">
            <div className="py-2">
              <input
                type="text"
                className="w-full p-2 border border-gray-400 rounded-md placeholder:text-gray-500"
                name="email"
                id="email"
                placeholder="نام"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div className="py-2">
              <input
                type="text"
                name="phone"
                id="phone"
                className="w-full p-2 border border-gray-400 rounded-md placeholder:text-gray-500"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                placeholder="شماره موبایل"
              />
            </div>
            <div className="py-2">
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="w-full p-2 border border-gray-400 rounded-md placeholder:text-gray-500"
                placeholder="ایمیل (دلخواه)"
              />
            </div>
            {isRegisterWithPass && (
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
            )}
            <button
              className="w-full bg-black text-white p-2 rounded-lg my-2 hover:bg-white hover:text-black hover:border hover:border-gray-300 bg-gradient-to-r from-primary to-secondary border-2 border-primary py-2 px-4"
              onClick={() => setIsRegisterWithOtp(true)}
            >
              ثبت نام با کد تایید
            </button>
            <button
              className="w-full bg-black text-white p-2 rounded-lg my-2 hover:bg-white hover:text-black hover:border hover:border-gray-300 bg-gradient-to-r from-primary to-secondary border-2 border-primary py-2 px-4"
              onClick={() => {
                if (isRegisterWithPass) {
                  signUp();
                } else {
                  setIsRegisterWithPass(true);
                }
              }}
            >
              ثبت نام با رمز عبور
            </button>
            <div className="text-center text-gray-400">
              <button
                className="w-full border border-gray-300 text-md p-2 mt-3 rounded-lg mb-6 text-black hover:bg-black hover:text-white hover:border hover:border-gray-300 hover:scale-105 duration-200 py-2 transition-all"
                onClick={showloginForm}
              >
                برگشت به ورود
              </button>
            </div>
          </div>
        </>
      ) : (
        <Sms hideOtpForm={hideOtpForm} />
      )}
    </>
  );
}

export default Register;
