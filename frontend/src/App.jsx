import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./layout/header";
import Footer from "./layout/footer";
import Home from "./components/home";
import Contact from "./components/Contact";
import About from "./components/About";
import Service from "./components/Service";
import ServiceDetail from "./components/serviceDetail";
import Doctors from "./components/Doctors"
import ServiceDetail2 from "./components/serviceDetail2";
import SrajanWomenWellness from "./components/srajan";
import SinglaSlimming from "./components/singla";
import OPD from "./components/opd";
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
     <Route path="/services/:id" element={<ServiceDetail />} />
     <Route path="/service-detail" element={<ServiceDetail2 />} />
          <Route path='/doctors' element={<Doctors/>}/>
          <Route path='/srajan' element={<SrajanWomenWellness/>}/> 
          <Route path='/singla' element={<SinglaSlimming/>}/>   
          <Route path='/opd' element={<OPD/>}/>       {/* This must be last */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      </>
  );
}

export default App;
