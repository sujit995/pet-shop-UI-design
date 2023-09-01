import "./App.scss";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import Navbar from "./components/Navbar";
import Contact from "./pages/contact/Contact";
import Footer from "./components/Footer";
import About from "./pages/about/About";
import Services from "./pages/services/Services";
import Shop from "./pages/shop/Shop";
import Plan from "./pages/plan/Plan";
import Cart from "./pages/cart/Cart";
import SigninPage from "./pages/signinpage/SigninPage";
import SignupPage from "./pages/signinpage/SignupPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/shop" element={<Shop />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/plan" element={<Plan />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/signin" element={<SigninPage />} />
        <Route exact path="/signup" element={<SignupPage/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
