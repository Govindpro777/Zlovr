import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Home from "./Home";
import About from "./About";
import Safety from "./components/Saftey";  
import Support from "./components/Support";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/safety" element={<Safety />} />  
          <Route path="/support" element={<Support />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
