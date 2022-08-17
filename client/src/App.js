import { Home } from './components/Home/Home';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import { CryptoDetails } from './components/CryptoDetails/CryptoDetails';
import { Login } from './components/Login/Login';
import {Route,Routes } from 'react-router-dom'
import { AuthContext } from './context/AuthContext';
import { MemeContext } from './context/Memecontext';
import { Register } from './components/Register/Register';
import { Logout } from './components/Logout/Logout';
import { Memes } from './components/Memes/Memes';
import { MemeDetails } from './components/Meme details/MemeDetails';
import { CreateMeme } from './components/CreateMeme/CreateMeme';
import './App.css';
import { useLocalStorage } from './hooks/useLocalStorage';
import * as memeServices from "./Service/memeServices"
import {useState, useEffect } from 'react'

function App() {
  const [auth,setAuth]=useLocalStorage('auth',{});
  const [memes,setMemes]=useState([]);

  const userLogin=(authData)=>{
    setAuth(authData);
  }

  const userLogout = () => {
    setAuth({});
  };

  const memeAdd = (memeData) => {
    setMemes(state => [
        ...state,
        memeData,
    ]);

};

    useEffect(()=>{
        memeServices
      .getAll()
      .then(result=>{
        setMemes(result);
      });
    },[])

  return (
    <AuthContext.Provider value={{user:auth,userLogin,userLogout}}>
    <div className="App">
    <MemeContext.Provider value={{setMemes,memeAdd}}>
      <Navbar/>
      <Routes>
      <Route path="/" element={ <Home/>}/>
      <Route path="/cards/details/:cryptoId" element={ <CryptoDetails/>}/>
      <Route path="/login" element={ <Login/>}/>
      <Route path="/logout" element={ <Logout/>}/>
      <Route path="/register" element={ <Register/>}/>
      <Route path="/memes" element={ <Memes memes={memes}/>}/>
      <Route path="/create" element={ <CreateMeme/>}/>
      <Route path="/memes/details/:memeId" element={ <MemeDetails/>}/>
      </Routes>
      <Footer/>
      </MemeContext.Provider> 
    </div>
   
    </AuthContext.Provider>
  );
}

export default App;
