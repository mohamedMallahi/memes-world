import { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '../contexts/AuthContext';

export default function NewPost() {
  const [caption, setCaption] = useState('');
  const [image, setImage] = useState('');
  const [filename, setFilename] = useState('');
  const { user } = useAuth();

  const handleImage = (e) => {
    let file = e.target.files[0];
    console.log(file.name);
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      setFilename(file.name);
      setImage(e.target.result);
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  };

  const submitPost = async (e) => {
    e.preventDefault();
    // console.log(image);
    const res = await fetch('/api/posts/create', {
      method: 'POST',
      body: {
        caption,
        imageUrl: image,
        filename,
      },
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
          <input onChange={handleImage} type="file" />
        </div>
        <div className="my">
          {image && <img src={image} style={{ width: '100%' }} />}
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
