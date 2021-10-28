// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";
import Projects from './component/Project/Projects'
import About from './component/About/About';
import Navbar from './component/NavBar/Navbar';
import Home from './component/Home/Home';
import Footer from './component/Footer/Footer'
function App() {
  return (
    <>
      {/* <Router> */}
        <Navbar />
        {/* <Switch> */}
          {/* <Route exact path="/"> */}
          <Home/>
          {/* </Route> */}
          {/* <Route exact path="/about"> */}
            <About />
          {/* </Route> */}
          {/* <Route exact path="/projects"> */}
            <Projects/>
          {/* </Route> */}
        {/* </Switch> */}
        <Footer/>
      {/* </Router> */}
    </>
  );
}

export default App;
