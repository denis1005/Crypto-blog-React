/* eslint-disable eqeqeq */
import { Home } from './components/Home/Home';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import { CryptoDetails } from './components/CryptoDetails/CryptoDetails';
import { Login } from './components/Login/Login';
import { Route, Routes } from 'react-router-dom'
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
import { useState, useEffect } from 'react'
import { IsLoggedIn } from './components/common/IslogedIn'
import { IsGuest } from './components/common/IsGuest' 
import { NotFound } from './components/NotFound/NotFound';
import { Profile } from './components/Profile/Profile';
import { Collection } from './components/Collection/Collection';



function App() {
  const [auth, setAuth] = useLocalStorage('auth', {});
  const [memes, setMemes] = useState([]);
  const [beforeSearch, setBeforeSearch] = useState([]);

  const userLogin = (authData) => {
      setAuth(authData);
  };

  const userLogout = () => {
    setAuth({});
  };

  let isAuthenticated = !!auth.accessToken

  const memeAdd = (memeData) => {
    setMemes(state => [
      ...state,
      memeData,
    ]);

  };

  const memeSearch = (search) => {

    search = search.toLowerCase()
    console.log(beforeSearch);
    if (search !== '' && search.length > 1) {
      setMemes(state => state.filter(x =>
        x.title.toLowerCase()
          .startsWith(search)))
    } else {

      setMemes(beforeSearch);
    }

  }

  const memeDelete = (memeId) => {
    setMemes(state => state.filter(x => x._id !== memeId));
  };

  const memeEdit = (memeId, memeData) => {
    setMemes(state => state.map(x => x._id === memeId ? memeData : x));
  }

  const selectMeme = (memeId) => {
    return memes.find((x => x._id === memeId) || {});
  };

  useEffect(() => {
    memeServices
      .getAll()
      .then(result => {
        setMemes(result);
        setBeforeSearch(result);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  return (
   
    <AuthContext.Provider value={{ user: auth, userLogin, userLogout, isAuthenticated }}>
      <div className="App">
        <MemeContext.Provider value={{ setMemes, memeAdd, memeDelete, memeEdit, selectMeme, memes, memeSearch }}>
          <Navbar />
          <Routes>
            <Route path="/cards/details/:cryptoId" element={<CryptoDetails />} />
            <Route element={<IsLoggedIn />}>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Route>
            <Route element={<IsGuest />}>
              <Route path="/profile" element={<Profile />} />
              <Route path="/collection" element={<Collection />} />
              <Route path="/logout" element={<Logout />} />
            </Route>
            
            <Route path="/" element={<Home />} />
            <Route path="/memes" element={<Memes />} />
            <Route path="/create" element={<CreateMeme />} />
            <Route path="/memes/details/:memeId" element={<MemeDetails />} />
            <Route path="/memes/edit/:memeId" element={<EditMeme />} />
            <Route path="*" element={<NotFound />} />

          </Routes>

          <Footer />
        </MemeContext.Provider>
      </div>

    </AuthContext.Provider>
  );
}

export default App;
