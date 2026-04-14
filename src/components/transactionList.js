import { calculatePoints } from "../utils/rewardCalculator";
import { Card } from "./styles";

function TransactionList({ transactions }) {
  if (!transactions.length) return null;

  return (
    <Card>
      <h4>Transactions</h4>

      {transactions.map(txn => (
        <Card key={txn.transactionId}>
          <p><b>Amount:</b> ${txn.amount}</p>
          <p><b>Points:</b> {calculatePoints(txn.amount)}</p>
        </Card>
      ))}
    </Card>
  );
}

export default TransactionList;