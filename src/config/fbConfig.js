import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyAFYuwaSL2i8D5v_Yk-saTsjVbM6q4sBAA',
  authDomain: 'projects-archive.firebaseapp.com',
  databaseURL: 'https://projects-archive.firebaseio.com',
  projectId: 'projects-archive',
  storageBucket: '',
  messagingSenderId: '364097029088',
  appId: '1:364097029088:web:2169f2f75cdd766e'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
