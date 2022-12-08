import { FilmsRequestDataType, FilmsResponseType } from 'common/types/API/Films';
import { RootState } from 'common/types/store';

export const getFilmsRequestData = (state: RootState): FilmsRequestDataType =>
  state.filmsRequestDataReducer;

export const getFilmsData = (state: RootState): FilmsResponseType => state.filmsReducer;
