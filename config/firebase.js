import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCs3k-zqrnk3oAnPBoeR-AukFghjKytTYk',
  authDomain: 'memes-world-2aa4d.firebaseapp.com',
  projectId: 'memes-world-2aa4d',
  storageBucket: 'memes-world-2aa4d.appspot.com',
  messagingSenderId: '5437780555',
  appId: '1:5437780555:web:f178836e03ddf1b3ced3ce',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage();
