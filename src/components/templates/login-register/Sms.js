import React from 'react'

function Sms({hideOtpForm}) {
    return (

        <div className="w-[350px] md:w-[450px] h-[550px] flex flex-col justify-center p-8 md:p-14 text-base">
            <span className="mb-3 text-xl font-bold"> کد تایید </span>
            <span className="text-sm mb-8">
            لطفاً کد تأیید ارسال شده را تایپ کنید
            </span>
            <div className="py-2">
                <input
                    type="text"
                    className="w-full p-2 border border-gray-400 rounded-md placeholder:text-gray-500"
                />
            </div>
            <button
                className="w-full bg-black text-white p-2 rounded-lg my-2 hover:bg-white hover:text-black hover:border hover:border-gray-300 bg-gradient-to-r from-primary to-secondary border-2 border-primary py-2 px-4">
                ثبت کد تایید
            </button>
            <div className="text-center text-gray-400">
                <button
                    className="w-full border border-gray-300 text-md p-2 mt-3 rounded-lg mb-6 text-black hover:bg-black hover:text-white hover:border hover:border-gray-300 hover:scale-105 duration-200 py-2 transition-all" onClick={hideOtpForm}>
                    برگشت به ورود
                </button>
                <span className="mb-8">
                    ارسال مجدد رمز عبور
                </span>
            </div>


        </div>
    )
}

export default Sms