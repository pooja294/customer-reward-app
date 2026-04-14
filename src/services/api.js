export const fetchTransactions = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch("/data/transactions.json")
        .then(res => res.json())
        .then(resolve)
        .catch(reject);
    }, 1000);
  });
};