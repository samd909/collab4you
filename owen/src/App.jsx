import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HeadProvider, Title, Meta } from 'react-head';

import Topbar from "./components/Topbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Services from "./pages/Services";

function App() {
  return (
    <HeadProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Topbar />
          <div className="flex-grow w-full mx-auto p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/services" element={<Services />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </HeadProvider>

  );
}

export default App;
