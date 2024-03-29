
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import LoanCalculator from './LoanCalculator/LoanCalculator';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/loan-calculator" element={<LoanCalculator />} />
      </Routes>
    </Router>
  );
};


export default App;
