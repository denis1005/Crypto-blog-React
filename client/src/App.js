/* eslint-disable eqeqeq */
import { Home } from './components/Home/Home';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import { CryptoDetails } from './components/CryptoDetails/CryptoDetails';
import { Login } from './components/Login/Login';
import {Route,Routes} from 'react-router-dom'
import { AuthContext } from './context/AuthContext';
import { MemeContext } from './context/Memecontext';
import { Register } from './components/Register/Register';
import { Logout } from './components/Logout/Logout';
import { Memes } from './components/Memes/Memes';
import { MemeDetails } from './components/Meme details/MemeDetails';
import { CreateMeme } from './components/CreateMeme/CreateMeme';
import './App.css';
import { useLocalStorage } from './hooks/useLocalStorage';
import { EditMeme } from './components/Edit/Edit';
import * as memeServices from "./Service/memeServices"
import {useState, useEffect } from 'react'
import {MemeOwner} from './components/common/MemeOwner'
import {IsLoggedIn} from './components/common/IslogedIn'
import { NotFound } from './components/NotFound/NotFound';

function App() {
  const [auth,setAuth]=useLocalStorage('auth',{});
  const [memes,setMemes]=useState([]);

  const userLogin=(authData)=>{
    setAuth(authData);
  }

  const userLogout = () => {
    setAuth({});
  };

  let isAuthenticated=!!auth.accessToken

  const memeAdd = (memeData) => {
    setMemes(state => [
        ...state,
        memeData,
    ]);
    
   };

   const memeDelete = (memeId) => {
    setMemes(state => state.filter(x=>x._id!==memeId));
   };

   const memeEdit = (memeId, memeData) => {
    setMemes(state => state.map(x => x._id === memeId ? memeData : x));
     }

     const selectMeme = (memeId) => {
      return memes.find((x => x._id === memeId) || {});
  };

  
 
     

    useEffect(()=>{
        memeServices
      .getAll()
      .then(result=>{
        setMemes(result);
      })
      .catch((err)=>{
        console.log(err);
      })
    },[])

  return (
    <AuthContext.Provider value={{user:auth,userLogin,userLogout,isAuthenticated}}>
    <div className="App">
    <MemeContext.Provider value={{setMemes,memeAdd,memeDelete,memeEdit,selectMeme}}>
      <Navbar/>
      <Routes>
      <Route path="/" element={ <Home/>}/>
      <Route path="/cards/details/:cryptoId" element={ <CryptoDetails/>}/>
      <Route element={<IsLoggedIn/>}>
         <Route path="/login" element={ <Login/>}/>
         <Route path="/register" element={ <Register/>}/>
      </Route>
      <Route path="/logout" element={ <Logout/>}/>
      <Route path="/memes" element={ <Memes memes={memes}/>}/>
      <Route path="/create" element={ <CreateMeme/>}/>
      <Route path="/memes/details/:memeId" element={ <MemeDetails/>}/>
      <Route element={<MemeOwner/>}>
         <Route path="/memes/edit/:memeId" element={ <EditMeme/>}/>
      </Route>
      <Route path="*" element={ <NotFound/>}/>
      
      </Routes>
      <Footer/>
      </MemeContext.Provider> 
    </div>
   
    </AuthContext.Provider>
  );
}

export default App;
