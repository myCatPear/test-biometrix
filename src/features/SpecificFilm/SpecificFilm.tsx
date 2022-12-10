import React, { FC, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import style from './SpecificFilm.module.scss';
import { fetchSpecificFilm } from './SpecificFilmSlice';

import largePlaceholder from 'assets/img/films/largePlaceholder.png';
import { FIRST_ELEMENT_IN_ARRAY, SPACE_BAR } from 'common/constants/common';
import { useAppDispatch, useAppSelector } from 'common/hooks/app';
import {
  getSpecificFilmCount,
  getSpecificFilmData,
  getIsFetchSpecificFilmSuccess,
} from 'common/selectors';
import commonStyle from 'common/style/commonStyle.module.scss';

export const SpecificFilm: FC = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const specificFilm = useAppSelector(getSpecificFilmData)[FIRST_ELEMENT_IN_ARRAY];
  const specificFilmCount = useAppSelector(getSpecificFilmCount);
  const isFetchSpecificFilmSuccess = useAppSelector(getIsFetchSpecificFilmSuccess);
  const EMPTY_SPECIFIC_FILM_COUNT = 0;
  const {
    title,
    original_title: originalTitle,
    tagline,
    original_language: originalLanguage,
    spoken_languages: spokenLanguage,
    runtime,
    release_date: releaseDate,
    status,
    production_companies: productionCompanies,
    production_countries: productionCountries,
    belongs_to_collection: collection,
    homepage,
    imdb_id: imdb,
    budget,
    revenue,
    vote_average: voteAverage,
    vote_count: voteCount,
    genres,
    adult,
    popularity,
    overview,
  } = specificFilm;

  useEffect(() => {
    if (id) dispatch(fetchSpecificFilm(+id));
  }, []);

  if (!isFetchSpecificFilmSuccess) {
    return <div>Loading</div>;
  }

  if (
    isFetchSpecificFilmSuccess === true &&
    specificFilmCount === EMPTY_SPECIFIC_FILM_COUNT
  ) {
    return <div>Wrong ID</div>;
  }

  return (
    <div className={style.specificFilm}>
      <div className={commonStyle.container}>
        <div className={style.specificFilm__wrapper}>
          <div className={style.specificFilm__mainInfo}>
            <div className={style.specificFilm__imgAndRating}>
              <img
                className={style.specificFilm__img}
                src={largePlaceholder}
                alt="filmPhoto"
              />
              <div className={style.specificFilm__rating}>
                <span className={style.specificFilm__rating_value}>
                  Rating: {voteAverage}
                </span>
                <span className={style.specificFilm__rating_separator}>/</span>
                <span className={style.specificFilm__rating_value}>
                  Votes: {voteCount}
                </span>
              </div>
            </div>
            <div className={style.specificFilm__info}>
              <ul className={style.specificFilm__list}>
                <li className={style.specificFilm__item}>
                  Title:{SPACE_BAR}
                  <span className={style.specificFilm__item_value}>
                    {title} ({originalTitle})
                  </span>
                </li>
                {tagline && (
                  <li className={style.specificFilm__item}>
                    <span className={style.specificFilm__item_tagline}>...{tagline}</span>
                  </li>
                )}
                {genres && (
                  <li className={style.specificFilm__item}>
                    Genre:{SPACE_BAR}
                    {genres.map(genre => (
                      <span
                        className={style.specificFilm__item_value}
                        key={genre.id + genre.name}
                      >
                        {genre.name}
                      </span>
                    ))}
                  </li>
                )}
                {adult && <li className={style.specificFilm__item}>WARNING: 18+</li>}
                <li className={style.specificFilm__item}>
                  Original language:{SPACE_BAR}
                  <span className={style.specificFilm__item_value}>
                    {originalLanguage}
                  </span>
                </li>
                <li className={style.specificFilm__item}>
                  Translation:{SPACE_BAR}
                  {spokenLanguage.map(language => (
                    <span className={style.specificFilm__item_value} key={language.name}>
                      {language.name}
                    </span>
                  ))}
                </li>
                <li className={style.specificFilm__item}>
                  Length of the film:{SPACE_BAR}
                  <span className={style.specificFilm__item_value}>{runtime} min</span>
                </li>
                <li className={style.specificFilm__item}>
                  Released date:{SPACE_BAR}
                  <span className={style.specificFilm__item_value}>{releaseDate}</span>
                  Release status:
                  <span className={style.specificFilm__item_value}>{status}</span>
                </li>
                {productionCompanies && (
                  <li className={style.specificFilm__item}>
                    Film studio:{SPACE_BAR}
                    {productionCompanies.map(company => (
                      <span className={style.specificFilm__item_value} key={company.id}>
                        {company.name}
                      </span>
                    ))}
                  </li>
                )}
                {productionCountries && (
                  <li className={style.specificFilm__item}>
                    Countries:{SPACE_BAR}
                    {productionCountries.map(country => (
                      <span className={style.specificFilm__item_value} key={country.name}>
                        {country.name}
                      </span>
                    ))}
                  </li>
                )}
                {collection && (
                  <li className={style.specificFilm__item}>
                    Collection:{SPACE_BAR}
                    <span className={style.specificFilm__item_value}>
                      {collection.name}
                    </span>
                  </li>
                )}
                {homepage && (
                  <li className={style.specificFilm__item}>
                    Homepage:{SPACE_BAR}
                    <a href={homepage}>{homepage}</a>
                  </li>
                )}
                <li className={style.specificFilm__item}>
                  imdb:{SPACE_BAR}
                  <a
                    href={`https://www.imdb.com/title/${imdb}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {imdb}
                  </a>
                </li>
                {budget && (
                  <li className={style.specificFilm__item}>
                    Budget:{SPACE_BAR}
                    <span className={style.specificFilm__item_value}>{budget}$</span>
                  </li>
                )}
                {revenue && (
                  <li className={style.specificFilm__item}>
                    Revenue:{SPACE_BAR}
                    <span className={style.specificFilm__item_value}>{revenue}$</span>
                  </li>
                )}
                {popularity && (
                  <li className={style.specificFilm__item}>
                    Popularity:{SPACE_BAR}
                    <span className={style.specificFilm__item_value}>{popularity}</span>
                  </li>
                )}
              </ul>
            </div>
          </div>
          <div className={style.specificFilm__filmDescription}>{overview}</div>
        </div>
      </div>
    </div>
  );
};
