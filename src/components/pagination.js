function Pagination({ total, perPage, currentPage, setCurrentPage }) {
  const totalPages = Math.ceil(total / perPage);

  return (
    <div>
      {[...Array(totalPages).keys()].map(n => (
        <button key={n} onClick={() => setCurrentPage(n)}>
          {n + 1}
        </button>
      ))}
    </div>
  );
}

export default Pagination;