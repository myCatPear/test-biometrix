import React, { FC, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import { BackToFilms } from '../../components';
import { SkeletonFilmLoading } from '../../components/SkeletonFilmsLoading/SkeletonFilmLoading';

import style from './SpecificFilm.module.scss';
import { SpecificFilmDescription } from './SpecificFilmDescription';
import { fetchSpecificFilm } from './SpecificFilmSlice';

import { FIRST_ELEMENT_IN_ARRAY } from 'common/constants/common';
import { useAppDispatch, useAppSelector } from 'common/hooks/app';
import {
  getSpecificFilmCount,
  getSpecificFilmData,
  getIsFetchSpecificFilmSuccess,
} from 'common/selectors';
import commonStyle from 'common/style/commonStyle.module.scss';

export const SpecificFilm: FC = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const specificFilm = useAppSelector(getSpecificFilmData)[FIRST_ELEMENT_IN_ARRAY];
  const specificFilmCount = useAppSelector(getSpecificFilmCount);
  const isFetchSpecificFilmSuccess = useAppSelector(getIsFetchSpecificFilmSuccess);
  const EMPTY_SPECIFIC_FILM_COUNT = 0;

  useEffect(() => {
    if (id) dispatch(fetchSpecificFilm(+id));
  }, []);

  if (!isFetchSpecificFilmSuccess) {
    return <SkeletonFilmLoading />;
  }

  if (
    isFetchSpecificFilmSuccess === true &&
    specificFilmCount === EMPTY_SPECIFIC_FILM_COUNT
  ) {
    return <div>Wrong ID</div>;
  }

  return (
    <div className={style.specificFilm}>
      <div className={commonStyle.container}>
        <div className={style.specificFilm__wrapper}>
          <BackToFilms />
          <SpecificFilmDescription specificFilm={specificFilm} />
        </div>
      </div>
    </div>
  );
};
