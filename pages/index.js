import React, { useEffect } from 'react';
// import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import Menu from '../components/Menu';
import PostCard from '../components/PostCard';
import { useAuth } from '../contexts/AuthContext';

const DUMMY_DB = [
  {
    image:
      'https://images.pexels.com/photos/4490130/pexels-photo-4490130.jpeg?auto=compress&cs=tinysrgb&w=400',
    caption: 'Post Number One',
    stats: {
      likes: 2,
      comments: ['Hello'],
    },
  },
  {
    image:
      'https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400',
    caption: 'Post Number Two',
    stats: {
      likes: 6,
      comments: ['Hello', 'What', 'StandUp'],
    },
  },
  {
    image:
      'https://images.pexels.com/photos/624015/pexels-photo-624015.jpeg?auto=compress&cs=tinysrgb&w=400',
    caption: 'Post Number Three',
    stats: {
      likes: 426,
      comments: ['Hello', 'What', 'StandUp', 'H', 'hh'],
    },
  },
];

export default function Home() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      console.log('Authenticated Successfully !');
    } else {
      // router.push('signup');
    }
  });

  return (
    <>
      <Navbar />
      <main>
        <Menu />

        <div className="posts">
          {DUMMY_DB.map((post) => (
            <PostCard post={post} />
          ))}
          {DUMMY_DB.map((post) => (
            <PostCard post={post} />
          ))}
          {DUMMY_DB.map((post) => (
            <PostCard post={post} />
          ))}
        </div>
      </main>
    </>
  );
}
