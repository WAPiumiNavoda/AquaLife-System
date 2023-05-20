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
import Treatment from "./screens/WaterTreatment/Treatment";
import InnovationAdmin from "./components/Admin/InnovationAdmin";
import InnovationSuportAdmin from "./components/Admin/InnovationSuportAdmin";
import ArticleAdmin from "./components/Admin/ArticleAdmin";
import ProjectCreate from "./components/Admin/ProjectCreatePage";
import InnovationMain from "./screens/InnovationManagment/InnovationMain";
import InnovationApprove from "./components/Admin/InnovationApprove";
import Quality from "./screens/WaterTreatment/QualityTest";
import QualityDetails from "./components/Admin/QualityDetails";
import Dashboard from "./screens/donateManagement/DonateSelection";
import LabourCreate from "./screens/donateManagement/LaborCreate";

const App = () => {
  const hideHeaderFooterRoutes = [
    "/dashboard",
    "/innovationAdmin",
    "/innovationSupAdmin",
    "/innovationApprove",
    "/allquality",
    "/admin-createProject"
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
          <Route path="/article" element={<Article />} />
          <Route path="/ArticleForm" element={<ArticleForm />} />
          <Route path="/articleHome" element={<AllArticle />} />
          <Route path="/oneArticle" element={<OneArticle />} />

          {/* project managment */}
          <Route path="/user-projectView" element={<ProjectView />} />
          <Route path="/admin-createProject" element={<ProjectCreate />} />
          <Route path = "/selection" element={<Dashboard/>}/>

           {/* Donate management */}
           <Route path = "/createLabour" element={<LabourCreate/>}/>

          {/* Admin */}
          <Route path="/dashboard" element={<AdminDashboard />} />
          <Route path="/innovationAdmin" element={<InnovationAdmin />} />
          <Route path="/innovationSupAdmin"element={<InnovationSuportAdmin />}
          />
          <Route path="/innovationApprove" element={<InnovationApprove />} />
          <Route path = "/admin-createProject" element={<ProjectCreate/>} />
        
          {/* Admin */}
          <Route path="/dashboard" element={<AdminDashboard />} />

          <Route path="/innovationAdmin" element={<InnovationAdmin />} />
          <Route
            path="/innovationSupAdmin"
            element={<InnovationSuportAdmin />}
          />
          <Route path="/articleAdmin" element={<ArticleAdmin />} />

          <Route path="/innovationAdmin" element={<InnovationAdmin />} />
      
          <Route path="/innovationApprove" element={<InnovationApprove />} />
          <Route path="/innovationmain" element={<InnovationMain />} />
           <Route path="/innovationhistory" element={<InnovationSupportHistory />} />
            <Route path="/innovationReportList" element={<InnovationSupportReportList />} />
           <Route path="/innovationReport" element={<InnovationSupportReport />} />
           
          {/* Wastewater Treatment */}
          <Route path="/services" element={<Treatment />} />
          <Route path="/quality" element={<Quality />} />
          <Route path="/allquality" element={<QualityAdmin />} />
          <Route path="/quality/:id" element={<QualityDetails />} />
          <Route path="/machines" element={<Product />} />
          <Route path="/maintenance" element={<Maintenance />} />
        </Routes>
      </main>
      {!shouldHideHeaderFooter() && <Footer />}
    </BrowserRouter>
  );
};

export default App;
