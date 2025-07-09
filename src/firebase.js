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



// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCG3SFKijN_knEcyAUe_kyzqdvKpvE7wuI",
//   authDomain: "contract-vendor.firebaseapp.com",
//   projectId: "contract-vendor",
//   storageBucket: "contract-vendor.firebasestorage.app",
//   messagingSenderId: "273225997055",
//   appId: "1:273225997055:web:f208fde06ff681b22dcaca",
//   measurementId: "G-EBYFB2059Z"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
