import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import CoinDetail from './components/CoinDetail/CoinDetail.jsx';
import { CoinProvider } from './context/CoinContext.jsx';
import Portfolio from './components/Portfolio/Portfolio.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import News from './components/News/News.jsx';
import AboutUs from './components/AboutUs/AboutUs.jsx';
import { DashboardLayout } from './components/Layout/DashboardLayout';
import CoinsTable from './components/Coins/CoinsTable'; // Import
import { AuthProvider } from './context/AuthContext';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';

function App() {
  return (
    <Router>
      <AuthProvider>
        <CoinProvider>
          <DashboardLayout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/coins" element={<CoinsTable />} />
              <Route path="/coin/:id" element={<CoinDetail />} />
              <Route path="/portfolio" element={<ProtectedRoute><Portfolio /></ProtectedRoute>} />
              <Route path="/news" element={<News />} />
              <Route path="/about" element={<AboutUs />} />
            </Routes>
          </DashboardLayout>
        </CoinProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;