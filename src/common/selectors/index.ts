import {
  FilmsRequestDataType,
  FilmsResponseType,
  FilmsSortField,
  ResponseFilmDataType,
  SortOrder,
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

export const getIsInitializedApp = (state: RootState): boolean =>
  state.appReducer.isInitializedApp;

export const getIsFetchFilms = (state: RootState): boolean =>
  state.appReducer.isFetchFilms;

export const getSearchValue = (state: RootState): string | undefined =>
  state.filmsRequestDataReducer.search;

export const getIsAdultContent = (state: RootState): boolean | undefined =>
  state.filmsRequestDataReducer.adult;

export const getPageSize = (state: RootState): number | undefined =>
  state.filmsRequestDataReducer.page_size;

export const getMaxBudget = (state: RootState): number | undefined =>
  state.filmsRequestDataReducer.budget_max;

export const getMinBudget = (state: RootState): number | undefined =>
  state.filmsRequestDataReducer.budget_min;

export const getAllCheckedGenres = (state: RootState): string[] | undefined =>
  state.filmsRequestDataReducer.genres;

export const getCurrentSortField = (state: RootState): FilmsSortField | undefined =>
  state.filmsRequestDataReducer.sort_field;

export const getCurrentSortOrder = (state: RootState): SortOrder | undefined =>
  state.filmsRequestDataReducer.sort_order;
