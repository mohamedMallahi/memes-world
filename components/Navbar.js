import React from 'react';
import Link from 'next/link';
import { useAuth } from '../contexts/AuthContext';

const Navbar = () => {
  const { user } = useAuth();
  console.log(1, user);
  return (
    <nav className="navbar">
      <Link href="/">
        <a className="navbar-brand">Memes-World</a>
      </Link>
      <ul className="navbar-menu">
        <li>
          <Link href="/">
            <i className="fa-solid fa-house"></i>
          </Link>
        </li>
        <li>
          <Link href="/">
            <i className="fa-solid fa-magnifying-glass"></i>
          </Link>
        </li>
        <li>
          <Link href="/">
            <i className="fa-solid fa-film"></i>
          </Link>
        </li>
        <li>
          <Link href="/new-post">
            <i class="fa-solid fa-square-plus"></i>
          </Link>
        </li>
      </ul>
      <Link href="/">
        <a className="navbar-account">
          <img src={user.photoURL ? user.photoURL : ''} alt="Elena Doe" />
        </a>
      </Link>
    </nav>
  );
};

export default Navbar;
