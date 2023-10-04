import React, { useState } from 'react';

function BorrowerDashboard() {
  const [loanRequests, setLoanRequests] = useState([]);
  const [loanRequest, setLoanRequest] = useState('');

  const requestLoan = () => {
    if (loanRequest) {
      setLoanRequests([...loanRequests, loanRequest]);
      setLoanRequest('');
    }
  };

  return (
    <div>
      <h2>Borrower Dashboard</h2>
      <p>Welcome, Borrower! Here is your dashboard.</p>

      <button onClick={requestLoan}>Request Loan</button>
      <input
        type="text"
        placeholder="Enter Loan Request"
        value={loanRequest}
        onChange={(e) => setLoanRequest(e.target.value)}
      />

      <div>
        <h3>Past Loans</h3>
        <ul>
          {loanRequests.map((request, index) => (
            <li key={index}>{`Loan ${index + 1} - ${request}`}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default BorrowerDashboard;
