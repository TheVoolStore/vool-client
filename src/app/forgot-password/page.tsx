import React from 'react';

const forgotPassword = () => {
  return (
    <>
      <div className="my-7 md:mt-2  md:mb-14 h-[calc(100vh-16.5rem)] md:h-[calc(100vh-19rem)] bg-[#EEE7DF] md:bg-white">
        <div className="w-[90%] md:w-[80%] md:px-10 lg:w-[60%] mx-auto md:bg-[#EEE7DF]">
          <div className="flex justify-around items-center text-xl pt-6 border-b-2 border-vool-orange text-gray-600">
            <button className="w-full">Login</button>

            <div className="text-3xl text-vool-orange">|</div>
            <button className="w-full">Sign Up</button>
          </div>

          <div className="mt-10 text-center">
            <h2>Forgot your password</h2>
            <p>
              {
                "Type in your email address below and we'll send you an email with a link to reset your password"
              }
            </p>
          </div>

          <form className="mt-7 space-y-7 pb-28">
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
            <button className="bg-vool-orange py-3 rounded-md w-full text-white font-bold text-lg">
              Send link
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default forgotPassword;
