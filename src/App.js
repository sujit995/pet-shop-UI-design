import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Shop from './components/Shop';
import Services from './components/Services';
import Plan from './components/Plan';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Home />
      <About />
      <Shop />
      <Services />
      <Plan />
      <Contact />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
