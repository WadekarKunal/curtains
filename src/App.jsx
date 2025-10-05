import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './pages/Home';
import BedSheets from './pages/BedSheets';
import Chadar from './pages/Chadar';
import Towels from './pages/Towels';
import Dhari from './pages/Dhari';
import Parda from './pages/Parda';
import HandloomProducts from './pages/HandloomProducts';
import DoorMats from './pages/DoorMats';
import PillowCovers from './pages/PillowCovers';
import Shawls from './pages/Shawls';
import Blankets from './pages/Blankets';
import CushionCovers from './pages/CushionCovers';
import ReadyPillows from './pages/ReadyPillows';
import Nighties from './pages/Nighties';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white font-sans">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bed-sheets" element={<BedSheets />} />
          <Route path="/chadar" element={<Chadar />} />
          <Route path="/towels" element={<Towels />} />
          <Route path="/dhari" element={<Dhari />} />
          <Route path="/parda" element={<Parda />} />
          <Route path="/handloom-products" element={<HandloomProducts />} />
          <Route path="/door-mats" element={<DoorMats />} />
          <Route path="/pillow-covers" element={<PillowCovers />} />
          <Route path="/shawls" element={<Shawls />} />
          <Route path="/blankets" element={<Blankets />} />
          <Route path="/cushion-covers" element={<CushionCovers />} />
          <Route path="/ready-pillows" element={<ReadyPillows />} />
          <Route path="/nighties" element={<Nighties />} />
        </Routes>
        <Contact />
        <Footer />
      </div>
    </Router>
  );
}

export default App;