import Link from 'next/link';

export default function MainNavigation() {
  return (
    <header>
      <div>Manjil Thapa</div>
      <nav>
        <ul>
          <Link href='/'>
            <li>About</li>
          </Link>
          <Link href='/'>
            <li>Projects</li>
          </Link>
          <Link href='/'>
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}
