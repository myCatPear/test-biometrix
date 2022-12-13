import React, { FC } from 'react';

import style from './Pagination.module.scss';

interface IPagination {
  itemsPerPage: any;
  totalItems: any;
  onLiSetPaginatePageClickHandler: (page: number) => void;
  currentPage?: number;
}

export const Pagination: FC<IPagination> = props => {
  const { itemsPerPage, totalItems, onLiSetPaginatePageClickHandler, currentPage } =
    props;
  const pageNumbers = [];

  const maxPageNumber = Math.ceil(totalItems / itemsPerPage);

  for (let i = 1; i <= maxPageNumber; i += 1) {
    pageNumbers.push(i);
  }

  return (
    <div className={style.pagination}>
      <ul className={style.pagination__list}>
        {pageNumbers.map(number => {
          return (
            <li
              role="presentation"
              key={number}
              className={`${style.pagination__item} ${
                currentPage && currentPage + 1 === number && style.pagination__item_active
              }`}
              onClick={() => onLiSetPaginatePageClickHandler(number)}
            >
              {number}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
