import { useState } from 'react';
import Image from 'next/image';
import ProfileImage from './ProfileImage';
import { useAuth } from '../contexts/AuthContext';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../config/firebase';

const PostCard = ({ post }) => {
  const [isLiked, setIsLiked] = useState(false);
  const { user } = useAuth();

  const like = async () => {
    setIsLiked((prev) => !prev);
    const docRef = doc(db, 'posts', post.id);
    try {
      await setDoc(docRef, {
        ...post,
        stats: {
          ...post.stats,
          likes: [...post.stats.likes, user.uid],
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const share = () => {
    if (navigator.share) {
      navigator
        .share({
          title: post.captio,
          url: 'https://memes-world-next.vercel.app/',
        })
        .then(() => {
          console.log('Thanks for sharing!');
        })
        .catch(console.error);
    } else {
      // fallback
    }
  };

  return (
    <div onDoubleClick={like} className="post">
      <img src={post.imageUrl} alt="" />
      <div className="post-actions">
        <div>
          <li onClick={like} className={isLiked && 'liked'}>
            <i className="fa-solid fa-heart"></i>
            {post.stats.likes.length} likes
          </li>
          <li>
            <i className="fa-solid fa-comment"></i>
            {post.stats.comments.length} comments
          </li>
        </div>

        <li onClick={share} className="right">
          <i className="fa-solid fa-share"></i>
        </li>
      </div>
    </div>
  );
};

export default PostCard;
