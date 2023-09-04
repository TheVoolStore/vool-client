'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import GoogleIcon from '@/../public/images/google-icon.png';
import Link from 'next/link';

const Login = () => {
  const [toggleEye, setToggleEye] = useState(false);

  const toggleEyeHandler = () => {
    setToggleEye((prev) => !prev);
  };

  return (
    <>
      <div className="mt-16 h-[calc(100vh-17rem)] md:h-[calc(100vh-19rem)] bg-vool-light-orange md:bg-white">
        <div className="w-[90%] md:w-[80%] md:px-10 md:pb-7 lg:w-[60%] mx-auto md:bg-vool-light-orange">
          <div className="flex justify-around items-center text-xl pt-6 border-b-2 border-vool-orange text-gray-600">
            <button className="w-full">
              <p className="border-b-4 border-vool-orange inline text-vool-orange">
                Login
              </p>
            </button>

            <div className="text-3xl text-vool-orange">|</div>
            <Link href="/register" className="w-full">
              <button className="w-full">Sign Up</button>
            </Link>
          </div>

          <form className="mt-7 space-y-7">
            <div className="flex flex-col">
              <label htmlFor="email" className="text-lg">
                Email
              </label>
              <input
                type="email"
                required
                placeholder="Email"
                className="h-12 rounded-md border-b-2 border-vool-orange px-2 outline-white"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password" className="text-lg">
                Password
              </label>
              <div className="relative">
                <input
                  type={toggleEye ? 'text' : 'password'}
                  required
                  placeholder="Enter your password"
                  className="h-12 rounded-md border-b-2 border-vool-orange px-2 outline-white w-full"
                />
                {!toggleEye ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 absolute right-2 top-[25%] cursor-pointer"
                    onClick={toggleEyeHandler}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 absolute right-2 top-[25%] cursor-pointer"
                    onClick={toggleEyeHandler}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                )}
              </div>
            </div>

            <button className="bg-vool-orange py-3 rounded-md w-full text-white font-bold text-lg">
              Login
            </button>
          </form>

          <div className="flex flex-col justify-between items-center mt-6 space-y-7">
            <p className="text-vool-orange">Forgot your password?</p>
            <p>Or login with...</p>
            <div className="flex items-center gap-3 border border-gray-500 p-2 cursor-pointer">
              <Image
                src={GoogleIcon}
                alt="Instagram Icon"
                height={40}
                style={{
                  height: '100%',
                }}
                className="rounded-md"
              />
              <p className="font-semibold text-xl">Google</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
