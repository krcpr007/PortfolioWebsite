import {
  BrowserRouter as Router,
//   Switch,
//   Route
} from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css'; 
import { useEffect, useState } from 'react';
import Projects from './component/Project/Projects'
import About from './component/About/About';
import Navbar from './component/NavBar/Navbar';
import Home from './component/Home/Home';
import Footer from './component/Footer/Footer';
import './App.css'
import Loder from './component/Loder/Loder';
function App() {
  const [loading, setloading] = useState(false);
  useEffect ( ()=>{
        setloading(true); 
        setTimeout(() => {
          setloading(false);
        }, 4000);
  },[]);
  useEffect(() => {
    Aos.init({duration:2000}); 
    
  }, []);


  return (
      <>
    { loading ? (
    <Loder/>
    )
      :(
        <>
              <Router>
               <Navbar dataAos="fade-right"  />
              {/* <Switch> */}
              {/* <Route exact path="/"> */}
                {/* <preloader/> */}
              <Home />
              {/* </Route> */}
              {/* <Route exact path="/about"> */}
              <About dataAos="fade-up" />
              {/* </Route> */}
              {/* <Route exact path="/projects"> */}
              <Projects dataAos="zoom-in" />
              {/* </Route> */}
              {/* </Switch> */}
              <Footer  dataAos="zoom-in"/>
              </Router>
              </>
      )}
      </>
  );
}

export default App;
