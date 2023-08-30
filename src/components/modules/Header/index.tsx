import React from 'react';
import Image from 'next/image';
import HamburgerMenu from '@/../public/images/hamburger-menu.svg';
import ProfileIcon from '@/../public/images/profile-icon.svg';
import WishlistIcon from '@/../public/images/wishlist-icon.svg';
import CartIcon from '@/../public/images/cart-icon.svg';
import SearchIcon from '@/../public/images/search-icon.svg';
import Searchbar from '@/../public/images/searchbar.svg?url';

const Header: React.FC = () => (
  <header>
    <div className="px-5 md:px-16 h-16 md:grid md:grid-cols-3 items-center flex">
      <span>
        <HamburgerMenu />
      </span>
      <div className="font-bold text-4xl flex items-center md:justify-center max-md:ml-8">
        <h1>VOOL</h1>
      </div>
      <div className="flex flex-row gap-x-6 items-center max-md:absolute right-0 justify-end">
        <div className="flex gap-x-2.5 md:gap-x-3.5">
          <SearchIcon className="md:hidden scale-90" />
          <ProfileIcon className="scale-90" />
          <WishlistIcon className="scale-90" strokeOpacity="0.7" />
          <CartIcon className="scale-90" />
        </div>
        <div>
          {/* @todo replace to a proper searchbar */}
          <Image
            src={Searchbar}
            alt="searchbar"
            height={30}
            className="hidden md:block"
            style={{
              height: '100%',
            }}
          />
        </div>
      </div>
    </div>
  </header>
);

export default Header;
