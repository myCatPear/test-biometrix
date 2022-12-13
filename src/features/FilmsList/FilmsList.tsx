import React, { FC, useEffect, useState } from 'react';

import { Pagination } from '../../components';

import { BriefFilmInfo } from './BriefFilmInfo';
import { FilmsFilter } from './FilmsFilter';
import style from './FilmsList.module.scss';
import { setCurrentPage } from './filmsRequestDataSlice';
import { fetchAllFilms, fetchFilms } from './filmsSlice';

import { useAppDispatch, useAppSelector } from 'common/hooks/app';
import { getFilmsData, getFilmsRequestData, getIsFetchFilms } from 'common/selectors';
import commonStyle from 'common/style/commonStyle.module.scss';
import { resetSpecificFilmState } from 'features/SpecificFilm/SpecificFilmSlice';

export const FilmsList: FC = () => {
  const dispatch = useAppDispatch();
  const filmsRequestData = useAppSelector(getFilmsRequestData);
  const filmsData = useAppSelector(getFilmsData);
  const isFetchFilms = useAppSelector(getIsFetchFilms);
  const countPerPage = useAppSelector(state => state.filmsRequestDataReducer.page_size);
  const currentPage = useAppSelector(state => state.filmsRequestDataReducer.page);
  const [isFetchPortion, setIsLoadPortion] = useState(false);
  const maxCountPerPage = 100;
  // @ts-ignore
  const lastCountryIndex = currentPage * countPerPage + countPerPage - 1;
  // @ts-ignore
  const firstCountryIndex = lastCountryIndex - countPerPage + 1;
  const currentFilmsData = filmsData.data.slice(firstCountryIndex, lastCountryIndex);

  const setPagePaginate = (page: number): void => {
    dispatch(setCurrentPage({ value: page - 1 }));
  };

  console.log(currentFilmsData);
  console.log(firstCountryIndex);
  console.log(lastCountryIndex);
  useEffect(() => {
    dispatch(fetchAllFilms(filmsRequestData));
  }, []);

  useEffect(() => {
    if (countPerPage !== maxCountPerPage) dispatch(fetchFilms(filmsRequestData));

    dispatch(resetSpecificFilmState());
  }, [filmsRequestData]);

  useEffect(() => {
    if (isFetchPortion) {
      dispatch(fetchAllFilms(filmsRequestData));
    }
    setIsLoadPortion(false);
  }, [isFetchPortion]);

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);

    return () => {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, [countPerPage, currentPage]);

  const scrollHandler = (event: Event): void => {
    if (countPerPage === maxCountPerPage) {
      if (
        // @ts-ignore
        event.target.documentElement.scrollHeight -
          // @ts-ignore
          (event.target.documentElement.scrollTop + window.innerHeight) <
        // eslint-disable-next-line no-magic-numbers
        100
      ) {
        // @ts-ignore
        dispatch(setCurrentPage({ value: currentPage + 1 }));
        setIsLoadPortion(true);
      }
    }
  };

  return (
    <div className={style.filmsList}>
      <div className={commonStyle.container}>
        <div className={style.filmsList__wrapper}>
          <FilmsFilter />
          <div className={style.filmsList__list}>
            {isFetchFilms && countPerPage !== maxCountPerPage
              ? currentFilmsData.map(film => (
                  <BriefFilmInfo key={film.id} filmData={film} />
                ))
              : filmsData.data.map(film => (
                  <BriefFilmInfo key={film.id} filmData={film} />
                ))}
            <Pagination
              itemsPerPage={countPerPage}
              totalItems={filmsData.data_size}
              onLiSetPaginatePageClickHandler={setPagePaginate}
              currentPage={currentPage}
            />
            {filmsData.data.length === 0 && !isFetchFilms && <div>No result</div>}
          </div>
        </div>
      </div>
    </div>
  );
};
