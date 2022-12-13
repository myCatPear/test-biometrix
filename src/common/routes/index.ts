import {
  ROUTE_TO_FILMS,
  ROUTE_TO_NOT_EXISTING_PAGE,
  ROUTE_TO_SPECIFIC_FILM,
} from 'common/constants/routes';
import { PageNotFound } from 'components';
import { FilmsList, SpecificFilm } from 'features';

export const routes = [
  {
    route: ROUTE_TO_FILMS,
    Component: FilmsList,
  },
  {
    route: ROUTE_TO_SPECIFIC_FILM,
    Component: SpecificFilm,
  },
  {
    route: ROUTE_TO_NOT_EXISTING_PAGE,
    Component: PageNotFound,
  },
  {
    route: ROUTE_TO_NOT_EXISTING_PAGE,
    Component: PageNotFound,
  },
  {
    route: ROUTE_TO_NOT_EXISTING_PAGE,
    Component: PageNotFound,
  },
];
