import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { filmsAPI } from 'api/filmsAPI';
import { EMPTY_STRING } from 'common/constants/common';
import { FilmsResponseType } from 'common/types/API/Films';

const defaultSpecificFilmValue = {
  id: 0,
  genres: null,
  overview: EMPTY_STRING,
  popularity: 0,
  adult: false,
  vote_count: 0,
  vote_average: 0,
  revenue: 0,
  budget: 0,
  title: EMPTY_STRING,
  imdb_id: EMPTY_STRING,
  homepage: null,
  belongs_to_collection: null,
  status: EMPTY_STRING,
  production_countries: [{ name: EMPTY_STRING, iso_3166_1: EMPTY_STRING }],
  production_companies: [{ id: 0, name: EMPTY_STRING }],
  release_date: EMPTY_STRING,
  runtime: 0,
  spoken_languages: [{ name: EMPTY_STRING, iso_639_1: EMPTY_STRING }],
  original_language: EMPTY_STRING,
  tagline: null,
  original_title: EMPTY_STRING,
};

const initialState: FilmsResponseType = {
  ok: false,
  data_size: 0,
  data: [defaultSpecificFilmValue],
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
      state.data = [defaultSpecificFilmValue];
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
