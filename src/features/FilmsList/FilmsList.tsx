import React, { FC, useEffect } from 'react';

import { SkeletonFilmLoading } from '../../components/SkeletonFilmsLoading/SkeletonFilmLoading';

import { BriefFilmInfo } from './BriefFilmInfo';
import { FilmsFilter } from './FilmsFilter';
import style from './FilmsList.module.scss';
import { fetchFilms } from './filmsSlice';

import { useAppDispatch, useAppSelector } from 'common/hooks/app';
import { getFilmsData, getFilmsRequestData, getIsFetchFilms } from 'common/selectors';
import commonStyle from 'common/style/commonStyle.module.scss';
import { resetSpecificFilmState } from 'features/SpecificFilm/SpecificFilmSlice';

export const FilmsList: FC = () => {
  const dispatch = useAppDispatch();
  const filmsRequestData = useAppSelector(getFilmsRequestData);
  const filmsData = useAppSelector(getFilmsData);
  const isFetchFilms = useAppSelector(getIsFetchFilms);

  useEffect(() => {
    dispatch(fetchFilms(filmsRequestData));
    dispatch(resetSpecificFilmState());
  }, [filmsRequestData]);

  return (
    <div className={style.filmsList}>
      <div className={commonStyle.container}>
        <div className={style.filmsList__wrapper}>
          <FilmsFilter />
          <div className={style.filmsList__list}>
            {isFetchFilms ? (
              <SkeletonFilmLoading />
            ) : (
              filmsData.data.map(film => <BriefFilmInfo key={film.id} filmData={film} />)
            )}
            {filmsData.data.length === 0 && !isFetchFilms && <div>No result</div>}
          </div>
        </div>
      </div>
    </div>
  );
};
