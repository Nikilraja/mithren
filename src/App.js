
import React from 'react';
import './App.css';
import pic1 from "./asserts/img1.jpg";
import pic2 from "./asserts/img2.jpg";
import pic4 from "./asserts/img4.jpg";
import pic5 from "./asserts/img5.jpg";
import pic6 from "./asserts/img6.jpg";
import pic7 from "./asserts/img7.jpg";
import pic8 from "./asserts/img8.jpg";
import pic9 from "./asserts/img9.jpg";
import pic10 from "./asserts/img10.jpg";
import pic11 from "./asserts/img11.jpg";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAg0p0MQjRK2NMr3q98awMu5URCzSoBTOU",
  authDomain: "hema-mithren.firebaseapp.com",
  projectId: "hema-mithren",
  storageBucket: "hema-mithren.appspot.com",
  messagingSenderId: "721833488397",
  appId: "1:721833488397:web:96d85bcceeb8d467612544",
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function App() {
  return (
    <div className="App">
      <h1 className="nk">NK</h1><h1 className="hm">Hema Mithren </h1>
      <h3 className="king">King Is Not Born, He Is Made...</h3>
      <img className="mith"src={pic2} alt="Mithren Album" />
      <br/>
            <img className="mith"src={pic1} alt="Mithren Album" />
            <br/>
            <img className="mith"src={pic4} alt="Mithren Album" />
            <br/>
            <img className="mith"src={pic5} alt="Mithren Album" />
            <br/>
            <img className="mith"src={pic6} alt="Mithren Album" />
            <br/>
            <img className="mith"src={pic7} alt="Mithren Album" />
            <br/>
            <img className="mith"src={pic8} alt="Mithren Album" />
            <br/>
            <img className="mith"src={pic9} alt="Mithren Album" />
            <br/>
            <img className="mith"src={pic10} alt="Mithren Album" />
            <br/>
            <img className="mith"src={pic11} alt="Mithren Album" />
            <h2 className="bloody">BloodY SweeT</h2>
    </div>
  );
}

export default App;
