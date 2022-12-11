import React, { ChangeEvent, FC } from 'react';

import style from './SearchField.module.scss';

import { useAppDispatch, useAppSelector } from 'common/hooks/app';
import { getSearchValue } from 'common/selectors';
import { setSearchByValue } from 'features/FilmsList/filmsRequestDataSlice';

export const SearchField: FC = () => {
  const dispatch = useAppDispatch();
  const searchValue = useAppSelector(getSearchValue);
  const onInputSearchValueChange = (event: ChangeEvent<HTMLInputElement>): void => {
    dispatch(setSearchByValue({ value: event.currentTarget.value }));
  };

  return (
    <div className={style.searchField}>
      <span>Search any coincidence: </span>
      <input type="text" value={searchValue} onChange={onInputSearchValueChange} />
    </div>
  );
};
