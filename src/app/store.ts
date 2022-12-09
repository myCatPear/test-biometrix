import { configureStore } from '@reduxjs/toolkit';

import { filmsRequestDataReducer } from 'features/FilmsList/filmsRequestDataSlice';
import { filmsReducer } from 'features/FilmsList/filmsSlice';
import { specificFilmReducer } from 'features/SpecificFilm/SpecificFilmSlice';

export const store = configureStore({
  reducer: { filmsReducer, filmsRequestDataReducer, specificFilmReducer },
});
