import { useState } from 'react';
import Image from 'next/image';
import ProfileImage from './ProfileImage';

const PostCard = ({ post }) => {
  const [isLiked, setIsLiked] = useState(false);

  const like = () => {
    setIsLiked((prev) => !prev);
  };

  return (
    <div onDoubleClick={like} className="post">
      <img src={post.image} alt="" />
      <div className="post-actions">
        <div>
          <li onClick={like} className={isLiked && 'liked'}>
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
  );
};

export default PostCard;
