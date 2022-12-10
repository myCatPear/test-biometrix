import React, { ChangeEvent, FC } from 'react';

import { useAppDispatch, useAppSelector } from 'common/hooks/app';
import {
  resetAllGenres,
  setAllGenres,
  setGenres,
} from 'features/FilmsList/filmsRequestDataSlice';

export const Genres: FC = () => {
  // Апи не содержала значений по жанрам, методом тыка, попытался найти жанры
  const dispatch = useAppDispatch();
  const getAllCheckedGenre = useAppSelector(
    state => state.filmsRequestDataReducer.genres,
  );
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
    <div>
      {DEFAULT_GENRES_VALUE.map(genre => {
        return (
          <p key={genre}>
            <input
              type="checkbox"
              onChange={onInputCheckGenreChange}
              name={genre}
              checked={getAllCheckedGenre?.includes(genre)}
            />
            {genre}
          </p>
        );
      })}
      <button type="button" onClick={onButtonShowAllGenresClick}>
        Show all
      </button>
      <button type="button" onClick={onButtonResetllGenresClick}>
        Reset
      </button>
    </div>
  );
};
