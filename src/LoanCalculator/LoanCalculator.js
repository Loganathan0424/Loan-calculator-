import React, { useState } from 'react';
import './LoanCalculator.css';  



const LoanCalculator = () => { 
  const [name , setName]=useState('');
  const [principal, setPrincipal] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState(null); 
  const [totalInterest, setTotalInterest] = useState(null);
  const [totalPayment, setTotalPayment] = useState(null); 
  
  

  const calculateLoan = () => {
    const monthlyInterestRate = interestRate / 1200;
    const numberOfPayments = loanTerm * 12;

    const monthlyPaymentValue =
      (principal * monthlyInterestRate) /
      (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments)); 

    
    const totalInterestValue = (monthlyPaymentValue * numberOfPayments) - principal;
    const totalPaymentValue = monthlyPaymentValue * numberOfPayments; 

    
    setMonthlyPayment(monthlyPaymentValue.toFixed(2)); 
    setTotalInterest(totalInterestValue.toFixed(2));
    setTotalPayment(totalPaymentValue.toFixed(2)); 

  

  }; 

  const resetForm = () => { 
    setPrincipal('');  
    setName('');
    setInterestRate('');
    setLoanTerm('');
    setMonthlyPayment(null); 
    setTotalInterest(null);
    setTotalPayment(null);
  }; 

  const cancel = () => {
    setPrincipal(''); 
    setName('');
    setInterestRate('');
    setLoanTerm('');
   
  }; 

  
    

  return ( 
    

    <div className='header'> 
    
      <h1 >Loan Calculator</h1> 

      <label className='box'> 
        
        Enter Your Name  : 
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <label className='box'> 
        
        Loan Amount (₹)  :
        <input
          type="number"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
        />
      </label>

      <label className='box'>
        Annual Interest Rate (%)  :
        <input
          type="number"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
        />
      </label>

      <label className='box'>
        Loan Term (years) :
        <input
          type="number"
          value={loanTerm}
          onChange={(e) => setLoanTerm(e.target.value)}
        />
      </label> 


     <div className='button-container'> 

     <button  type="button" class="btn btn-warning"onClick={(resetForm) }>Reset</button> 


      <button type="button" class="btn btn-success"onClick={calculateLoan}>Calculate</button>  


      <button type="button" class="btn btn-danger"onClick={cancel }>Canel</button>

      
    </div>


      {monthlyPayment && (
        <div > 
          <h3 className='result'> Hello Mr/Mrs      :{name}</h3>

          <h3 className='result'>Monthly Payment :  ₹{monthlyPayment}</h3> 

          <h3 className='result'>Total Interest  :  ₹{totalInterest}</h3> 

          <h3 className='result'>Total Payment   :  ₹{totalPayment}</h3> 

          
        </div>
      )}
    </div>
  );
};

export default LoanCalculator;