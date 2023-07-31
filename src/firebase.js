import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"
 const firebaseConfig = {
  apiKey: "AIzaSyCh9jP79KuVbKnguUTrlRPRIhS5_0u8X0k",
  authDomain: "clone-74ba9.firebaseapp.com",
  projectId: "clone-74ba9",
  storageBucket: "clone-74ba9.appspot.com",
  messagingSenderId: "121636354403",
  appId: "1:121636354403:web:5147c217225d7487e0bb56",
  measurementId: "G-1MQMWZTGVF"
};
const app = initializeApp(firebaseConfig);
 const db = getFirestore(app);
 const auth = getAuth(app);

 export { db , auth , firebaseConfig};