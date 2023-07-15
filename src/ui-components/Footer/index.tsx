import React from 'react';
import styles from './footer.module.css';
import Link from 'next/link';
import Image from 'next/image';

const arr = ['FAQ', 'SHIPPING & RETURNS', 'SIZE GUIDE', 'STORE POLICY'];
const FooterNav: React.FC = () => (
  <div className={styles.nav}>
    {arr.map((value) => (
      <Link href="/" key={value + '1'}>
        <span>{value}</span>
      </Link>
    ))}
  </div>
);

const Footer: React.FC = () => (
  <footer className={styles.wrapper}>
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <div className={styles.socialMedia}>
          <Image
            src="/images/facebook_logo.png"
            alt="Facebook Logo"
            width={57}
            height={57}
          />
          <Image
            src="/images/instagram_logo.png"
            alt="Instagram Logo"
            width={57}
            height={57}
          />
          <Image
            src="/images/twitter_logo.png"
            alt="Twitter Logo"
            width={57}
            height={57}
          />
        </div>
        <FooterNav />
        <Image
          src="/images/payment_methods.png"
          alt="Payment methods"
          width={254}
          height={254}
        />
      </div>
      <p className={styles.trademark}>VOOL&#8482; 2020 ALL RIGHTS RESERVED</p>
    </div>
  </footer>
);

export default Footer;
