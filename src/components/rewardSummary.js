import { useState } from "react";
import Filters from "./filters";
import TransactionList from "./transactionList";
import { calculatePoints } from "../utils/rewardCalculator";
import { getMonth, getYear } from "../utils/dateUtils";

function RewardSummary({ data, customerId }) {
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("2025");
  const [selectedTxns, setSelectedTxns] = useState([]);

  const filtered = data.filter(t => {
    return (
      t.customerId === customerId &&
      (!month || getMonth(t.date) === Number(month)) &&
      (!year || getYear(t.date).toString() === year)
    );
  });

  if (!filtered.length) return <h3>No transactions</h3>;

  const grouped = {};

  filtered.forEach(t => {
    const key = getMonth(t.date);
    if (!grouped[key]) grouped[key] = [];
    grouped[key].push(t);
  });

  let total = 0;

  return (
    <div>
      <Filters {...{ month, year, setMonth, setYear }} />

      {Object.entries(grouped).map(([m, txns]) => {
        const points = txns.reduce(
          (sum, t) => sum + calculatePoints(t.amount),
          0
        );

        total += points;

        return (
          <div key={m}>
            <h4 onClick={() => setSelectedTxns(txns)}>
              Month {m}
            </h4>
            <p>Points: {points}</p>
          </div>
        );
      })}

      <h2>Total: {total}</h2>

      <TransactionList transactions={selectedTxns} />
    </div>
  );
}

export default RewardSummary;