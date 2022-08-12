import React, { useState, useEffect } from 'react';
// import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import Menu from '../components/Menu';
import PostCard from '../components/PostCard';
import { useAuth } from '../contexts/AuthContext';
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from '../config/firebase';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const { user } = useAuth();
  const router = useRouter();

  useEffect(async () => {
    if (user) {
      console.log('Authenticated Successfully !');
      let newPosts;
      const q = query(collection(db, 'posts'));
      const querySnapshot = await getDocs(q);
      const postsList = querySnapshot.forEach((doc) => {
        newPosts.push({
          id: doc.id,
          ...doc.data(),
        });
      });
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
