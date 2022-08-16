import { db, storage } from '../../../config/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async () => {
  if (req.method !== 'POST') {
    res.status(400).json({ message: 'Invalid request method!' });
  }

  res.status(200).json({
    status: 'ok',
    caption: req.body.caption,
    image: req.body.imageUrl,
  });
};

// const storageRef = ref(storage, `images/${image.name}`);
// const snapshot = await uploadBytes(storageRef, image);
// console.log('Uploaded an image!');
// const imageUrl = await getDownloadURL(storageRef);
// await addDoc(collection(db, 'posts'), {
//   caption: caption,
//   imageUrl: imageUrl,
//   user: user.uid,
//   stats: {
//     likes: [],
//     comments: [],
//   },
// });
