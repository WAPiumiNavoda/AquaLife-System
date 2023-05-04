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
import ArticleForm from "./screens/ArticleManagement/ArticleForm";
import AllArticle from "./screens/ArticleManagement/AllArticle";
import OneArticle from "./screens/ArticleManagement/OneArticle";





const App = () => {
  return (
    <BrowserRouter>

      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />

      {/* user task managment */}
      <Route path = "/user-register" element={<UserRegisterScreen/>}/>
      <Route path = "/user-login" element={<UserLoginScreen/>} />

      {/* innovation managment */}
      <Route path = "/innovation" element={<Innovation/>} />
      <Route path = "/innovationAll" element={<AllInnovation/>} />
      <Route path = "/oneInnovation/:id" element={<OneInnovation/>} />

      {/* artical managment */}
      <Route path = "/ArticleForm" element={<ArticleForm/>} />
      <Route path = "/articleAll" element={<AllArticle/>} />
      <Route path = "/oneArticle" element={<OneArticle/>} />
      </Routes> 
      
       </main>
     <Footer />
    </BrowserRouter>
  );
};

export default App;
