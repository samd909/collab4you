import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { HeadProvider } from "react-head";
import { AnimatePresence, motion } from "framer-motion";

import Topbar from "./components/Topbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Sitemap from "./pages/Sitemap";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageWrapper>
              <Home />
            </PageWrapper>
          }
        />
        <Route
          path="/contact"
          element={
            <PageWrapper>
              <Contact />
            </PageWrapper>
          }
        />
        <Route
          path="/services"
          element={
            <PageWrapper>
              <Services />
            </PageWrapper>
          }
        />
        <Route
          path="/privacy"
          element={
            <PageWrapper>
              <Privacy />
            </PageWrapper>
          }
        />
        <Route
          path="/tos"
          element={
            <PageWrapper>
              <Terms />
            </PageWrapper>
          }
        />
        <Route
          path="/sitemap.xml"
          element={
            <PageWrapper>
              <Sitemap />
            </PageWrapper>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

// Reusable wrapper for animation
const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -50 }}
    transition={{ duration: 0.4, ease: "easeInOut" }}
    className="flex-grow w-full mx-auto p-4"
  >
    {children}
  </motion.div>
);

function App() {
  return (
    <HeadProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Topbar />
          <AnimatedRoutes />
          <Footer />
        </div>
      </Router>
    </HeadProvider>
  );
}

export default App;
