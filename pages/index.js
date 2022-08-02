import Head from 'next/head';
import Link from 'next/link';
// import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link href="signup">Sign Up</Link>
      <br />
      <Link href="user/johndoe">John Doe</Link>
    </div>
  );
}
