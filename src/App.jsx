import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import CoinDetail from './components/CoinDetail/CoinDetail.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import { CoinProvider } from './context/CoinContext.jsx';
import Portfolio from './components/Portfolio/Portfolio.jsx'; 
import ProtectedRoute from './components/ProtectedRoute.jsx';
import News from './components/News/News.jsx';
import AboutUs from './components/AboutUs/AboutUs.jsx';

function App() {
  return (
    <Router>
      <CoinProvider>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/coin/:id" element={<CoinDetail />} />
            <Route path="/portfolio" element={<ProtectedRoute><Portfolio /></ProtectedRoute>} />
            <Route path="/news" element={<News />} />
            <Route path="/about" element={<AboutUs />} />
          </Routes>
        </div>
      </CoinProvider>
    </Router>
  );
}

export default App;