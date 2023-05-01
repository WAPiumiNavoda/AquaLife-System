import { BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import React from "react";
import UserRegisterScreen from "./screens/userManagement/UserRegisterScreen";
import UserLoginScreen from "./screens/userManagement/UserLoginScreen";
import InnovationHome from "./screens/InnovationManagment/InnovationHome";
import Innovation from "./screens/InnovationManagment/Innovation";


const App = () => {
  return (
    <BrowserRouter>
      
       <main>
      <Routes>
      <Route path = "/user-register" element={<UserRegisterScreen/>}/>
      <Route path = "/user-login" element={<UserLoginScreen/>} />
      <Route path = "/innovation" element={<Innovation/>} />
      </Routes>
        
          
       </main>
       
    </BrowserRouter>
  );
}

export default App;


