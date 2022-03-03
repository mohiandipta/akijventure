import './App.css';
import Home from './pages/home';
import About from './pages/about';
import Services from './pages/services';
import Contact from './pages/contact';
import Footer from './components/footer/footer';
import Brands from './pages/brands';
import Nav from './components/nav/nav';
import Navtest from './components/navtest';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Navtest />
        <Switch>
          <Route exact path="/" >
            <Home />
          </Route>
          <Route exact path="/about" >
            <About />
          </Route>
          <Route exact path="/brands" >
            <Brands />
          </Route>
          <Route exact path="/services" >
            <Services />
          </Route>
          <Route exact path="/contact" >
            <Contact />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
