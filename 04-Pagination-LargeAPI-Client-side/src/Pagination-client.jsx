import React, { useState, useEffect } from "react";
import "./index.css";

const PaginationClient = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const postsPerPage = 10;

  // Fetch API only once
  useEffect(() => {
    const fetchAPI = async () => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
      const val = await res.json();
      setData(val);
    };
    fetchAPI();
  }, []);

  // Pagination slice logic
  const lastIndex = page * postsPerPage;
  const firstIndex = lastIndex - postsPerPage;
  const currdata = data.slice(firstIndex, lastIndex);

  const totalPages = Math.ceil(data.length / postsPerPage);

  return (
    <div className="pagination-container">
      <h4>Pagination of Data</h4>

      <div className="Tiles">
        {currdata.length > 0 ? (
          currdata.map((mp) => (
            <div className="tiles-item" key={mp.id}>
              <p>{mp.title}</p>
              <p>{mp.body}</p>
            </div>
          ))
        ) : (
          <div className="empty-state">
            <p>Loading data...</p>
          </div>
        )}
      </div>

      <div className="pagination-controls">
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          ← Prev
        </button>

        <div className="page-indicator">
          {page} / {totalPages}
        </div>

        <button
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages}
        >
          Next →
        </button>
      </div>
    </div>
  );
};

export default PaginationClient;
