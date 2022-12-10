import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { EMPTY_STRING } from 'common/constants/common';
import { FilmsRequestDataType } from 'common/types/API/Films';

const DEFAULT_PAGE_NUMBER = 0;
const DEFAULT_PAGE_SIZE = 10;
const DEFAULT_SEARCH_VALUE = EMPTY_STRING;
const DEFAULT_IS_ADULT_CONTENT = false;

const initialState: FilmsRequestDataType = {
  page: DEFAULT_PAGE_NUMBER,
  page_size: DEFAULT_PAGE_SIZE,
  search: DEFAULT_SEARCH_VALUE,
  adult: DEFAULT_IS_ADULT_CONTENT,
};

export const filmsRequestDataSlice = createSlice({
  name: 'films/requestData',
  initialState,
  reducers: {
    setSearchByValue(state, action: PayloadAction<{ value: string }>) {
      if (action.payload.value === EMPTY_STRING) {
        delete state.search;
      } else state.search = action.payload.value;
    },
    setCountPerPage(state, action: PayloadAction<{ count: number }>) {
      state.page_size = action.payload.count;
    },
    setIsAdultContent(state, action: PayloadAction<{ value: boolean }>) {
      state.adult = action.payload.value;
    },
    setMinBudget(state, action: PayloadAction<{ value: number }>) {
      state.budget_min = action.payload.value;
    },
    setMaxBudget(state, action: PayloadAction<{ value: number }>) {
      state.budget_max = action.payload.value;
    },
    resetAllBudget(state) {
      delete state.budget_min;
      delete state.budget_max;
    },
    setGenres(state, action: PayloadAction<{ genre: string }>) {
      const currentGenre = action.payload.genre;

      if (state.genres) {
        if (state.genres.includes(currentGenre)) {
          const index = state.genres.indexOf(currentGenre);

          state.genres.splice(index, 1);
        } else {
          state.genres.push(currentGenre);
        }
      } else {
        state.genres = [action.payload.genre];
      }
      if (state.genres.length === 0) delete state.genres;
    },
    setAllGenres(state, action: PayloadAction<{ value: string[] }>) {
      state.genres = action.payload.value;
    },
    resetAllGenres(state) {
      delete state.genres;
    },
  },
});

export const filmsRequestDataReducer = filmsRequestDataSlice.reducer;

export const {
  setSearchByValue,
  setCountPerPage,
  setIsAdultContent,
  setMinBudget,
  setMaxBudget,
  resetAllBudget,
  setGenres,
  resetAllGenres,
  setAllGenres,
} = filmsRequestDataSlice.actions;
