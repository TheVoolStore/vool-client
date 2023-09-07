import React from 'react';
import './globals.css';
import Header from '@/components/modules/Header';
import Footer from '@/components/modules/Footer';

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
    <html lang="en">
      <body>
        <Header />
        <div className="min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
