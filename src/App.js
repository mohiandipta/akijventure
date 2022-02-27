import './App.css';
import Home from './pages/home';
import About from './pages/about';
import Services from './pages/services';
import Contact from './pages/contact';
import Footer from './components/footer/footer';
import Brands from './pages/brands';
import Nav from './components/nav/nav';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <About />
      <Brands />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
