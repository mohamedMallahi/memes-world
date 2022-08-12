import { useState } from 'react';
import Link from 'next/link';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useAuth } from '../contexts/AuthContext';
import { collection, addDoc } from 'firebase/firestore';
import { db, storage } from '../config/firebase';

export default function NewPost() {
  const [caption, setCaption] = useState('');
  const [image, setImage] = useState(null);
  const { user } = useAuth();
  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const sharePost = async (e) => {
    e.preventDefault();
    console.log(user);

    const storageRef = ref(storage, `images/${image.name}`);
    const snapshot = await uploadBytes(storageRef, image);
    console.log('Uploaded an image!');
    const imageUrl = await getDownloadURL(storageRef);
    await addDoc(collection(db, 'posts'), {
      caption: caption,
      imageUrl: imageUrl,
    });
  };
  return (
    <div className="container">
      <Link href="/">{'< Back'}</Link>
      <h1 className="my">New Post</h1>
      <form onSubmit={sharePost}>
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
