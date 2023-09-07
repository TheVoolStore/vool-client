import React from 'react';
import { VoolInput } from '@/components/ui/Inputs';
import { VoolButton } from '@/components/ui/Buttons';

export default function forgotPassword() {
  return (
    <>
      <div className="mt-8 text-center md:px-6">
        <h2 className="mb-2">Forgot your password</h2>
        <p>
          {
            "Type in your email address below and we'll send you an email with a link to reset your password"
          }
        </p>
      </div>

      <form className="mt-5 space-y-7 pb-10 font-bold">
        <div className="flex flex-col pb-4">
          <label htmlFor="email">Email Address</label>
          <VoolInput type="email" required />
        </div>
        <VoolButton text="Send link" size="lg" className="py-3" />
      </form>
    </>
  );
}
