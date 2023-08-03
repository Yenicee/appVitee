import React from 'react';
import { createRoot } from 'react-dom/client';
//import ReactDOM from 'react-dom';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIevpZ_WjR-PHanPzo7adzZgtbuof54fY",
  authDomain: "appvite-4ad95.firebaseapp.com",
  projectId: "appvite-4ad95",
  storageBucket: "appvite-4ad95.appspot.com",
  messagingSenderId: "3950800509",
  appId: "1:3950800509:web:033b8e0ab98f15c3c28b14",
  measurementId: "G-KSZBK6BMTF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);