'use client';
import React, { useState } from 'react';
import OpenEyeIcon from '@/../public/images/open-eye.svg';
import CloseEyeIcon from '@/../public/images/close-eye.svg';

interface Props {
  placeholder?: string;
  className?: string;
  name?: string;
  type: string;
  disabled?: boolean;
  required?: boolean;
}

export const VoolInput: React.FC<Props> = ({
  required = false,
  className,
  ...props
}) => (
  <input
    required={required}
    className={`h-12 rounded-md font-normal placeholder:font-thin border-b-2 border-vool-orange px-2 outline-white ${className}`}
    {...props}
  />
);

export const VoolPasswordInput: React.FC<Omit<Props, 'type'>> = ({
  required = false,
  className,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">
      <input
        type={showPassword ? 'text' : 'password'}
        required={required}
        className={`h-12 rounded-md font-normal placeholder:font-thin border-b-2 border-vool-orange px-2 outline-white w-full ${className}`}
        {...props}
      />
      {showPassword ? (
        <OpenEyeIcon
          className="w-6 h-6 absolute right-2 top-1/4 cursor-pointer"
          onClick={() => setShowPassword((prev) => !prev)}
        />
      ) : (
        <CloseEyeIcon
          className="w-6 h-6 absolute right-2 top-1/4 cursor-pointer"
          onClick={() => setShowPassword((prev) => !prev)}
        />
      )}
    </div>
  );
};
