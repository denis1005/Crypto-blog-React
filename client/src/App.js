
import {NavbarComponent} from './Components/Navbar'
import {Footer} from './Components/Footer'
import {CryptoCards} from './Components/CryptoCards'

import './App.css';

function App() {
  return (
    <div className='App'>
    <NavbarComponent/>

     <CryptoCards/>
     
    <Footer/>
    </div>
    
  );
}

export default App;
