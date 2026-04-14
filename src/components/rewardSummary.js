import { useState } from "react";
import Filters from "./filters";
import TransactionList from "./transactionList";
import { calculatePoints } from "../utils/rewardCalculator";
import { getMonth, getYear } from "../utils/dateUtils";
import { Card } from "./styles";
import { MONTHS } from "../constants";
import logger from "../logger";

function RewardSummary({ data, customerId }) {
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("2025");
  const [collapsedMonths, setCollapsedMonths] = useState([]);

  const toggleMonth = (m) => {
    setCollapsedMonths((prev) => {
      const updated = prev.includes(m)
        ? prev.filter((x) => x !== m)
        : [...prev, m];

      logger.info({
        message: "Month toggle",
        month: m,
        action: prev.includes(m) ? "collapse" : "expand"
      });

      return updated;
    });
  };

  const filtered = data.filter((t) => {
    return (
      t.customerId === customerId &&
      (!month || getMonth(t.date) === Number(month)) &&
      (!year || getYear(t.date).toString() === year)
    );
  });

  const grouped = {};
  filtered.forEach((t) => {
    const key = getMonth(t.date);
    if (!grouped[key]) grouped[key] = [];
    grouped[key].push(t);
  });

  const total = Object.values(grouped).reduce(
    (sum, txns) =>
      sum + txns.reduce((s, t) => s + calculatePoints(t.amount), 0),
    0
  );

  return (
    <Card>
      <h3>Rewards Summary</h3>

      <Filters month={month} year={year} setMonth={setMonth} setYear={setYear} />

      {filtered.length === 0 ? (
        <p>No transactions found for the selected period.</p>
      ) : (
        <>
          {Object.entries(grouped).map(([m, txns]) => {
            const points = txns.reduce(
              (sum, t) => sum + calculatePoints(t.amount),
              0
            );

            const isOpen = !collapsedMonths.includes(m);

            return (
              <Card
                key={m}
                style={{ cursor: "pointer", marginBottom: "10px" }}
              >
                <div onClick={() => toggleMonth(m)}>
                  <h4>{MONTHS[Number(m) - 1]}</h4>
                  <p>Points: {points}</p>
                </div>

                {isOpen && (
                  <TransactionList transactions={txns} />
                )}
              </Card>
            );
          })}

          <h2>Total Points: {total}</h2>
        </>
      )}
    </Card>
  );
}

export default RewardSummary;