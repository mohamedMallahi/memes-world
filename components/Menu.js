import React from 'react';
import Link from 'next/link';

const Menu = () => {
  return (
    <div className="menu">
      <ul className="tabs">
        <li>
          <Link href="/">Feed</Link>
        </li>
        <li className="active-link">
          <Link href="/">Following</Link>
        </li>
        <li>
          <Link href="/">Bookmarked</Link>
        </li>
      </ul>
      <form className="search-form">
        <input type="text" placeholder="Search" />
        <button>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
    </div>
  );
};

export default Menu;
