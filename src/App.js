import logo from './logo.svg';
import './App.css';
import {useIsAuthenticated} from 'react-auth-kit';
import Login from './Login/Login';
import {Link} from "react-router-dom";
import {Navigate} from 'react-router-dom'


const App=()=> {
  const isAuthenticated = useIsAuthenticated()
  console.log(isAuthenticated());
  if (isAuthenticated()){
    return (
    
      <Navigate to = '/dashboard'/>
     
    );
  }
  else{
    return(
      <Navigate to='/login'/>
    )
  }
  
}

export default App;
