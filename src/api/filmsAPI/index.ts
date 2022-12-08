import { AxiosResponse } from 'axios';

import { configAPI } from 'api/configAPI';
import { REQUEST_TO_FILMS } from 'common/constants';
import { FilmsRequestDataType, FilmsResponseType } from 'common/types/API/Films';

export const filmsAPI = {
  fetchAllFilms(data: FilmsRequestDataType) {
    return configAPI.post<
      FilmsRequestDataType,
      AxiosResponse<FilmsResponseType>,
      FilmsRequestDataType
    >(REQUEST_TO_FILMS, data);
  },
};
