import { useEffect, useState } from "react";
import { fetchTransactions } from "./services/api";
import CustomerList from "./components/customerList";
import RewardSummary from "./components/rewardSummary";
import logger from "./logger";
import { Container, Grid, Section, Title } from "./components/styles";

function App() {
  const [data, setData] = useState([]);
  const [customer, setCustomer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTransactions()
      .then((res) => {
        setData(res);
        logger.info({ message: "Customer Data loaded" });
      })
      .catch((err) => {
        logger.error("Failed to fetch customer Data", err);
        setError("Unable to load data. Please try again later.");
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <h2>Loading...</h2>;

  if (error) {
    return (
      <Container>
        <Title>Customer Rewards Dashboard</Title>
        <h3 style={{ color: "red" }}>{error}</h3>
        <button onClick={() => window.location.reload()}>
          Retry
        </button>
      </Container>
    );
  }

  return (
    <Container>
      <Title>Customer Rewards Dashboard</Title>

      <Grid>
        <Section>
          <CustomerList data={data} onSelect={setCustomer} />
        </Section>

        <Section>
          {customer ? (
            <RewardSummary data={data} customerId={customer} />
          ) : (
            <h3>Select a customer to view rewards</h3>
          )}
        </Section>
      </Grid>
    </Container>
  );
}

export default App;