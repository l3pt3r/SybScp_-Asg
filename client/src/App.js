import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Details from './Components/Details/Details';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Home from './Components/Home/Home';
import './App.css';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} render={(props) => (<Details id={props.match.params.id} />)} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
