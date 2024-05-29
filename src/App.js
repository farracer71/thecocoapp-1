import React from "react";
import {  CssBaseline } from "@mui/material";
import AppRouter from "./AppRouter";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAw2IblpOvbNeFmGu8YQy4RpITB2Z7TH3c",
  authDomain: "thecocoapp.firebaseapp.com",
  projectId: "thecocoapp",
  storageBucket: "thecocoapp.appspot.com",
  messagingSenderId: "308584814158",
  appId: "1:308584814158:web:28f73e4576592d081a151f",
  measurementId: "G-KDNMVRYTYS"
};

function App() {

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  return (
    <div className="App">
      <div>
        <CssBaseline />
        <AppRouter />
      </div>
    </div>
  );
}

export default App;
