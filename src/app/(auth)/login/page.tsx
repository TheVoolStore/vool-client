import React from 'react';
import Image from 'next/image';
import GoogleIcon from '@/../public/images/google-icon.png';
import { VoolInput, VoolPasswordInput } from '@/components/ui/Inputs';
import { VoolButton } from '@/components/ui/Buttons';

export default function Login() {
  return (
    <>
      <form className="mt-7 text-black/80 font-bold">
        <div className="space-y-5">
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <VoolInput placeholder="Email" type="email" required />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">Password</label>
            <VoolPasswordInput placeholder="Enter your password" required />
          </div>
        </div>
        <VoolButton text="Login" size="lg" className="py-3 mt-10" />
      </form>

      <div className="flex flex-col items-center mt-3 space-y-7">
        <p className="text-vool-orange text-sm">Forgot password?</p>
        <p className="text-xl">Or login with . . .</p>
        <div className="flex items-center gap-2 border border-black/40 px-2 py-1.5 cursor-pointer">
          <Image
            src={GoogleIcon}
            alt="Instagram Icon"
            height={25}
            style={{
              height: '100%',
            }}
          />
          <p className="text-lg">Google</p>
        </div>
      </div>
    </>
  );
}
