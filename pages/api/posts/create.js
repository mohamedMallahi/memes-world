import { db, storage } from '../../../config/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

function dataURItoBlob(dataURI) {
  // convert base64 to raw binary data held in a string
  // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
  const byteString = atob(dataURI.split(',')[1]);

  // separate out the mime component
  const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

  // write the bytes of the string to an ArrayBuffer
  const ab = new ArrayBuffer(byteString.length);

  // create a view into the buffer
  const ia = new Uint8Array(ab);

  // set the bytes of the buffer to the correct values
  for (const i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }

  // write the ArrayBuffer to a blob, and you're done
  const blob = new Blob([ab], { type: mimeString });
  return blob;
}

export default async () => {
  if (req.method !== 'POST') {
    res.status(400).json({ message: 'Invalid request method!' });
  }

  try {
    const { imageUrl, caption, filename } = req.body;
    const storageRef = ref(storage, `images/${filename}`);
    await uploadBytes(storageRef, await dataURItoBlob(imageUrl));
    console.log('Uploaded an image!');
    const imageFirebaseUrl = await getDownloadURL(storageRef);
    await addDoc(collection(db, 'posts'), {
      caption: caption,
      imageUrl: imageFirebaseUrl,
      // user: user.uid,
      stats: {
        likes: [],
        comments: [],
      },
    });
    res.status(200).json({ status: 'ok' });
  } catch (error) {
    res.status(501).json(error);
  }
};
