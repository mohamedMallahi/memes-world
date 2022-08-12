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
      <img src={post.imageUrl} alt="" />
      <div className="post-actions">
        <div>
          <li onClick={like} className={isLiked && 'liked'}>
            <i className="fa-solid fa-heart"></i>0 likes
          </li>
          <li>
            <i className="fa-solid fa-comment"></i>0 comments
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
