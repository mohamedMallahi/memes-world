import { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '../contexts/AuthContext';

export default function NewPost() {
  const [caption, setCaption] = useState('');
  const [image, setImage] = useState(null);
  const { user } = useAuth();
  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const submitPost = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', image);
    formData.append(caption, caption);
    console.log(image);
    const res = await fetch('/api/posts', {
      method: 'POST',
      body: formData,
    });
    const data = await res.json();

    console.log(data);
  };
  return (
    <div className="container">
      <Link href="/">{'< Back'}</Link>
      <h1 className="my">New Post</h1>
      <form onSubmit={submitPost}>
        <div className="my">
          <input onChange={handleChange} type="file" />
        </div>
        <div className="my">
          <textarea
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            type="text"
            placeholder="Caption"
          />
        </div>
        <button type="submit" className="btn">
          Share
        </button>
      </form>
    </div>
  );
}
