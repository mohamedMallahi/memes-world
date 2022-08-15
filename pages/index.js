import React, { useState, useEffect } from 'react';
// import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import Menu from '../components/Menu';
import PostCard from '../components/PostCard';
import { useAuth } from '../contexts/AuthContext';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const { user } = useAuth();
  const router = useRouter();

  useEffect(async () => {
    if (user) {
      console.log('Authenticated Successfully !');
      const res = await fetch('/api/posts');
      const data = await res.json();
      setPosts(data);
      console.log('api', data);
    } else {
      // router.push('signup');
    }
  }, [user]);

  return (
    <>
      <Navbar />
      <main>
        <Menu />

        <div className="posts">
          {posts.map((post, index) => (
            <PostCard key={index} post={post} />
          ))}
        </div>
      </main>
    </>
  );
}
