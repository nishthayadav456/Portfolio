import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Header'
import Home from './Component/Home'
import About from './Component/About';
import Contact from './Component/Contact';
import Playlist from './Component/Playlist'
import Footer from './Component/Footer'
import { Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div>
  <Header/>
  <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/contact" element={<Contact/>}/>
<Route path="/playlist" element={<Playlist/>}/>

  </Routes>
  <Footer/>
    </div>
  );
}

export default App;
