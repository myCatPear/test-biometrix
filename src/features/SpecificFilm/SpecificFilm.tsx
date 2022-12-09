import React, { FC, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import { fetchSpecificFilm } from './SpecificFilmSlice';

import { FIRST_ELEMENT_IN_ARRAY } from 'common/constants/common';
import { useAppDispatch, useAppSelector } from 'common/hooks/app';
import {
  getSpecificFilmCount,
  getSpecificFilmData,
  getIsFetchSpecificFilmSuccess,
} from 'common/selectors';

export const SpecificFilm: FC = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const specificFilm = useAppSelector(getSpecificFilmData)[FIRST_ELEMENT_IN_ARRAY];
  const specificFilmCount = useAppSelector(getSpecificFilmCount);
  const isFetchSpecificFilmSuccess = useAppSelector(getIsFetchSpecificFilmSuccess);
  const EMPTY_SPECIFIC_FILM_COUNT = 0;

  console.log(specificFilmCount);
  useEffect(() => {
    if (id) dispatch(fetchSpecificFilm(+id));
  }, []);

  if (!isFetchSpecificFilmSuccess) {
    return <div>Loading</div>;
  }

  if (
    isFetchSpecificFilmSuccess === true &&
    specificFilmCount === EMPTY_SPECIFIC_FILM_COUNT
  ) {
    return <div>Wrong ID</div>;
  }

  return <div>{specificFilm.title}1</div>;
};
