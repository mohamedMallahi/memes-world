import { NextApiRequest, NextApiResponse } from 'next';
import formidable from 'formidable';
import { db, storage } from '../../../config/firebase';
import { collection, getDocs, query, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async (req, res) => {
  if (req.method === 'GET') {
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
  } else if (req.method === 'POST') {
    const data = await new Promise((resolve, reject) => {
      const form = new formidable();

      form.parse(req, (err, fields, files) => {
        if (err) reject({ err });
        resolve({ err, fields, files });
      });
    });

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
    res.status(200).json({
      status: 'ok',
      data,
    });
  }
};
