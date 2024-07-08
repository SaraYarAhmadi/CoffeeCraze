import React, { useState } from 'react'
import Sms from './Sms'

function Login({ showRegisterForm }: any) {
  const [isLoginWithOtp, setIsLoginWithOtp] = useState(false);
  const hideOtpForm = () => setIsLoginWithOtp(false);
  return (
    <>
      {!isLoginWithOtp ? (
        <>
          <div className="w-[350px] md:w-[450px] h-[550px] flex flex-col justify-center p-8 md:p-14 text-base">
            <div className="py-2">
              <input
                type="text"
                className="w-full p-2 border border-gray-400 rounded-md placeholder:text-gray-500"
                name="email"
                id="email"
                placeholder="ایمیل/شماره موبایل"
              />
            </div>
            <div className="py-2">
              <input
                type="password"
                name="pass"
                id="pass"
                className="w-full p-2 border border-gray-400 rounded-md placeholder:text-gray-500"
                placeholder="رمزعبور"
              />
            </div>
            <div className="flex items-center w-full py-3">
              <input type="checkbox" name="ch" id="ch" />
              <p className="text-sm mb-1 mr-1">مرا به یاد داشته باش</p>
            </div>
            <button
              className="w-full bg-black text-white p-2 rounded-lg mb-2 hover:bg-white hover:text-black hover:border hover:border-gray-300 bg-gradient-to-r from-primary to-secondary border-2 border-primary py-2 px-4">
              ورود
            </button>
            <div className="flex items-center justify-center w-full py-1">
              <p className="text-sm mb-1 mr-1">  رمز عبور را فراموش کرده اید؟ </p>
            </div>
            <button
              className="w-full bg-black text-white p-2 rounded-lg mb-2 hover:bg-white hover:text-black hover:border hover:border-gray-300 bg-gradient-to-r from-primary to-secondary border-2 border-primary py-2 px-4"
              onClick={() => setIsLoginWithOtp(true)}
            >
              ورود با کد یکبار مصرف
            </button>
            <div className="text-center text-gray-400">
              <button
                className="w-full border border-gray-300 text-md p-2 mt-3 rounded-lg mb-6 text-black hover:bg-black hover:text-white hover:border hover:border-gray-300 hover:scale-105 duration-200 py-2  transition-all" onClick={showRegisterForm}
              >
                ثبت نام
              </button>
            </div>
          </div>
        </>
      ) : (
        <Sms hideOtpForm={hideOtpForm} />
      )
      }
    </>

  )
}

export default Login