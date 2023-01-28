import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from 'react-auth-kit';
import Register from './Register/Register';
import { BrowserRouter } from "react-router-dom";
import Login from './Login/Login';
import Processing from './Processing/Processing';
import { RequireAuth } from 'react-auth-kit';
import axios from 'axios';
import Dashboard from './Dashboard/Dashboard';

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
          
          <Route path={'/dashboard'} element={
            <RequireAuth loginPath={'/login'}>
              <Dashboard/>
            </RequireAuth>
          }/>
          <Route path={'datasets/:name'} element={
            <RequireAuth loginPath={'/login'}>
              <Processing/>
            </RequireAuth>
          }/>
            
          
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
