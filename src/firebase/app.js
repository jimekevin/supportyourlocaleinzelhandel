// Web app Firebase configuration
import Firebase from 'firebase/app'
const firebaseConfig = {
  apiKey: "AIzaSyCUmdfhw4nu7kjHxse_ZZEa8lydbyT2oLM",
  authDomain: "wirvonhier.firebaseapp.com",
  databaseURL: "https://wirvonhier.firebaseio.com",
  projectId: "wirvonhier",
  storageBucket: "wirvonhier.appspot.com",
  messagingSenderId: "532669049858",
  appId: "1:532669049858:web:d332549d1018bd61e6cb1b",
  measurementId: "G-SL3Y3HM7DW"
};
export const App = Firebase.initializeApp(firebaseConfig);
// export const Analytics = Firebase.analytics();