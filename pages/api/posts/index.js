import { db, storage } from '../../../config/firebase';
import { collection, getDocs, query, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export default async (req, res) => {
  let newPosts = [];
  const q = query(collection(db, 'posts'));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    newPosts.push({
      id: doc.id,
      ...doc.data(),
    });
  });
  res.status(200).json({ posts: newPosts });
};
