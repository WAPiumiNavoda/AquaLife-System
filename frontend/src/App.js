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
import ProjectView from "./screens/projectManagement/ProjectViewPage";
import AdminDashboard from "./components/Admin/Dashboard";
import Treatment from "./screens/WaterTreatment/Treatment";
import InnovationAdmin from "./components/Admin/InnovationAdmin";
import InnovationSuportAdmin from "./components/Admin/InnovationSuportAdmin";
import ProjectCreate from "./screens/projectManagement/ProjectCreatePage";
import InnovationApprove from "./components/Admin/InnovationApprove";
import Quality from "./screens/WaterTreatment/QualityTest";
import AllQualityTests from "./components/Admin/AllQualityTests";
import QualityDetails from "./components/Admin/QualityDetails";

const App = () => {
  const hideHeaderFooterRoutes = [
    "/dashboard",
    "/innovationAdmin",
    "/innovationSupAdmin",
    "/innovationApprove",
    "/allquality",
  ];

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
          <Route path="/ArticleForm" element={<ArticleForm />} />
          <Route path="/articleAll" element={<AllArticle />} />
          <Route path="/oneArticle" element={<OneArticle />} />

          <Route path="/user-projectView" element={<ProjectView />} />
          <Route path="/admin-createProject" element={<ProjectCreate />} />

          {/* Admin */}
          <Route path="/dashboard" element={<AdminDashboard />} />
          <Route path="/innovationAdmin" element={<InnovationAdmin />} />
          <Route
            path="/innovationSupAdmin"
            element={<InnovationSuportAdmin />}
          />
          <Route path="/innovationApprove" element={<InnovationApprove />} />

          {/* Wastewater Treatment */}
          <Route path="/services" element={<Treatment />} />
          <Route path="/quality" element={<Quality />} />
          <Route path="/allquality" element={<AllQualityTests />} />
          <Route path="/quality/:id" element={<QualityDetails />} />
        </Routes>
      </main>
      {!shouldHideHeaderFooter() && <Footer />}
    </BrowserRouter>
  );
};

export default App;
