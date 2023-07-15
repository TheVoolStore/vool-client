import localFont from 'next/font/local';

export const montserrat = localFont({
  src: [
    {
      path: '../../public/fonts/montserrat-light.woff2',
      weight: '300',
    },
    {
      path: '../../public/fonts/montserrat-lightitalic.woff2',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../../public/fonts/montserrat-regular.woff2',
      weight: '400',
    },
    {
      path: '../../public/fonts/montserrat-italic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/montserrat-medium.woff2',
      weight: '500',
    },
    {
      path: '../../public/fonts/montserrat-mediumitalic.woff2',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../../public/fonts/montserrat-semibold.woff2',
      weight: '600',
    },
    {
      path: '../../public/fonts/montserrat-semibolditalic.woff2',
      weight: '600',
      style: 'italic',
    },
    {
      path: '../../public/fonts/montserrat-bold.woff2',
      weight: '700',
    },
    {
      path: '../../public/fonts/montserrat-bolditalic.woff2',
      weight: '700',
      style: 'italic',
    },
  ],
  fallback: ['sans-serif'],
  variable: '--primary-font',
});
