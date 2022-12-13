import { ROUTE_TO_FILMS, ROUTE_TO_SPECIFIC_FILM } from 'common/constants/routes';
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
];
