import React, { ChangeEvent, FC } from 'react';

import style from './Genres.module.scss';

import { useAppDispatch, useAppSelector } from 'common/hooks/app';
import { getAllCheckedGenres } from 'common/selectors';
import {
  resetAllGenres,
  setAllGenres,
  setGenres,
} from 'features/FilmsList/filmsRequestDataSlice';

export const Genres: FC = () => {
  // Апи не содержала значений по жанрам, методом тыка, попытался найти жанры
  const dispatch = useAppDispatch();
  const allCheckedGenre = useAppSelector(getAllCheckedGenres);
  const DEFAULT_GENRES_VALUE = [
    'Comedy',
    'Family',
    'Romance',
    'Fantasy',
    'Drama',
    'Adventure',
    'Action',
    'Science',
    'Fiction',
    'Animation',
    'Thriller',
    'Crime',
    'Documentary',
    'War',
    'History',
    'Music',
    'Mystery',
    'Horror',
  ];
  const onButtonShowAllGenresClick = (): void => {
    dispatch(setAllGenres({ value: DEFAULT_GENRES_VALUE }));
  };
  const onInputCheckGenreChange = (event: ChangeEvent<HTMLInputElement>): void => {
    dispatch(setGenres({ genre: event.currentTarget.name }));
  };

  const onButtonResetllGenresClick = (): void => {
    dispatch(resetAllGenres());
  };

  return (
    <div className={style.genres}>
      <div className={style.genres__list}>
        {DEFAULT_GENRES_VALUE.map(genre => {
          return (
            <p key={genre}>
              <input
                type="checkbox"
                onChange={onInputCheckGenreChange}
                name={genre}
                checked={allCheckedGenre?.includes(genre)}
              />
              {genre}
            </p>
          );
        })}
      </div>

      <div className={style.genres__buttons}>
        <button type="button" onClick={onButtonShowAllGenresClick}>
          Show all
        </button>
        <button type="button" onClick={onButtonResetllGenresClick}>
          Reset
        </button>
      </div>
    </div>
  );
};
