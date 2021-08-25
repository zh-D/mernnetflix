import firebase from "firebase";

const firebaseConfig = process.env.REACT_APP_FIREBASE_CONFIG;

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
