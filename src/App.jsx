import "./App.css";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";

import { Routes, Route, Link } from "react-router";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Link to="/">Home</Link>
      <Link to="/hoge">hoge</Link>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/hoge" element={<p>hello world</p>} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
