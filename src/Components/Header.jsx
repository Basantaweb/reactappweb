import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Homes from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Admin from "../pages/Admin";

function Header() {
  return (
    <>
        <Router basename="/reactappweb/">  {/* Add your subdirectory here */}
            <Navbar />
            <div className="p-6">
                <Routes>
                <Route path="" element={<Homes />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="admin" element={<Admin />} />
                </Routes>
            </div>
        </Router>
    </>
  )
}

export default Header