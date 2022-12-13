import axios from 'axios';

import { URL_LINK } from 'common/constants/api';

export const configAPI = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL || URL_LINK,
});
