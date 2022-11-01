import logo from './logo.svg';
import './App.css';
import {useIsAuthenticated} from 'react-auth-kit';
import Login from './Login/Login';
import {Link} from "react-router-dom";


const App=()=> {
  const isAuthenticated = useIsAuthenticated()
  console.log(isAuthenticated());
  return (
    
    <div className="App">
      <header className="App-header">
        {isAuthenticated()?'HELLO fuckers':'shit wrong'}
        <Link to="/register">Register</Link>
      </header>
    </div>
   
  );
}

export default App;
