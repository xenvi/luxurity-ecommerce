import firebase from "firebase/app";
import "firebase/auth";

var config = {
  apiKey: "AIzaSyAxWmaQuIKz0cE4pFfp_NME1rea_v4Dz9s",
  authDomain: "luxurity.firebaseapp.com",
  databaseURL: "https://luxurity.firebaseio.com",
  projectId: "luxurity",
  storageBucket: "luxurity.appspot.com",
  messagingSenderId: "312336192102",
  appId: "1:312336192102:web:39f308c8a1ef68245dd3a7",
  measurementId: "G-SN2X948Q90",
};
const fire = firebase.initializeApp(config);
export default fire;
