import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { EMPTY_STRING } from 'common/constants/common';
import { FilmsRequestDataType } from 'common/types/API/Films';

const DEFAULT_PAGE_NUMBER = 0;
const DEFAULT_PAGE_SIZE = 10;

const initialState: FilmsRequestDataType = {
  page: DEFAULT_PAGE_NUMBER,
  page_size: DEFAULT_PAGE_SIZE,
};

export const filmsRequestDataSlice = createSlice({
  name: 'films/requestData',
  initialState,
  reducers: {
    setSearchByTitle(state, action: PayloadAction<{ title: string }>) {
      if (action.payload.title === EMPTY_STRING) {
        delete state.search;
      } else state.search = action.payload.title;
    },
  },
});

export const filmsRequestDataReducer = filmsRequestDataSlice.reducer;

export const { setSearchByTitle } = filmsRequestDataSlice.actions;
