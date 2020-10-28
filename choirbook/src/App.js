import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import NavBar from './Components/Organisms/NavBar'
import Routes from './Components/Routes.jsx';

import './App.css';


function App() {
  return (

    <Router>
      <Routes />
      <NavBar />
    </Router>
  );
}

export default App;
