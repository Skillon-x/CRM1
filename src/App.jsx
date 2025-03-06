import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SalesDashboard from '../src/Pages/Dashboard/SalesDashboard/SalesDasboard';
import SalesRevenue from '../src/Pages/Dashboard/SalesDashboard/SalesRevenue';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SalesDashboard/>} />
        <Route path="/revenue" element={<SalesRevenue/>} />
      </Routes>
    </Router>
    
  );
};

export default App;