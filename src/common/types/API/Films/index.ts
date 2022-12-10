import { Nullable } from 'common/types/Nullable';

export type FilmsRequestDataType = {
  page?: number;
  page_size?: number;
  sort_field?: FilmsSortField;
  sort_order?: sortOrder;
  imdb_id?: string;
  ids?: number[];
  search?: string;
  adult?: boolean;
  budget_min?: number;
  budget_max?: number;
  genres?: string[];
  original_language?: string;
  popularity_min?: number;
  popularity_max?: number;
  release_date_min?: string;
  release_date_max?: string;
  revenue_min?: number;
  revenue_max?: number;
  runtime_min?: number;
  runtime_max?: number;
  spoken_languages?: string[];
  status?: string;
  vote_average_min?: number;
  vote_average_max?: number;
  vote_count_min?: number;
  vote_count_max?: number;
};

export type FilmsSortField =
  | 'imdb_id'
  | 'budget'
  | 'original_language'
  | 'popularity'
  | 'release_date'
  | 'revenue'
  | 'runtime'
  | 'status'
  | 'vote_average'
  | 'vote_count';

export type sortOrder = 'asc' | 'desc';

export type FilmsResponseType = {
  ok: boolean;
  data_size: number;
  data: ResponseFilmDataType[];
};

export type ResponseFilmDataType = {
  id: number;
  adult: Nullable<boolean>;
  belongs_to_collection: Nullable<FilmCollectionType>;
  budget: Nullable<number>;
  genres: Nullable<FilmGenresType[]>;
  homepage: Nullable<string>;
  imdb_id: Nullable<string>;
  original_language: Nullable<string>;
  original_title: Nullable<string>;
  overview: Nullable<string>;
  popularity: Nullable<number>;
  production_companies: Nullable<ProductionCompaniesType[]>;
  production_countries: Nullable<ProductionCountriesType[]>;
  release_date: Nullable<string>;
  revenue: Nullable<number>;
  runtime: Nullable<number>;
  spoken_languages: SpokenLanguagesType[];
  status: Nullable<string>;
  tagline: Nullable<string>;
  title: string;
  vote_average: Nullable<number>;
  vote_count: Nullable<number>;
};

type SpokenLanguagesType = {
  iso_639_1: string;
  name: string;
};

type ProductionCompaniesType = {
  id: number;
  name: string;
};

type ProductionCountriesType = {
  iso_3166_1: string;
  name: string;
};

type FilmCollectionType = {
  id: number;
  name: string;
};

type FilmGenresType = {
  id: number;
  name: string;
};
