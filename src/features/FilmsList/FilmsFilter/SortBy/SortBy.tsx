import React, { ChangeEvent, FC } from 'react';

import style from './SortBy.module.scss';

import { useAppDispatch, useAppSelector } from 'common/hooks/app';
import { getCurrentSortField, getCurrentSortOrder } from 'common/selectors';
import { FilmsSortField, SortOrder } from 'common/types/API/Films';
import {
  setFilmSortOrder,
  setFilmSortValue,
} from 'features/FilmsList/filmsRequestDataSlice';

export const SortBy: FC = () => {
  const dispatch = useAppDispatch();
  const currentSortValue = useAppSelector(getCurrentSortField);
  const currentSortOrder = useAppSelector(getCurrentSortOrder);
  const sortValue: FilmsSortField[] = [
    'original_language',
    'budget',
    'imdb_id',
    'popularity',
    'revenue',
    'runtime',
    'release_date',
    'status',
    'vote_count',
    'vote_average',
  ];

  const onSelectSetFilmSortValueChange = (
    event: ChangeEvent<HTMLSelectElement>,
  ): void => {
    dispatch(setFilmSortValue({ value: event.currentTarget.value as FilmsSortField }));
  };

  const onSelectSetFilmSortOrderChange = (
    event: ChangeEvent<HTMLSelectElement>,
  ): void => {
    dispatch(setFilmSortOrder({ value: event.currentTarget.value as SortOrder }));
  };

  return (
    <div className={style.sortBy}>
      <div>
        <span>Sort by</span>
        <select value={currentSortValue} onChange={onSelectSetFilmSortValueChange}>
          {sortValue.map(value => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
      </div>
      <div>
        <span>Order</span>
        <select value={currentSortOrder} onChange={onSelectSetFilmSortOrderChange}>
          <option value="asc">ascending order</option>
          <option value="desc">descending order</option>
        </select>
      </div>
    </div>
  );
};
