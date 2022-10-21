import React from 'react';
import { Main } from './pages/main';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from './pages/login';

export const App = () => (
  <div className="App">
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route exact path="/home" element={<Main />}></Route>
      </Routes>
    </Router>
  </div>
);
