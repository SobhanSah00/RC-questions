function Pagination({ currentPage, setCurrentPage }) {
  const handlePagination = (direction) => {
    if (direction === 'next') {
      setCurrentPage(currentPage + 1);
    } else if (direction === 'prev') {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    }
  };

  return (
    <div className="paginationContainer">
      <button className="page-btn" onClick={() => handlePagination('prev')}>
        {"<"}
      </button>
      <button className="page-btn" onClick={() => handlePagination('next')}>
        {currentPage}
      </button>
      <button className="page-btn" onClick={() => handlePagination('next')}>
        {">"}
      </button>
    </div>
  );
}

export default Pagination;