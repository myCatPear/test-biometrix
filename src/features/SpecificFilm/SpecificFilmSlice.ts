import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { filmsAPI } from 'api/filmsAPI';
import { FilmsResponseType } from 'common/types/API/Films';

const initialState: FilmsResponseType = {
  ok: false,
  data_size: 0,
  data: [],
};

export const fetchSpecificFilm = createAsyncThunk(
  'films/fetchSpecificFilm',
  async (id: number) => {
    try {
      const res = await filmsAPI.fetchAllFilms({ ids: [id] });

      return res.data;
    } catch (error) {
      console.log(error);
    }
  },
);

export const specificFilmSlice = createSlice({
  name: 'specificFilmSlice',
  initialState,
  reducers: {
    resetSpecificFilmState(state) {
      state.data = [];
      state.ok = false;
      state.data_size = 0;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchSpecificFilm.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const specificFilmReducer = specificFilmSlice.reducer;

export const { resetSpecificFilmState } = specificFilmSlice.actions;
