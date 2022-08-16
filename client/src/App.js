import {Route,Routes } from 'react-router-dom'

import { useState } from 'react'; 

import {NavbarComponent} from './Components/Navbar/Navbar'
import {Footer} from './Components/Footer/Footer'
import {Home} from './Components/Home/Home'
import { Login } from './Components/Login/Login';
import { Register } from './Components/Register/Register';
import { CryptoDetails } from './Components/Details/CryptoDetails';
import { AuthContext } from './context/AuthContext';


import './App.css';





function App() {

  const [auth,setAuth]=useState({});

  const userLogin=(authData)=>{
    setAuth(authData);
  }

  return (
    

    <AuthContext.Provider value={{user:auth,userLogin}}>
    <div className='App'> 
    <NavbarComponent/>
     <Routes>
      <Route path="/" element={ <Home/>}/>
      <Route path="/login" element={ <Login/>}/>
      
      <Route path="/register" element={ <Register/>}/>
      <Route path="/cards/details/:cryptoId" element={ <CryptoDetails/>}/>
     </Routes>
     
    <Footer/>
    </div>
    </AuthContext.Provider>
  );
}

export default App;
