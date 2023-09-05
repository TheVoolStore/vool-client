'use client';
import Link from 'next/link';
import React, { useState } from 'react';

import OpenEyeIcon from '@/../public/images/open-eye.svg';
import CloseEyeIcon from '@/../public/images/close-eye.svg';

const Register = () => {
  const [toggleEye, setToggleEye] = useState(false);

  const toggleEyeHandler = () => {
    setToggleEye((prev) => !prev);
  };

  return (
    <>
      <div className="my-7 md:mt-2  md:mb-14 h-[calc(100vh-16.5rem)] md:h-[calc(100vh-19rem)] bg-vool-light-orange md:bg-white">
        <div className="w-[90%] md:w-[80%] md:px-10 lg:w-[60%] mx-auto md:bg-vool-light-orange">
          <div className="flex justify-around items-center text-xl pt-6  border-b-2 border-vool-orange text-gray-600">
            <Link href="/login" className="w-full">
              <button className="w-full">Login</button>
            </Link>

            <div className="text-3xl text-vool-orange">|</div>
            <button className="w-full">
              <p className="border-b-4 border-vool-orange inline text-vool-orange">
                Sign Up
              </p>
            </button>
          </div>

          <form className="mt-7 space-y-5 pb-5">
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
              <label htmlFor="email" className="text-lg">
                First Name
              </label>
              <input
                type="text"
                required
                placeholder="Email"
                className="h-12 rounded-md border-b-2 border-vool-orange px-2 outline-white"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-lg">
                Last Name
              </label>
              <input
                type="text"
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
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="password" className="text-lg">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={toggleEye ? 'text' : 'password'}
                  required
                  placeholder="Confirm your password"
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
        </div>
      </div>
    </>
  );
};

export default Register;
