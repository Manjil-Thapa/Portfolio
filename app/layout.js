import { Work_Sans, Sora, Jura } from 'next/font/google';
import './globals.css';

const sora = Sora({ subsets: ['latin'], variable: '--font-sora' });
const jura = Jura({ subsets: ['latin'], variable: '--font-jura' });
const work_sans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-work-sans',
});

export const metadata = {
  title: 'Manjil Thapa | Frontend Developer',
  description: 'Welcome to my landing page',
};

export default function RootLayout({ children }) {
  return (
    <html
      lang='en'
      className={`${sora.variable} ${jura.variable} ${work_sans.variable} scroll-smooth`}
    >
      <body className='bg-gradient-to-b bg-[#262a5c] text-white'>
        <main className='relative overflow-hidden '>{children}</main>
      </body>
    </html>
  );
}
