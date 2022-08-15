import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Heart, MessageCircle, Share } from 'react-feather';

const PostCard = ({ post }) => {
  const [isLiked, setIsLiked] = useState(false);
  const { user } = useAuth();

  const like = async () => {
    setIsLiked((prev) => !prev);
    
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
            <MessageCircle />
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
