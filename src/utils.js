export const generateRandomChange = () => {
  return (Math.random() * 0.1 - 0.05);  // Valeur entre -0.05 et +0.05
};

export const calculateConversion = (amount, rate, isEUR) => {
  return isEUR ? amount * rate : amount / rate;
};
