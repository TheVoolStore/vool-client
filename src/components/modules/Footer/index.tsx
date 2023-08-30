import React from 'react';
import Image from 'next/image';
import InstagramIcon from '@/../public/images/instagram-icon.png';
import TwitterIcon from '@/../public/images/twitter-icon.png';
import TiktokIcon from '@/../public/images/tiktok-icon.png';

const Footer: React.FC = () => (
  <footer>
    <div className="bg-vool-light-orange h-24 md:h-32 flex justify-center items-center">
      <div className="flex flex-row w-fit gap-x-16">
        <Image
          src={InstagramIcon}
          alt="Instagram Icon"
          height={25}
          style={{
            height: '100%',
          }}
        />
        <Image
          src={TwitterIcon}
          alt="Twitter Icon"
          height={25}
          style={{
            height: '100%',
          }}
        />
        <Image
          src={TiktokIcon}
          alt="Tiktok Icon"
          height={25}
          style={{
            height: '100%',
          }}
        />
      </div>
    </div>
    <div className="bg-vool-orange h-11 font-bold text-lg flex items-center">
      <p className="ml-6 md:ml-32 text-white">2023 Vool</p>
    </div>
  </footer>
);

export default Footer;
