import React, { useState } from 'react'
import Sms from './Sms';

function Login({ showloginForm }: any) {
    const [isRegisterWithPass, setIsRegisterWithPass] = useState(false);
    const [isRegisterWithOtp, setIsRegisterWithOtp] = useState(false);

    const hideOtpForm = () => setIsRegisterWithOtp(false);
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
                            />
                        </div>
                        <div className="py-2">
                            <input
                                type="text"
                                name="phone"
                                id="phone"
                                className="w-full p-2 border border-gray-400 rounded-md placeholder:text-gray-500"
                                placeholder="شماره موبایل"
                            />
                        </div>
                        <div className="py-2">
                            <input
                                type="email"
                                name="email"
                                id="email"
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
                                    className="w-full p-2 border border-gray-400 rounded-md placeholder:text-gray-500"
                                    placeholder="رمزعبور"
                                />
                            </div>
                        )}
                        <button
                            className="w-full bg-black text-white p-2 rounded-lg my-2 hover:bg-white hover:text-black hover:border hover:border-gray-300 bg-gradient-to-r from-primary to-secondary border-2 border-primary py-2 px-4" onClick={() => setIsRegisterWithOtp(true)} >
                            ثبت نام با کد تایید
                        </button>
                        <button
                            className="w-full bg-black text-white p-2 rounded-lg my-2 hover:bg-white hover:text-black hover:border hover:border-gray-300 bg-gradient-to-r from-primary to-secondary border-2 border-primary py-2 px-4" onClick={() => setIsRegisterWithPass(true)}
                        >
                            ثبت نام با رمز عبور
                        </button>
                        <div className="text-center text-gray-400">
                            <button
                                className="w-full border border-gray-300 text-md p-2 mt-3 rounded-lg mb-6 text-black hover:bg-black hover:text-white hover:border hover:border-gray-300 hover:scale-105 duration-200 py-2 transition-all" onClick={showloginForm}>
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
};

export default Login