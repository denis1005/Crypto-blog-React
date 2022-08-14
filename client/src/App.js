import {Route,Routes } from 'react-router-dom'
import {NavbarComponent} from './Components/Navbar'
import {Footer} from './Components/Footer'
import {Home} from './Components/Home/Home'
import { Login } from './Components/Login/Login';
import { Register } from './Components/Register/Register';

import './App.css';



function App() {
  return (
    <div className='App'> 
    <NavbarComponent/>
     <Routes>
      <Route path="/" element={ <Home/>}/>
      <Route path="/login" element={ <Login/>}/>
      <Route path="/register" element={ <Register/>}/>
     </Routes>
     
    <Footer/>
    </div>
    
  );
}

export default App;
