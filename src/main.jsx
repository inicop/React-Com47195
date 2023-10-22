import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

{
  /* The following line can be included in your src/index.js or App.js file */
}
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPTBoy75QJWgJyIB5tWf3vxFT-0Jjeuyc",
  authDomain: "joafra-react.firebaseapp.com",
  projectId: "joafra-react",
  storageBucket: "joafra-react.appspot.com",
  messagingSenderId: "543544843286",
  appId: "1:543544843286:web:873b25023c7396a3e4a937"
};

// Initialize Firebase
initializeApp(firebaseConfig); 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>

  </React.StrictMode>,
)
