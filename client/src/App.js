import {Route,Routes } from 'react-router-dom'
import {NavbarComponent} from './Components/Navbar'
import {Footer} from './Components/Footer'
import {Home} from './Components/Home/Home'


import './App.css';

function App() {
  return (
    <div className='App'> 
    <NavbarComponent/>
     <Routes>
      <Route path="/" element={ <Home/>}/>
     </Routes>
     
    <Footer/>
    </div>
    
  );
}

export default App;
