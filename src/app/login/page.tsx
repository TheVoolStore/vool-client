'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import GoogleIcon from '@/../public/images/google-icon.png';
import Link from 'next/link';
import OpenEyeIcon from '@/../public/images/open-eye.svg';
import CloseEyeIcon from '@/../public/images/close-eye.svg';

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
                {toggleEye ? (
                  <OpenEyeIcon
                    className="w-6 h-6 absolute right-2 top-[25%] cursor-pointer"
                    onClick={toggleEyeHandler}
                  />
                ) : (
                  <CloseEyeIcon
                    className="w-6 h-6 absolute right-2 top-[25%] cursor-pointer"
                    onClick={toggleEyeHandler}
                  />
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
