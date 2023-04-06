import './App.css';
import About from './components/About/About';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import SNavbar from './components/SalonNav/SNavbar';
import SalonRegister from './components/SalonRegister/SalonRegister';

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      {/* <Home/> */}
      {/* <About/> */}
      {/* <SalonRegister/> */}
      <SNavbar/>
    </div>
  );
}

export default App;
