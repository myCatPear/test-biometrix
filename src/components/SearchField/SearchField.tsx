import React, { ChangeEvent, FC, useEffect, useState } from 'react';

import { EMPTY_STRING } from 'common/constants';
import { useAppDispatch } from 'common/hooks/app';
import { setSearchByTitle } from 'features/FilmsList/filmsRequestDataSlice';

export const SearchField: FC = () => {
  const dispatch = useAppDispatch();
  const [searchValue, setSearchValue] = useState(EMPTY_STRING);
  const onInputSearchValueChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(event.currentTarget.value);
  };

  useEffect(() => {
    dispatch(setSearchByTitle({ title: searchValue }));
  }, [searchValue]);

  return (
    <div>
      <input type="text" value={searchValue} onChange={onInputSearchValueChange} />
    </div>
  );
};
