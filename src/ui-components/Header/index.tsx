import React from 'react';
import styles from './header.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Header: React.FC = () => (
  <header className={styles.headerWrapper}>
    <div className={styles.headerContainer}>
      <Image
        src="/images/vool_logo.png"
        alt="Vool logo"
        width={200}
        height={63}
      />
      <nav>
        <Link href="/">HOME</Link>
        <Link href="/">SHOP</Link>
        <Link href="/">BRANDS</Link>
        <Link href="/">BLOG</Link>
        <Link href="/">ABOUT</Link>
        <Link href="/">CONTACT</Link>
      </nav>
      <p>checkout and more</p>
    </div>
  </header>
);

export default Header;
