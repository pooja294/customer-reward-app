import { Button } from "./styles";

function Pagination({ total, perPage, currentPage, setCurrentPage }) {
  const totalPages = Math.ceil(total / perPage);

  return (
    <div>
      {[...Array(totalPages).keys()].map(n => (
        <Button
          key={n}
          active={n === currentPage}
          onClick={() => setCurrentPage(n)}
        >
          {n + 1}
        </Button>
      ))}
    </div>
  );
}

export default Pagination;