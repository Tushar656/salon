import './App.css';
import About from './components/About/About';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Contact from './components/Contact/Contact';
import Navbar from './components/Navbar/Navbar';
import SNavbar from './components/SalonNav/SNavbar';
import SalonRegister from './components/SalonRegister/SalonRegister';

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Contact/>
      {/* <Login/> */}
      {/* <Register/> */}
      {/* <SalonRegister/> */}
      {/* <SNavbar/> */}
    </div>
  );
}

export default App;
