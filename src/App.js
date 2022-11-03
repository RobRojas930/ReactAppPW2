import React, { useState } from 'react';
import { Main } from './pages/main';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from './pages/login';
import SweetAlert from 'react-swal-vilan';



export const App = () => {
  const [alertData, setAlertData] = useState(0);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={<Login onAlert={setAlertData} />}
          ></Route>
          <Route
            exact
            path="/main"
            element={<Main onAlert={setAlertData} />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
};
