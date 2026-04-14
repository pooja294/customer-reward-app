import { useEffect, useState } from "react";
import { fetchTransactions } from "./services/api";
import CustomerList from "./components/customerList";
import RewardSummary from "./components/rewardSummary";
import logger from "./logger";

function App() {
  const [data, setData] = useState([]);
  const [customer, setCustomer] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTransactions()
      .then(res => {
        setData(res);
        logger.info("Data loaded");
      })
      .catch(() => logger.error("Error"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <h2>Loading...</h2>;

  return (
    <div>
      <CustomerList data={data} onSelect={setCustomer} />
      {customer && (
        <RewardSummary data={data} customerId={customer} />
      )}
    </div>
  );
}

export default App;