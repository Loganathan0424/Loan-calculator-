
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'react-bootstrap-icons';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className='center-container'>
      <div className='header'>
        <h1>Welcome to {'\n'} My Loan Calculator App </h1>
        <p>Explore and calculate your loans with ease!</p>
      </div>

      <div className="center-button">
        <Link to="/loan-calculator">
          <button type="button" className="btn btn-success">
            Go to Loan Calculator <ArrowRight />
          </button>
        </Link>
      </div>

      <div className="additional-info">
        <p>Why choose our loan calculator?</p>
        <ul>
          <li>Easy-to-use interface</li>
          <li>Accurate calculations</li>
          <li>Quick results</li>
        </ul>
      </div>

      <div className="footer">
        <p>&copy; 2024 My Loan Calculator App</p>
      </div>
    </div>
  );
};

export default HomePage;
