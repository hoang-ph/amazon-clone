import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAEAZK1Ojs1qpnhj9UBgwwx3t_R5UmLCrw',
  authDomain: 'challenge-f565e.firebaseapp.com',
  projectId: 'challenge-f565e',
  storageBucket: 'challenge-f565e.appspot.com',
  messagingSenderId: '967921048245',
  appId: '1:967921048245:web:e2803c21ac9acab28b3cfc',
  measurementId: 'G-L0RRP2G2VP',
};

const fireBaseApp = initializeApp(firebaseConfig);

const db = getFirestore(fireBaseApp);
const auth = getAuth(fireBaseApp);

export { db, auth };
