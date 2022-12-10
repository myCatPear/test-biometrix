import React, { ChangeEvent, FC } from 'react';

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
    <div>
      <input type="text" value={searchValue} onChange={onInputSearchValueChange} />
    </div>
  );
};
