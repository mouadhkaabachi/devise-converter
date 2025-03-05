import React from 'react';

const CurrencyConverter = ({ amount, setAmount, handleConversion, isEUR, currentConversion }) => {
  const handleChange = (event) => {
    setAmount(event.target.value);
  };

  return (
    <div>
      <input
        type="number"
        value={amount}
        onChange={handleChange}
        placeholder={isEUR ? "Enter amount in EUR" : "Enter amount in USD"}
      />
      <button onClick={() => handleConversion(amount)}>Convert</button>
      <p>
        Converted Amount: {currentConversion.toFixed(2)} {isEUR ? 'USD' : 'EUR'}
      </p>
    </div>
  );
};

export default CurrencyConverter;
