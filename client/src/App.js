import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import landingPage from "./Views/Landing Page/landingPage";
import Home from "./Views/Home/home";
import Detail from "./Views/Detail/detail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<landingPage />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
