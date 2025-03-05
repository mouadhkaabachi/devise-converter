import React from 'react';

const Switch = ({ isEUR, setIsEUR }) => {
  const toggleSwitch = () => {
    setIsEUR(!isEUR);
  };

  return (
    <div className="switch-container">
      <label>{isEUR ? 'EUR to USD' : 'USD to EUR'}</label>
      <input type="checkbox" checked={!isEUR} onChange={toggleSwitch} />
    </div>
  );
};

export default Switch;
