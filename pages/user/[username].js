import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useAuth } from '../../contexts/AuthContext';
import Navbar from '../components/Navbar';
import PostCard from '../../components/PostCard';
import { collection, query, getDocs } from 'firebase/firestore';
import { db } from '../../config/firebase';
// import styles from '../styles/Home.module.css';

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
      router.push('/signup');
    }
  });

  return (
    <>
      <Navbar />
      <main>
        <div className="profile">
          <div className="profile-header">
            <div className="profile-header_left dflex">
              <div className="profile-header_image">
                <img
                  src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="John Doe"
                />
              </div>
              <div className="profile-header_text">
                <h2 style={{ margin: '0' }}>John Doe</h2>
                <span style={{ margin: '0' }}>1,688 Followers</span>
              </div>
            </div>
            <div className="profile-header_action">
              <button className="btn">Follow</button>
            </div>
          </div>
          <div className="profile-posts">
            {posts.map((post, index) => (
              <PostCard key={index} post={post} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
