import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { setCountPerPage } from './filmsRequestDataSlice';

import { filmsAPI } from 'api/filmsAPI';
import { FilmsRequestDataType, FilmsResponseType } from 'common/types/API/Films';

const initialState: FilmsResponseType = {
  data: [],
  ok: false,
  data_size: 0,
};

export const fetchFilms = createAsyncThunk(
  'films/fetchFilms',
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

export const fetchAllFilms = createAsyncThunk(
  'films/fetchAllFilms',
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
  name: 'films',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(setCountPerPage, (state, action) => {
      // eslint-disable-next-line no-magic-numbers
      if (action.payload.count === 100) {
        state.data = [];
      }
    });
    builder.addCase(fetchFilms.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(fetchAllFilms.fulfilled, (state, action) => {
      state.data.push(...action.payload.data);
    });
  },
});

export const filmsReducer = filmsSlice.reducer;
