// Overlay.tsx
import React from 'react';
import Image from 'next/image';
import Placeholder1 from '@/../public/images/placeholder/Rectangle49.png';
import Close from '@/../public/images/close-icon.svg';

interface Props {
  text: string;
  isOpen: boolean;
  onClose: () => void;
}

export const Overlay: React.FC<Props> = ({ text, isOpen, onClose }) => {
  return (
    <div className={`overlay ${isOpen ? 'visible' : 'hidden'}`}>
      {/* <div className="fixed inset-0 backdrop-blur z-[1000]" onClick={onClose}> */}
      <div className="fixed inset-0 backdrop-blur z-[1000]">
        <div className="opacity-60 fixed inset-0 bg-gradient-to-r from-orange-300 via-orange-500 to-orange-50"></div>
        <div className="fixed inset-0 flex flex-col justify-center items-center">
          <div className="bg-[#eee7df] px-8 py-14 z-[101] w-full sm:w-[80%] md:w-[60%] lg:w-[35%] opacity-100 h-[75%]">
            <div className="flex items-center justify-between pb-7">
              <h3 className="text-black text-2xl">{text}</h3>
              <button
                className="text-[#000000] hover:text-[#777]"
                onClick={onClose}
              >
                <Close className="scale-100" />
              </button>
            </div>
            <div className="flex justify-between">
              <Image
                src={Placeholder1}
                alt="img-added-to-cart-placeholder"
                width={500}
                className="w-full h-full"
              />
              <div className="border-2 border-vool-orange text-vool-orange p-5 ml-4 rounded-xl text-center leading-[2.5] whitespace-nowrap h-100 w-fit">
                {/* N{price} */}
                <div className="font-extrabold">N16,000</div>
                <div className="text-black">
                  Colours: <span className="font-extrabold">Brown</span>
                </div>
                <div className="text-black">
                  Size: <span className="font-extrabold">Medium</span>
                </div>
              </div>
            </div>
            {/* <VoolButton text="See Shopping Cart" /> */}
            <button className="border-2 border-vool-orange text-vool-orange p-3 my-4 rounded-lg text-center w-[100%] font-extrabold">
              See Shopping Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
