/* Filename: app.jsx
   Student: Rimsha Batool
   StudentId: 301376633
   Date: June 1st 2024*/

import React from 'react';

import { BrowserRouter as Router } from "react-router-dom";
import MainRouter from "./MainRouter";
import Layout from "./components/Layout";




function App() {
  
  console.log('App component rendered');
  
  return (
    
     <div class="container">
     
    <Router>
      <Layout />
      <MainRouter />
    </Router>
   </div>
  );
  
}

export default App;

