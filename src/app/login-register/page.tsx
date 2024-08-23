"use client"
import React, { useState } from 'react'
import Login from '@/components/templates/login-register/Login'
import Register from '@/components/templates/login-register/Register'
import { authTypes } from '@/utils/constant';
import Image from "next/image";

function Page() {
  const [authType, setAuthType] = useState(authTypes.LOGIN);

  const showRegisterForm = () => setAuthType(authTypes.REGISTER);
  const showloginForm = () => setAuthType(authTypes.LOGIN);
  return (
    <div className="flex items-center justify-center min-h-screen lg:px-32 px-5 bg-backgroundColor mx-auto text-center">
      <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
        {/* <!-- left side --> */}
        {authType === authTypes.LOGIN ? (
          <Login showRegisterForm={showRegisterForm} />
        ) : (
          <Register showloginForm={showloginForm} />
        )}
        {/* <Sms/> */}
        {/* right side */}
        <div className="relative">
          <Image
            src="/image/backgound.jpg"
            alt="img"
            className="w-[450px] h-full hidden rounded-r-2xl md:block object-cover"
            width={500}
            height={500}
          />
          {/* <!-- text on image  --> */}
          <div
            className="absolute hidden bottom-10 right-6 p-6 bg-white bg-opacity-30 backdrop-blur-sm rounded drop-shadow-lg md:block"
          >
            <span className="text-white text-xl"
            >برای ما، قهوه تنها یک نوشیدنی نیست<br />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page