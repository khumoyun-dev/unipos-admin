import React from "react";
import "./Pagination.scss";
import { usePagination, DOTS } from "../../hooks/usePagination";
import Arrow from "../../assets/Svgs/Arrow";

const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange?.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange
    ? paginationRange[paginationRange.length - 1]
    : 1;
  return (
    <>
      <ul className="pagination">
        <li
          className={
            currentPage === 1
              ? "pagination__item pagination__item--link pagination__item--disabled"
              : "pagination__item pagination__item--link"
          }
          style={{ cursor: currentPage === 1 ? "not-allowed" : "pointer" }}
          onClick={() => {
            currentPage !== 1 && onPrevious();
          }}
        >
          <Arrow className="pagination__item--link-icon pagination__item--link-icon--prev" />
        </li>
        {paginationRange &&
          paginationRange.map((pageNumber) => {
            if (pageNumber === DOTS) {
              return (
                <li
                  key={pageNumber}
                  className="pagination__item pagination__item--dots"
                >
                  <div className="pagination-link">&#8230;</div>
                </li>
              );
            }

            return (
              <li
                key={pageNumber}
                className={
                  pageNumber === currentPage
                    ? "pagination__item pagination__item--active"
                    : "pagination__item"
                }
                onClick={() => onPageChange(pageNumber)}
              >
                {pageNumber}
              </li>
            );
          })}
        <li
          className={
            currentPage === lastPage
              ? "pagination__item pagination__item--link pagination__item--disabled"
              : "pagination__item pagination__item--link"
          }
          style={{
            cursor: currentPage === lastPage ? "not-allowed" : "pointer",
          }}
          onClick={() => {
            currentPage !== lastPage && onNext();
          }}
        >
          <Arrow className="pagination__item--link-icon pagination__item--link-icon--next" />
        </li>
      </ul>
    </>
  );
};

export default Pagination;