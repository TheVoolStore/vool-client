import React, { ReactNode } from 'react';
import Image from 'next/image';
import WishlistIcon from '@/../public/images/wishlist-icon.svg';
import ProductImage from '@/../public/images/product-example.jpg';
import Add from '@/../public/images/add.svg';

export const ProductCard: React.FC = () => (
  <div className="w-72 h-72">
    <div className="w-72 h-64 overflow-hidden relative shadow-lg group">
      <Image
        alt="Mountains"
        src={ProductImage}
        fill
        style={{
          objectFit: 'cover',
        }}
      />
      <button className="absolute bg-white bg-opacity-30 rounded-full p-1.5 bottom-3 center-x-absolute w-fit hidden group-hover:inline-block">
        <Add className="scale-150" />
      </button>
      <button className="absolute right-4 top-3.5 hidden group-hover:inline-block">
        <WishlistIcon stroke="#F85E00" className="scale-75" />
      </button>
    </div>
    <div className="flex md:justify-between mt-1 flex-col md:flex-row">
      <p className="font-bold">Vintage Shirt</p>
      <p className="font-black text-vool-orange justify-self-end">N7000</p>
    </div>
  </div>
);

export const OutlinedCard: React.FC<{
  children?: ReactNode;
  className?: string;
}> = ({ children, className }) => (
  <div
    className={`h-96 w-[40rem] relative outline-vool-orange outline overflow-hidden ${className}`}
  >
    <Image
      alt="Mountains"
      src={ProductImage}
      fill
      style={{
        objectFit: 'cover',
      }}
    />
    {children}
  </div>
);
