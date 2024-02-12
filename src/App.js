import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Service from './component/Service';
import Location from './component/Location';
import Footer from './component/Footer';
import Compaines from './component/Compaines';
import Guide from './component/Guide';


function App() {
  return (
    <div className="App">
     <Navbar/>
     <Home/>
     <Service />
     {/* <Location/> */}
     <Compaines />
     <Guide/>
     <Footer/>
    </div>
  );
}
 
export default App;
