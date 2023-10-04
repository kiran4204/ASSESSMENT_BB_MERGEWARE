import React from 'react';

function HomePage() {
  const redirectToRegistration = (role) => {
    window.location.href = `/registration?role=${role}`;
  };

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <button onClick={() => redirectToRegistration('admin')}>Register as Admin</button>
      <button onClick={() => redirectToRegistration('borrower')}>Register as Borrower</button>
      <button onClick={() => redirectToRegistration('lender')}>Register as Lender</button>
    </div>
  );
}

export default HomePage;
