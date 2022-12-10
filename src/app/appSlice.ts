import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppInitialStateType } from 'common/types/app';
import { fetchFilms } from 'features/FilmsList/filmsSlice';

const initialState: AppInitialStateType = {
  isInitializedApp: false,
  isFetchFilms: true,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setIsInitializedApp(state, action: PayloadAction<{ value: boolean }>) {
      state.isInitializedApp = action.payload.value;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchFilms.pending, state => {
      state.isFetchFilms = true;
    });
    builder.addCase(fetchFilms.fulfilled, state => {
      state.isFetchFilms = false;
    });
    builder.addCase(fetchFilms.rejected, state => {
      state.isFetchFilms = false;
    });
  },
});

export const appReducer = appSlice.reducer;

export const { setIsInitializedApp } = appSlice.actions;
