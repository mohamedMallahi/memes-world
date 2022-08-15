import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../../config/firebase';

export default async (req, res) => {
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
