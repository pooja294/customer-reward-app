import { calculatePoints } from "../utils/rewardCalculator";

function TransactionList({ transactions }) {
  if (!transactions.length) return <p>No transactions</p>;

  return (
    <div>
      <h4>Transactions</h4>
      {transactions.map(txn => (
        <div key={txn.transactionId}>
          <p>{txn.amount} → {calculatePoints(txn.amount)} points</p>
        </div>
      ))}
    </div>
  );
}

export default TransactionList;