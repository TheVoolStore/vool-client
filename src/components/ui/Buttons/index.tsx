import React from 'react';

interface Props {
  text: string;
  size?: 'sm' | 'md' | 'lg';
  submit?: boolean;
  loading?: boolean;
}

export const VoolButton: React.FC<
  Props & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ text, submit, className, size = 'md', ...props }) => {
  {
    /*@todo add min heights and widths*/
  }
  const sizes = {
    sm: 'text-sm px-12 py-2.5',
    md: 'text-sm px-12 py-2.5',
    lg: 'w-full',
  };

  return (
    <button
      {...props}
      type={submit ? 'submit' : 'button'}
      className={`bg-vool-orange text-white rounded-lg font-bold ${
        sizes[size as keyof typeof sizes]
      } ${className}`}
    >
      {text}
    </button>
  );
};
