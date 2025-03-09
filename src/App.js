import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MyNavbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RemovalGuides from "./pages/RemovalGuides";
import Shafirewall from "./pages/Shafirewall";
import Boramae from "./pages/Boramae";
import Roxaq from "./pages/Roxaq";
import Tutorial from "./pages/Tutorial";
import News from "./pages/News";
import Blog from "./pages/Blog";
import TopAntivirus from "./pages/TopAntivirus";
import TermsOfUse from "./pages/TermsOfUse";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";

const App = () => {
  return (
    <Router>
      <div id="root">
        <MyNavbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detect-malware" element={<Home />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/removal-guides" element={<RemovalGuides />} />
            <Route path="/removal-guides/shafirewall" element={<Shafirewall />} />
            <Route path="/removal-guides/boramae" element={<Boramae />} />
            <Route path="/removal-guides/roxaq" element={<Roxaq />} />
            <Route path="/tutorial" element={<Tutorial />} />
            <Route path="/news" element={<News />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/top-antivirus" element={<TopAntivirus />} />
            <Route path="/terms-of-use" element={<TermsOfUse />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
