import React from 'react';

const RateDisplay = ({ rate }) => {
  return (
    <div className="rate-display">
      <p>Current EUR/USD Rate: {rate.toFixed(4)}</p>
    </div>
  );
};

export default RateDisplay;
