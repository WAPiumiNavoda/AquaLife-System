import { BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import React from "react";
import UserRegisterScreen from "./screens/userManagement/UserRegisterScreen";
import UserLoginScreen from "./screens/userManagement/UserLoginScreen";
import ProjectView from "./screens/projectManagement/ProjectViewPage";


const App = () => {
  return (
    <BrowserRouter>
      
    <main>
      <Routes>
          <Route path = "/user-register" element={<UserRegisterScreen/>}/>
          <Route path = "/user-login" element={<UserLoginScreen/>} />
          <Route path = "/user-projectView" element={<ProjectView/>} />
      </Routes>
        
          
    </main>
       
    </BrowserRouter>
  );
}

export default App;


