import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import { Heart, MessageCircle, Share } from 'react-feather';

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
            <Heart />
            {post.stats.likes.length} likes
          </li>
          <li>
            <MessageCercle />
            {post.stats.comments.length} comments
          </li>
        </div>

        <li onClick={share} className="right">
          <Share />
        </li>
      </div>
    </div>
  );
};

export default PostCard;
