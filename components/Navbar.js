import React from 'react';
import Link from 'next/link';
import { useAuth } from '../contexts/AuthContext';
import { Heart, Home, Search, Film, PlusSquare } from 'react-feather';

const Navbar = () => {
  const [isLiked, setIsLiked] = React.useState(false);

  const { user } = useAuth();
  console.log(1, user);
  return (
    <nav className="navbar">
      <li
        onClick={() => setIsLiked((prev) => !prev)}
        className={isLiked && 'liked'}
      >
        <Heart />
      </li>
      <Link href="/">
        <a className="navbar-brand">Memes-World</a>
      </Link>
      <ul className="navbar-menu">
        <li>
          <Link href="/">
            <Home />
          </Link>
        </li>
        <li>
          <Link href="/">
            <Search />
          </Link>
        </li>
        <li>
          <Link href="/">
            <Film />
          </Link>
        </li>
        <li>
          <Link href="/new-post">
            <PlusSquare />
          </Link>
        </li>
      </ul>
      <Link href="/">
        <a className="navbar-account">
          <img
            src={user ? user.photoURL : ''}
            alt={user ? user.displayName : ''}
          />
        </a>
      </Link>
    </nav>
  );
};

export default Navbar;
