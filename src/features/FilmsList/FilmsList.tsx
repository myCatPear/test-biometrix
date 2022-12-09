import React, { FC, useEffect } from 'react';

import { BriefFilmInfo } from './BriefFilmInfo';
import style from './FilmsList.module.scss';
import { fetchFilms } from './filmsSlice';

import { useAppDispatch, useAppSelector } from 'common/hooks/app';
import { getFilmsData, getFilmsRequestData } from 'common/selectors';
import commonStyle from 'common/style/commonStyle.module.scss';
import { Pagination } from 'components';
import { resetSpecificFilmState } from 'features/SpecificFilm/SpecificFilmSlice';

export const FilmsList: FC = () => {
  const dispatch = useAppDispatch();
  const filmsRequestData = useAppSelector(getFilmsRequestData);
  const filmsData = useAppSelector(getFilmsData);

  useEffect(() => {
    dispatch(fetchFilms(filmsRequestData));
    dispatch(resetSpecificFilmState());
  }, [filmsRequestData]);

  return (
    <div className={style.filmsList}>
      <div className={commonStyle.container}>
        <div className={style.filmsList__wrapper}>
          {filmsData.data.map(film => (
            <BriefFilmInfo key={film.id} filmData={film} />
          ))}
        </div>
        <Pagination />
      </div>
    </div>
  );
};
