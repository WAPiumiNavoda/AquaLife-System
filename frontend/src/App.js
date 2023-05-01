import { BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import React from "react";
import UserRegisterScreen from "./screens/userManagement/UserRegisterScreen";
import UserLoginScreen from "./screens/userManagement/UserLoginScreen";
import HomePage from "./screens/static/homePage/HomePage";


const App = () => {
  return (
    <BrowserRouter>
      
       <main>
      <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path = "/user-register" element={<UserRegisterScreen/>}/>
      <Route path = "/user-login" element={<UserLoginScreen/>} />
      </Routes>
        
          
       </main>
       
    </BrowserRouter>
  );
}

export default App;


