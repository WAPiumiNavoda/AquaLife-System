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
import Article from "./screens/ArticleManagement/Article";
import ArticleForm from "./screens/ArticleManagement/ArticleForm";
import AllArticle from "./screens/ArticleManagement/AllArticle";
import OneArticle from "./screens/ArticleManagement/OneArticle";
import ProjectView from "./screens/projectManagement/ProjectViewPage";
import AdminDashboard from "./components/Admin/Dashboard";
import InnovationAdmin from "./components/Admin/InnovationAdmin";
import InnovationSuportAdmin from "./components/Admin/InnovationSuportAdmin";
import ArticleAdmin from "./components/Admin/ArticleAdmin";
import ProjectCreate from "./screens/projectManagement/ProjectCreatePage";


const App = () => {
  const hideHeaderFooterRoutes = ["/dashboard","/innovationAdmin","/innovationSupAdmin"];
  

  const shouldHideHeaderFooter = () =>
    hideHeaderFooterRoutes.includes(window.location.pathname);

  return (
    <BrowserRouter>
      {!shouldHideHeaderFooter() && <Header />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* user task managment */}
          <Route path="/user-register" element={<UserRegisterScreen />} />
          <Route path="/user-login" element={<UserLoginScreen />} />

          {/* innovation managment */}
          <Route path="/innovation" element={<Innovation />} />
          <Route path="/innovationAll" element={<AllInnovation />} />
          <Route path="/oneInnovation/:id" element={<OneInnovation />} />

          {/* artical managment */}
          <Route path="/article" element={<Article />} />
          <Route path="/ArticleForm" element={<ArticleForm />} />
          <Route path="/articleHome" element={<AllArticle />} />
          <Route path="/oneArticle" element={<OneArticle />} />

          <Route path="/user-projectView" element={<ProjectView />} />
          <Route path = "/admin-createProject" element={<ProjectCreate/>} />

          {/* Admin */}
          <Route path="/dashboard" element={<AdminDashboard />} />
          <Route path="/innovationAdmin" element={<InnovationAdmin />} />
          <Route path="/innovationSupAdmin" element={<InnovationSuportAdmin />} />
          <Route path="/articleAdmin" element={<ArticleAdmin />} />
        </Routes>
      </main>
      {!shouldHideHeaderFooter() && <Footer />}
    </BrowserRouter>
  );
};

export default App;
