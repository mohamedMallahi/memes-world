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
      const q = query(collection(db, 'posts'));
      const querySnapshot = await getDocs(q);
      const postsList = querySnapshot.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPosts(postsList);
    } else {
      router.push('signup');
    }
  });

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
