const Pagination = ({ totalPages, next, perv, currentPage }) => {
  return (
    <div className="btn-group">
      <button className="btn" onClick={perv}>
        «
      </button>
      <button className="btn">
        Page {currentPage} of {totalPages}
      </button>
      <button className="btn" onClick={next}>
        »
      </button>
    </div>
  );
};

export default Pagination;
