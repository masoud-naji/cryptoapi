import React from "react";
import _ from "lodash";
import classes from "./pagination.module.css";
//Low dash library for creating array Automaticaly

const Pagination = ({ itemsCount, pageSize, currentPage, onPageChange }) => {
  // console.log(currentPage);

  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);

  return (
    <nav aria-label="Page navigation example">
      <ul className={`pagination  ${classes.mypagination} `}>
      <li class="page-item">
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
        {pages.map((page) => (
          <li
            key={page}
            className={page === currentPage ? `page-item active` : `page-item`}
          >
            <button
              className="page-link"
              href="#"
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          </li>
        ))}
       <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
      </ul>
    </nav>
  );
};

export default Pagination;
