// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyDSwuy3MGoWJnPkp0sNkN6iN3VPgbgHim8",
	authDomain: "soundingice-f6b6d.firebaseapp.com",
	projectId: "soundingice-f6b6d",
	storageBucket: "soundingice-f6b6d.firebasestorage.app",
	messagingSenderId: "22608157792",
	appId: "1:22608157792:web:e59805589878a30b07f705",
	measurementId: "G-CWJVC3D5ZN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };
