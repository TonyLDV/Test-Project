import React from "react";

import "./Pagination.scss";

const Pagination = ({ maxPage, onPageChange, currentPage }) => {
  const pages = new Array(maxPage).fill(maxPage);

  return (
    <div className="pagination">
      {pages.map((p, index) => {
        const page = index + 1;

        return (
          <button
            className={
              currentPage === page
                ? "pagination__item__active"
                : "pagination__item"
            }
            key={page}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
