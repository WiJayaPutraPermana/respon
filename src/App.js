import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import Event from "./components/pages/Event";
import Marketing from "./components/pages/Online";
import Development from "./components/pages/Exhibition"
import Design from "./components/pages/Offline";
import Products from "./components/pages/Partner";
import SignUp from "./components/pages/SignUp";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/event" exact Component={Event} />
          <Route path="/partner" exact Component={Products} />
          <Route path="/sign-up" exact Component={SignUp} />
          <Route path="/online" component={Marketing}></Route>
          <Route path="/offline" component={Development}></Route>
          <Route path="/exhibition" component={Design}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
