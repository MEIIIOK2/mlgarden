import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from 'react-auth-kit';
import Register from './Register/Register';
import { BrowserRouter } from "react-router-dom";
import Login from './Login/Login';
import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  Navigate,
  Outlet,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider authType = {'cookie'}
      authName={'_auth'}
      cookieSecure={false}>
      <BrowserRouter>
      <Routes>
        {/* <Route element ={<App />}> */}
          <Route path="/" element={<App/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          
        {/* </Route> */}

      </Routes>
      </BrowserRouter>
      
      


    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
