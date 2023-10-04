import React, { useState } from 'react';

function LenderDashboard() {
  const [confirmedPayments, setConfirmedPayments] = useState([]);
  const [loanToConfirm, setLoanToConfirm] = useState('');

  const confirmLoanPayment = () => {
    if (loanToConfirm) {
      setConfirmedPayments([...confirmedPayments, loanToConfirm]);
      setLoanToConfirm('');
    }
  };

  return (
    <div>
      <h2>Lender Dashboard</h2>
      <p>Welcome, Lender! Here is your dashboard.</p>

      <button onClick={confirmLoanPayment}>Confirm Loan Payment</button>
      <input
        type="text"
        placeholder="Enter Loan ID"
        value={loanToConfirm}
        onChange={(e) => setLoanToConfirm(e.target.value)}
      />

      <div>
        <h3>Past Payments</h3>
        <ul>
          {confirmedPayments.map((payment, index) => (
            <li key={index}>{`Payment ${index + 1} - ${payment}`}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default LenderDashboard;
