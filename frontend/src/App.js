import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import React from "react";
import UserRegisterScreen from "./screens/userManagement/UserRegisterScreen";
import UserLoginScreen from "./screens/userManagement/UserLoginScreen";
import InnovationHome from "./screens/InnovationManagment/InnovationHome";
import Innovation from "./screens/InnovationManagment/Innovation";
import AllInnovation from "./screens/InnovationManagment/AllInnovation";
import OneInnovation from "./screens/InnovationManagment/OneInnovation";
import Home from "./components/Home/Home";
import Header from "./components/Home/Header";
import Footer from "./Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user-register" element={<UserRegisterScreen />} />
          <Route path="/user-login" element={<UserLoginScreen />} />
          <Route path="/innovation" element={<Innovation />} />
          <Route path="/innovationAll" element={<AllInnovation />} />
          <Route path="/oneInnovation" element={<OneInnovation />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
