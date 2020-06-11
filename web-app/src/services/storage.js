import firebase from 'firebase/app';
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAvK3T-iJRHe2mwpQ2g7r80_C-xwAOatHY",
  authDomain: "skincc-3af45.firebaseapp.com",
  databaseURL: "https://skincc-3af45.firebaseio.com",
  projectId: "skincc-3af45",
  storageBucket: "skincc-3af45.appspot.com",
  messagingSenderId: "1043862726182",
  appId: "1:1043862726182:web:695d04a61b5a843ffd28e7",
  measurementId: "G-4F9BV4JJ5N"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export default storage;
