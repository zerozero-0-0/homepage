import "./App.css";
import Header from "./components/Header/Header";
import About from "./pages/About/About";
import Footer from "./components/Footer/Footer";

import { Routes, Route } from "react-router";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
