export const Pagination = ({ totalPages }) => {
  return (
    <div className="btn-group">
      <button className="btn">«</button>
      <button className="btn">Pages {totalPages}</button>
      <button className="btn">»</button>
    </div>
  );
};
