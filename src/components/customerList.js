import { useState } from "react";
import Pagination from "./pagination";
import { Card, CustomerCard } from "./styles";
import logger from "../logger";

function CustomerList({ data, onSelect }) {
  const customers = Array.from(
    new Map(
      data.map(d => [d.customerId, { id: d.customerId, name: d.customerName }])
    ).values()
  );

  const [page, setPage] = useState(0);
  const [selected, setSelected] = useState(null);

  const perPage = 5;
  const current = customers.slice(page * perPage, (page + 1) * perPage);

  const handleSelect = (id) => {
    setSelected(id);
    onSelect(id);

    logger.info({
      message: "Customer selected",
      customerId: id
    });
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);

    logger.info({
      message: "Customer pagination changed",
      page: newPage
    });
  };

  return (
    <Card>
      <h3>Customers</h3>
      {current.map(c => (
        <CustomerCard
          key={c.id}
          active={selected === c.id}
          onClick={() => handleSelect(c.id)}
        >
          {c.name}
        </CustomerCard>
      ))}
      <Pagination
        total={customers.length}
        perPage={perPage}
        currentPage={page}
        setCurrentPage={handlePageChange}
      />
    </Card>
  );
}

export default CustomerList;