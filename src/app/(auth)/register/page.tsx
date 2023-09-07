import React from 'react';
import Image from 'next/image';
import GoogleIcon from '@/../public/images/google-icon.png';
import { VoolInput, VoolPasswordInput } from '@/components/ui/Inputs';
import { VoolButton } from '@/components/ui/Buttons';

export default function Register() {
  return (
    <>
      <form className="mt-7 text-black/80 font-bold">
        <div className="space-y-6">
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <VoolInput type="email" required placeholder="Email" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">First Name</label>
            <VoolInput type="text" required placeholder="First Name" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Last Name</label>
            <VoolInput type="text" required placeholder="Last Name" />
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between items-center">
              <label htmlFor="password">Password</label>
              <span className="text-black/70 text-sm">
                Must be at least 8 characters long
              </span>
            </div>
            <VoolPasswordInput placeholder="Password" required />
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between items-center">
              <label htmlFor="password">Confirm Password</label>
              <span className="text-black/70 text-sm">
                Must be at least 8 characters long
              </span>
            </div>
            <VoolPasswordInput placeholder="Confirm Password" required />
          </div>
        </div>
        <VoolButton text="Signup" size="lg" className="py-3 mt-10" />
      </form>

      <div className="flex flex-col items-center mt-10 space-y-7">
        <p className="text-xl">Or sign up with . . .</p>
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
