import { useState } from "react";
import Pagination from "./pagination";

function CustomerList({ data, onSelect }) {
  const customers = [...new Set(data.map(d => d.customerId))];

  const [page, setPage] = useState(0);
  const perPage = 5;

  const current = customers.slice(page * perPage, (page + 1) * perPage);

  return (
    <div>
      <h3>Customers</h3>

      {current.map(c => (
        <button key={c} onClick={() => onSelect(c)}>
          {c}
        </button>
      ))}

      <Pagination
        total={customers.length}
        perPage={perPage}
        currentPage={page}
        setCurrentPage={setPage}
      />
    </div>
  );
}

export default CustomerList;