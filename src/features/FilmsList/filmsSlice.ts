import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { filmsAPI } from 'api/filmsAPI';
import { FilmsRequestDataType, FilmsResponseType } from 'common/types/API/Films';

const initialState: FilmsResponseType = {
  data: [],
  ok: false,
  data_size: 0,
};

const FILMS_REDUCER_NAME = 'films';
const FETCH_FILMS_THUNK_NAME = `${FILMS_REDUCER_NAME}/fetchFilms`;

export const fetchFilms = createAsyncThunk(
  FETCH_FILMS_THUNK_NAME,
  async (data: FilmsRequestDataType, thunkAPI) => {
    try {
      const res = await filmsAPI.fetchAllFilms(data);

      return res.data;
    } catch (error) {
      console.log(error);

      return thunkAPI.rejectWithValue(null);
    }
  },
);

export const filmsSlice = createSlice({
  name: FILMS_REDUCER_NAME,
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchFilms.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const filmsReducer = filmsSlice.reducer;
