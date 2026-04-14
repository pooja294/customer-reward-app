import { useState } from "react";
import Filters from "./filters";
import TransactionList from "./transactionList";
import { calculatePoints } from "../utils/rewardCalculator";
import { getMonth, getYear } from "../utils/dateUtils";
import { Card, CenteredHeading } from "./styles";
import { MONTHS } from "../constants";
import logger from "../logger";

function RewardSummary({ data, customerId }) {

  //last 3 months 
  const getLast3Months = () => {
    const now = new Date();
    return [0, 1, 2].map(i => {
      const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
      return {
        month: d.getMonth() + 1,
        year: d.getFullYear()
      };
    });
  };

  const last3 = getLast3Months();

  const [month, setMonth] = useState("");
  const [year, setYear] = useState(last3[0].year.toString());
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
    const txnMonth = getMonth(t.date);
    const txnYear = getYear(t.date);

    if (month) {
      return (
        t.customerId === customerId &&
        txnMonth === Number(month) &&
        txnYear.toString() === year
      );
    }

    // Default last 3 months
    return (
      t.customerId === customerId &&
      last3.some(
        (m) => m.month === txnMonth && m.year === txnYear
      )
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

      <Filters
        month={month}
        year={year}
        setMonth={setMonth}
        setYear={setYear}
      />

      {!month && <p>Showing last 3 months</p>}

      {filtered.length === 0 ? (
        <CenteredHeading>No Transactions</CenteredHeading>
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