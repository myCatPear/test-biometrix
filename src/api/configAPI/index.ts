import axios from 'axios';

import { URL_LINK } from 'common/constants/api';

export const configAPI = axios.create({
  baseURL: URL_LINK,
});
