import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Menu from '../components/Menu';
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
        <div className="posts">
          {DUMMY_DB.map((post) => (
            <div className="post">
              <img src={post.image} alt="" />
              <div className="post-actions">
                <div>
                  <li>
                    <i className="fa-solid fa-heart"></i>
                    {post.stats.likes} likes
                  </li>
                  <li>
                    <i className="fa-solid fa-comment"></i>
                    {post.stats.comments.length} comments
                  </li>
                </div>

                <li className="right">
                  <i className="fa-solid fa-share"></i>
                </li>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
