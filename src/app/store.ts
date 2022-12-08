import { configureStore } from '@reduxjs/toolkit';

import { filmsRequestDataReducer } from 'features/FilmsList/filmsRequestDataSlice';
import { filmsReducer } from 'features/FilmsList/filmsSlice';

export const store = configureStore({
  reducer: { filmsReducer, filmsRequestDataReducer },
});
