import React, { useState, useEffect } from 'react';
import CurrencyConverter from './components/CurrencyConverter';
import History from './components/History';
import Switch from './components/Switch';
import RateDisplay from './components/RateDisplay';
import { generateRandomChange, calculateConversion } from './utils';
import './App.css';

const App = () => {
  const [rate, setRate] = useState(1.1);  // Taux de change EUR/USD
  const [history, setHistory] = useState([]);
  const [amount, setAmount] = useState(0);
  const [isEUR, setIsEUR] = useState(true);
  const [currentConversion, setCurrentConversion] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRate((prevRate) => prevRate + generateRandomChange());
    }, 3000);

    return () => clearInterval(interval);  // Nettoyage de l'intervalle lors du démontage du composant
  }, []);

  const handleConversion = (amount) => {
    const converted = calculateConversion(amount, rate, isEUR);
    setCurrentConversion(converted);
    addToHistory(amount, converted);
  };

  const addToHistory = (amount, convertedAmount) => {
    const newHistory = [
      ...history,
      { amount, convertedAmount, rate, isEUR },
    ];
    if (newHistory.length > 5) newHistory.shift();
    setHistory(newHistory);
  };

  return (
    <div className="app-container">
      <h1>Currency Converter</h1>
      <RateDisplay rate={rate} />

      <CurrencyConverter
        amount={amount}
        setAmount={setAmount}
        handleConversion={handleConversion}
        isEUR={isEUR}
        currentConversion={currentConversion}
      />
      <Switch isEUR={isEUR} setIsEUR={setIsEUR} />
      <History history={history} />
    </div>
  );
};

export default App;
