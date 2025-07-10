// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCG3SFKijN_knEcyAUe_kyzqdvKpvE7wuI",
  authDomain: "contract-vendor.firebaseapp.com",
  projectId: "1:273225997055:web:f208fde06ff681b22dcaca",
  appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
