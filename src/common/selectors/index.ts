import {
  FilmsRequestDataType,
  FilmsResponseType,
  ResponseFilmDataType,
} from 'common/types/API/Films';
import { RootState } from 'common/types/store';

export const getFilmsRequestData = (state: RootState): FilmsRequestDataType =>
  state.filmsRequestDataReducer;

export const getFilmsData = (state: RootState): FilmsResponseType => state.filmsReducer;

export const getAllFilmsCount = (state: RootState): number =>
  state.filmsReducer.data_size;

export const getSpecificFilmCount = (state: RootState): number =>
  state.specificFilmReducer.data_size;

export const getSpecificFilmData = (state: RootState): ResponseFilmDataType[] =>
  state.specificFilmReducer.data;

export const getIsFetchSpecificFilmSuccess = (state: RootState): boolean =>
  state.specificFilmReducer.ok;
