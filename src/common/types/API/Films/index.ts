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
  id: string;
  adult: boolean;
  belongs_to_collection: Nullable<string>;
  budget: number;
  genres: Nullable<{}>;
  homepage: Nullable<number>;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  production_companies: Nullable<{}>;
  production_countries: [];
  release_date: string;
  revenue: Nullable<number>;
  runtime: number;
  spoken_languages: [];
  status: string;
  tagline: Nullable<string>;
  title: string;
  vote_average: number;
  vote_count: number;
};
