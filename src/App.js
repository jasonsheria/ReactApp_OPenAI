import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom"
import Home from "./Components/Home/home"
import Table from './Components/TableCRUD/Table'
import Contact from "./Components/About/About"
import NotFound from "./Components/NotFound/Index"
import Landing from './Components/landingPage/index'
import Apropos from './Components/Contact/index'
import Chat from './Components/Chat/index'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import './index.css'
import Login from './Components/Login/login'
const App = () => {
  return (
    <div>

      <BrowserRouter>

        <div className="App">
          <Routes>
          <Route path="/tranduction" element={<Home />} />
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<Contact />} /  >
            <Route path="/table" element={<Table />} /  >
            <Route path="/contact" element={<Apropos />} /  >
            <Route path="/login" element={<Login />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="*" element={<NotFound />} />
            {/* <Route exact path="/">
              {loggedIn ? <Redirect to="/dashboard" /> : <PublicHomePage />}
            </Route> */}

          </Routes>
        </div>
      </BrowserRouter>

    </div>
  );
};
export default App;