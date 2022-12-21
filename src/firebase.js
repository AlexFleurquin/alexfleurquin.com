import firebase from 'firebase/app';
import 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBEbQzHKdWmz7rR4HxhCN0Di3lCDSykoEE',
  authDomain: 'jinial-newsletter.firebaseapp.com',
  projectId: 'jinial-newsletter',
  storageBucket: 'jinial-newsletter.appspot.com',
  messagingSenderId: '981315391446',
  appId: '1:981315391446:web:67018d80b7ec4cfcab1e77',
  measurementId: 'G-3BE0HDVBQ8',
};

firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;
