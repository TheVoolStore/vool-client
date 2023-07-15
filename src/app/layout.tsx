import React from 'react';
import Header from '@/ui-components/header';
import './globals.css';
import Footer from '@/ui-components/footer';
import { montserrat } from '@/ui-components/fonts';

export const metadata = {
  title: 'VOOL',
  description: 'Ecommerce site',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
