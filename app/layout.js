import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Manjil Thapa | Frontend Developer',
  description: 'Welcome to my landing page',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body
        className={`${inter.className} bg-gradient-to-b from-[#2e2065] to-[#0F172A] text-white`}
      >
        <main className='relative overflow-hidden '>{children}</main>
      </body>
    </html>
  );
}
