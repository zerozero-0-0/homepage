import "./App.css";
import Header from "./components/Header/Header";
import About from "./pages/About/About";
import Update from "./pages/Update/Update";
import Web from "./pages/Web/Web";
import Contest from "./pages/Contest/Contest";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";

import { Routes, Route } from "react-router";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/update" element={<Update />} />
        <Route path="/web" element={<Web />} />
        <Route path="/contest" element={<Contest />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
