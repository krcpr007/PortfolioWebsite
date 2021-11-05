import {
  BrowserRouter as Router,
//   Switch,
//   Route
} from "react-router-dom";
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
  return (
      <div> 
    { loading ? (
    <Loder/>
    )
      :(
        <>
              <Router>
               <Navbar />
              {/* <Switch> */}
              {/* <Route exact path="/"> */}
                {/* <preloader/> */}
              <Home />
              {/* </Route> */}
              {/* <Route exact path="/about"> */}
              <About id="#about" />
              {/* </Route> */}
              {/* <Route exact path="/projects"> */}
              <Projects />
              {/* </Route> */}
              {/* </Switch> */}
              <Footer />
              </Router>
              </>
      )}
      </div>
  );
}

export default App;
