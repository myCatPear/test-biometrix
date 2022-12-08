import React, { FC, useEffect } from 'react';

import { BriefFilmInfo } from './BriefFilmInfo';
import { fetchFilms } from './filmsSlice';

import { useAppDispatch, useAppSelector } from 'common/hooks/app';
import { getFilmsData, getFilmsRequestData } from 'common/selectors';
import { SearchField } from 'components';

export const FilmsList: FC = () => {
  const dispatch = useAppDispatch();
  const filmsRequestData = useAppSelector(getFilmsRequestData);
  const filmsData = useAppSelector(getFilmsData);

  console.log(filmsData);
  useEffect(() => {
    dispatch(fetchFilms(filmsRequestData));
  }, [filmsRequestData]);

  return (
    <div>
      <SearchField />
      {filmsData.data.map(film => (
        <BriefFilmInfo key={film.id} filmData={film} />
      ))}
    </div>
  );
};
