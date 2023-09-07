import React from 'react';
import { VoolPasswordInput } from '@/components/ui/Inputs';
import { VoolButton } from '@/components/ui/Buttons';

export default function ResetPassword() {
  return (
    <>
      <div className="mt-8 text-center">
        <h2>Reset your password</h2>
      </div>

      <form className="mt-7 space-y-7 font-bold pb-10">
        <div className="flex flex-col">
          <div className="flex justify-between items-center">
            <label htmlFor="password">Password</label>
            <span className="text-black/70 text-sm">
              Must be at least 8 characters long
            </span>
          </div>
          <VoolPasswordInput placeholder="Password" required />
        </div>
        <div className="flex flex-col pb-6">
          <div className="flex justify-between items-center">
            <label htmlFor="password">Confirm Password</label>
            <span className="text-black/70 text-sm">
              Must be at least 8 characters long
            </span>
          </div>
          <VoolPasswordInput placeholder="Confirm password" required />
        </div>
        <VoolButton text="Send link" size="lg" className="py-3" />
      </form>
    </>
  );
}
