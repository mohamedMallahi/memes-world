import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Menu from '../components/Menu';
import { useAuth } from '../contexts/AuthContext';
// import styles from '../styles/Home.module.css';

export default function Home() {
  const { user } = useAuth();
  React.useEffect(() => {
    if (user) {
      console.log('Authenticated Successfully !');
    } else {
      console.log('Not Authenticated !');
    }
  });
  return (
    <>
      <Navbar />
      <main>
        <Menu />
        <div style={{ marginTop: '1rem' }}>
          <Link href="signup">
            <a className="btn" style={{ marginRight: '1rem' }}>
              {' '}
              Sign Up
            </a>
          </Link>
          <Link href="signin">
            <a className="btn"> Sign In</a>
          </Link>
        </div>
      </main>
    </>
  );
}
