import { db } from '../../../config/firebase';
import { collection, getDocs, query } from 'firebase/firestore';

export default async (req, res) => {
  let newPosts = [];
  const q = query(collection(db, 'posts'));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    if (doc.data().user)
    newPosts.push({
      id: doc.id,
      ...doc.data(),
    });
  });
  res.status(200).json({ posts: newPosts });
};
