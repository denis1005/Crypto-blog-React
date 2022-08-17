import { Home } from './components/Home/Home';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import { CryptoDetails } from './components/CryptoDetails/CryptoDetails';
import { Login } from './components/Login/Login';
import {Route,Routes } from 'react-router-dom'
import { AuthContext } from './context/AuthContext';
import { Register } from './components/Register/Register';
import { Logout } from './components/Logout/Logout';
import { Memes } from './components/Memes/Memes';
import { MemeDetails } from './components/Meme details/MemeDetails';
import './App.css';
import { useLocalStorage } from './hooks/useLocalStorage';

function App() {
  const [auth,setAuth]=useLocalStorage('auth',{});

  const userLogin=(authData)=>{
    setAuth(authData);
  }

  const userLogout = () => {
    setAuth({});
};
  return (
    <AuthContext.Provider value={{user:auth,userLogin,userLogout}}>
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path="/" element={ <Home/>}/>
      <Route path="/cards/details/:cryptoId" element={ <CryptoDetails/>}/>
      <Route path="/login" element={ <Login/>}/>
      <Route path="/logout" element={ <Logout/>}/>
      <Route path="/register" element={ <Register/>}/>
      <Route path="/memes" element={ <Memes/>}/>
      <Route path="/memes/details/:memeId" element={ <MemeDetails/>}/>
      </Routes>
      <Footer/>
    </div>
    </AuthContext.Provider>
  );
}

export default App;
