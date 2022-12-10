import React, { ChangeEvent, FC } from 'react';

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
    <div>
      <span>Count per page </span>
      <select onChange={onSelectCountPerPageChange} value={countPerPage}>
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="all">All</option>
      </select>
    </div>
  );
};
