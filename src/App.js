import React, { useState } from 'react';
import { Main } from './pages/main';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from './pages/login';
import './styles/main.css'
//import './styles/vars.styl'



export const App = () => {
  const [alertData, setAlertData] = useState(0);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            exact
            path="/main"
            element={<Login onAlert={setAlertData} />}
          ></Route>
          <Route
            exact
            path="/"
            element={<Main onAlert={setAlertData} />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
};
