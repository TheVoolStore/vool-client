'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const registerActive = pathname === '/register';
  const loginActive = pathname === '/login';

  return (
    <div className="pt-12 pb-48">
      <div className="lg:w-1/2 md:w-4/5 w-full md:px-10 mx-auto bg-vool-light-orange pt-4 pb-20 md:rounded-lg">
        <div className="flex justify-between items-center text-2xl text-black/50 border-b border-vool-orange/50">
          <Link href="/login" className="w-full text-center">
            <button
              className={`py-4 px-6 ${
                loginActive && 'border-b-2 border-vool-orange text-vool-orange'
              }`}
            >
              Login
            </button>
          </Link>
          <div className="bg-vool-orange/50 h-8 w-px" />
          <Link href="/register" className="w-full text-center">
            <button
              className={`py-4 px-6 ${
                registerActive &&
                'border-b-2 border-vool-orange text-vool-orange'
              }`}
            >
              Sign Up
            </button>
          </Link>
        </div>
        <div className="px-4 md:px-[10%] pt-4">{children}</div>
      </div>
    </div>
  );
}
