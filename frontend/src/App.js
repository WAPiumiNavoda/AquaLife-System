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
import ProjectCreate from "./components/Admin/project/ProjectCreatePage";
import InnovationMain from "./screens/InnovationManagment/InnovationMain";
import InnovationApprove from "./components/Admin/InnovationApprove";
import Quality from "./screens/WaterTreatment/QualityTest";
import QualityDetails from "./components/Admin/QualityDetails";
import Dashboard from "./screens/donateManagement/DonateSelection";
import LabourCreate from "./screens/donateManagement/LaborCreate";
import InnovationSupportReportList from "./components/Report/InnovationSupportReportList";
import InnovationSupportReport from "./components/Report/InnovationSupportReport";
import InnovationSupportHistory from "./screens/InnovationManagment/InnovationSupportHistory";
import ProjectListByAdmin from "./components/Admin/project/ProjectList";
import ProjectUpdate from "./components/Admin/project/ProjectUpdate";
import PaymentForm from "./screens/donateManagement/Payment";
import LaborList from "./screens/donateManagement/ViewLaborList";
import LaborListForAdmin from "./components/Admin/donate/LaborListForAdmin";
import Machine from "./screens/WaterTreatment/Products";
import Maintenance from "./screens/WaterTreatment/Maintenance";
import QualityAdmin from "./components/Admin/AllQualityTests";
import Product from "./components/Admin/Product";
import ProductAdmin from "./components/Admin/ProductAdmin";
import ProductUpdate from "./components/Admin/ProductUpdate";
import OneProduct from "./screens/WaterTreatment/OneProduct";
import LaborUpdate from "./screens/donateManagement/UpdateLabor";
import ProjectListReport from "./components/Report/ProjectListReport";
import ProjectList from "./components/Report/projectList";
import ProjectReport from "./components/Report/ProjectListReport";
import PaymentListForAdmin from "./components/Admin/donate/PaymentListForAdmin";
import ArticalListReport from "./components/Report/ArticalListReport";
import ArticalList from "./components/Report/ArticalList";
const App = () => {
  const hideHeaderFooterRoutes = [
    "/dashboard",
    "/innovationAdmin",
    "/innovationSupAdmin",
    "/innovationApprove",
    "/allquality",
    "/admin-createProject",
    "/projectList",
    "/laborListForAdmin",
    "/product",
    "/allproduct",
    "/paymentList",
    "/articleReportList",
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
          <Route path="/AllArticle" element={<AllArticle />} />
          <Route path="/ArticleForm" element={<ArticleForm />} />
          <Route path="/articleHome" element={<AllArticle />} />
          <Route path="/oneArticle" element={<OneArticle />} />
          <Route path="/articleReport" element={<ArticalList />} />
          <Route path="/articleReportList" element={<ArticalListReport />} />
          
          {/* project managment */}
          <Route path="/user-projectView" element={<ProjectView />} />
          <Route path="/admin-createProject" element={<ProjectCreate />} />
          <Route path="/selection/:id" element={<Dashboard />} />
          <Route path="/project/:id" element={<ProjectUpdate />} />
          <Route path="/projectList" element={<ProjectListByAdmin />} />

          {/* Donate management */}
          <Route path = "/createLabour" element={<LabourCreate/>}/>
          <Route path = "/laborList" element={<LaborList/>}/>
          <Route path = "/laborListForAdmin"  element={< LaborListForAdmin/>}/>
          <Route path = "/payment" element={<PaymentForm/>}/>
          <Route path="/selection" element={<Dashboard />} />
          <Route path="/labor/:id" element={<LaborUpdate/>} />
          <Route path="/projectReport" element={<ProjectList/>}/>
          <Route path="/reportProject" element={<ProjectReport/>}/>
          <Route path ="/paymentList" element={<PaymentListForAdmin/>}/>
         


          {/* Admin */}
          <Route path="/dashboard" element={<AdminDashboard />} />
          <Route path="/innovationAdmin" element={<InnovationAdmin />} />
          <Route
            path="/innovationSupAdmin"
            element={<InnovationSuportAdmin />}
          />
          <Route path="/innovationApprove" element={<InnovationApprove />} />
          <Route path="/admin-createProject" element={<ProjectCreate />} />

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
          <Route
            path="/innovationhistory"
            element={<InnovationSupportHistory />}
          />
          <Route
            path="/innovationReportList"
            element={<InnovationSupportReportList />}
          />
          <Route
            path="/innovationReport"
            element={<InnovationSupportReport />}
          />

          {/* Wastewater Treatment */}
          <Route path="/services" element={<Treatment />} />
          <Route path="/quality" element={<Quality />} />
          <Route path="/quality/:id" element={<QualityDetails />} />
          <Route path="/machines" element={<Machine />} />
          <Route path="/maintenance" element={<Maintenance />} />
          <Route path="/allquality" element={<QualityAdmin />} />
          <Route path="/product" element={<Product />} />
          <Route path="/allproduct" element={<ProductAdmin />} />
          <Route path="/product/:id" element={<ProductUpdate />} />
          <Route path="/oneProduct/:id" element={<OneProduct />} />
        </Routes>
      </main>

      {!shouldHideHeaderFooter() && <Footer />}
    </BrowserRouter>
  );
};

export default App;
