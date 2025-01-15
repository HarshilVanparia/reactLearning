// create a react pure functional component that will take email address as an input and print whether it is a valid email address or not.

import { useState } from "react";

function EmailValidator() {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(null);

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    setIsValid(validateEmail(inputEmail)); // Check email validity on change
  };

  return (
      <div className="card">
          
      <h2>Email Validator</h2>

      <input
        type="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="Enter your email"
      />
      <br />
      
      {isValid === null ? (
        <p>Please enter an email address.</p>
      ) : isValid ? (
        <p style={{ color: 'green' }}>The email address is valid.</p>
      ) : (
        <p style={{ color: 'red' }}>The email address is invalid.</p>
          )}
          <div className="space"></div>
    </div>
  );
}

export default EmailValidator;
