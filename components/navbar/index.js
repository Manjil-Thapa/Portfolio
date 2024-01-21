const { default: Link } = require('next/link');

const Navbar = () => {
  return (
    <nav>
      <div>
        <p>
          <Link href='/'>Manjil</Link>
        </p>
      </div>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/projects'></Link>
        </li>
        <li>
          <Link href='/about'></Link>
        </li>
        <li>
          <Link href='/contact'>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
