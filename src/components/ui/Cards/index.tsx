import React from 'react';
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
  children?: React.ReactNode;
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

export const AltCard: React.FC = () => (
  <div className="flex">
    <div className="h-72 w-[30rem] overflow-hidden relative shadow-lg">
      <Image
        alt="Mountains"
        src={ProductImage}
        fill
        style={{
          objectFit: 'cover',
        }}
      />
      <div className="absolute top-3.5 flex justify-between pr-3 items-center w-full">
        <div className="bg-vool-orange text-white text-xs py-2 px-2 font-bold rounded-tr-lg rounded-bl-lg">
          25% Off
        </div>
        <button>
          <WishlistIcon stroke="#F85E00" className="scale-75" />
        </button>
      </div>
      <div className="absolute bottom-6 w-full grid grid-cols-3 h-fit items-center px-3">
        <p className="text-sm font-bold bg-white bg-opacity-30 h-fit px-0.5 w-fit">
          Vintage Shirt
        </p>
        <button className="bg-white bg-opacity-30 rounded-full p-1.5 w-fit justify-self-center">
          <Add className="scale-150" />
        </button>
        <span className="bg-white bg-opacity-30 p-0.5 w-fit h-fit justify-self-end absolute self-end leading-none right-3 bottom-1">
          <p className="line-through opacity-80 pb-1">N16,000</p>
          <p className="text-vool-orange font-black">N12,000</p>
        </span>
      </div>
    </div>
  </div>
);
