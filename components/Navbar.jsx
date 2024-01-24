import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='flex justify-between max-container padding-container'>
      <Link href='/'>
        <Image src='Logo.svg' alt='logo' width={300} height={40} />
      </Link>
      <ul className='flex gap-2 items-center'>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/projects'>Projects</Link>
        </li>
        <li>
          <Link href='/about'>About</Link>
        </li>
        <li>
          <Link href='/contact'>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
