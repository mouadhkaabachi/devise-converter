import React from 'react';

const History = ({ history }) => {
  return (
    <div>
      <h3>History</h3>
      <table className="history-table">
        <thead>
          <tr>
            <th>Amount</th>
            <th>Converted</th>
            <th>Rate</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          {history.map((entry, index) => (
            <tr key={index}>
              <td>{entry.amount} {entry.isEUR ? 'EUR' : 'USD'}</td>
              <td>{entry.convertedAmount.toFixed(2)} {entry.isEUR ? 'USD' : 'EUR'}</td>
              <td>{entry.rate.toFixed(4)}</td>
              <td>{entry.isEUR ? 'EUR to USD' : 'USD to EUR'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default History;
