/* eslint-disable eqeqeq */
import { Home } from './Components/Home/Home';
import { Navbar } from './Components/Navbar/Navbar';
import { Footer } from './Components/Footer/Footer';
import { CryptoDetails } from './Components/CryptoDetails/CryptoDetails';
import { Login } from './Components/Login/Login';
import { Route, Routes } from 'react-router-dom'
import { AuthContext } from './context/AuthContext';
import { MemeContext } from './context/Memecontext';
import { Register } from './Components/Register/Register';
import { Logout } from './Components/Logout/Logout';
import { Memes } from './Components/Memes/Memes';
import { MemeDetails } from './Components/Meme details/MemeDetails';
import { CreateMeme } from './Components/CreateMeme/CreateMeme';
import './App.css';
import { useLocalStorage } from './hooks/useLocalStorage';
import { EditMeme } from './Components/Edit/Edit';
import * as memeServices from "./Service/memeServices"
import { useState, useEffect } from 'react'
import { IsLoggedIn } from './Components/common/IslogedIn'
import { IsGuest } from './Components/common/IsGuest' 
import { NotFound } from './Components/NotFound/NotFound';
import { Profile } from './Components/Profile/Profile';
import { Collection } from './Components/Collection/Collection';



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
    setBeforeSearch(state => [
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
          .includes(search)))
    } else {

      setMemes(beforeSearch);
    }

  }

  const memeDelete = (memeId) => {
    setMemes(state => state.filter(x => x._id !== memeId));
  };

  const memeEdit = (memeId, memeData) => {
    setMemes(state => state.map(x => x._id === memeId ? memeData : x));
    setBeforeSearch(state => state.map(x => x._id === memeId ? memeData : x));

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
              <Route path="/memes/edit/:memeId" element={<EditMeme />} />
             <Route path="/create" element={<CreateMeme />} />
            </Route>

            <Route path="/memes/details/:memeId" element={<MemeDetails />} />
            <Route path="/" element={<Home />} />
            <Route path="/memes" element={<Memes />} />
            <Route path="*" element={<NotFound />} />

          </Routes>

          <Footer />
        </MemeContext.Provider>
      </div>

    </AuthContext.Provider>
  );
}

export default App;
