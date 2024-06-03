import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import App from './App';
import BlogSection from './pages/BlogSection';
import PortfolioSection from './pages/PortfolioSection';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Router >
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/blog" element={<BlogSection />} />
        <Route path="/portfolio" element={<PortfolioSection />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
