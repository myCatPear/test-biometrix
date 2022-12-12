import React, { ChangeEvent, FC } from 'react';

import style from './CountPerPage.module.scss';

import { useAppDispatch, useAppSelector } from 'common/hooks/app';
import { getPageSize } from 'common/selectors';
import { setCountPerPage } from 'features/FilmsList/filmsRequestDataSlice';

export const CountPerPage: FC = () => {
  const dispatch = useAppDispatch();
  const countPerPage = useAppSelector(getPageSize);

  const onSelectCountPerPageChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    dispatch(setCountPerPage({ count: +event.currentTarget.value }));
  };

  return (
    <div className={style.countPerPage}>
      <span>Count per page </span>
      <select onChange={onSelectCountPerPageChange} value={countPerPage}>
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="100">All</option>
      </select>
    </div>
  );
};
