import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./layout/header";
import Footer from "./layout/footer";
import Home from "./components/home";
import Contact from "./components/Contact";
import About from "./components/about";
import Service from "./components/Service";
import ServiceDetail from "./components/serviceDetail";
import NotFound from "./components/NotFound"; // import the 404 page

import "./App.css";
import "./index.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service />} />
          <Route path="/service-detail" element={<ServiceDetail />} />
          
          {/* This must be last */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      </>
  );
}

export default App;
