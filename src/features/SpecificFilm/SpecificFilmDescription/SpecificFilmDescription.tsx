import React, { FC } from 'react';

import style from './SpecificFilmDescription.module.scss';

import largePlaceholder from 'assets/img/films/largePlaceholder.png';
import { SPACE_BAR } from 'common/constants/common';
import { ResponseFilmDataType } from 'common/types/API/Films';

type SpecificFilmDescriptionType = {
  specificFilm: ResponseFilmDataType;
};

export const SpecificFilmDescription: FC<SpecificFilmDescriptionType> = ({
  ...props
}) => {
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
  } = props.specificFilm;

  return (
    <div className={style.specificFilmDescription}>
      <div className={style.specificFilmDescription__mainInfo}>
        <div className={style.specificFilmDescription__imgAndRating}>
          <img
            className={style.specificFilmDescription__img}
            src={largePlaceholder}
            alt="filmPhoto"
          />
          <div className={style.specificFilmDescription__rating}>
            <span className={style.specificFilmDescription__rating_value}>
              Rating: {voteAverage}
            </span>
            <span className={style.specificFilmDescription__rating_separator}>/</span>
            <span className={style.specificFilmDescription__rating_value}>
              Votes: {voteCount}
            </span>
          </div>
        </div>
        <div className={style.specificFilmDescription__info}>
          <ul className={style.specificFilmDescription__list}>
            <li className={style.specificFilmDescription__item}>
              Title:{SPACE_BAR}
              <span className={style.specificFilmDescription__item_value}>
                {title} ({originalTitle})
              </span>
            </li>
            {tagline && (
              <li className={style.specificFilmDescription__item}>
                <span className={style.specificFilmDescription__item_tagline}>
                  ...{tagline}
                </span>
              </li>
            )}
            {genres && (
              <li className={style.specificFilmDescription__item}>
                Genre:{SPACE_BAR}
                {genres.map(genre => (
                  <span
                    className={style.specificFilmDescription__item_value}
                    key={genre.id + genre.name}
                  >
                    {genre.name}
                    {SPACE_BAR}
                  </span>
                ))}
              </li>
            )}
            {adult && (
              <li className={style.specificFilmDescription__item}>WARNING: 18+</li>
            )}
            <li className={style.specificFilmDescription__item}>
              Original language:{SPACE_BAR}
              <span className={style.specificFilmDescription__item_value}>
                {originalLanguage}
              </span>
            </li>
            {spokenLanguage && (
              <li className={style.specificFilmDescription__item}>
                Translation:{SPACE_BAR}
                {spokenLanguage.map(language => (
                  <span
                    className={style.specificFilmDescription__item_value}
                    key={language.name}
                  >
                    {language.name}
                  </span>
                ))}
              </li>
            )}
            <li className={style.specificFilmDescription__item}>
              Length of the film:{SPACE_BAR}
              <span className={style.specificFilmDescription__item_value}>
                {runtime} min
              </span>
            </li>
            <li className={style.specificFilmDescription__item}>
              Released date:{SPACE_BAR}
              <span className={style.specificFilmDescription__item_value}>
                {releaseDate}
              </span>
            </li>
            <li className={style.specificFilmDescription__item}>
              Release status:{SPACE_BAR}
              <span className={style.specificFilmDescription__item_value}>{status}</span>
            </li>
            {productionCompanies && (
              <li className={style.specificFilmDescription__item}>
                Film studio:{SPACE_BAR}
                {productionCompanies.map(company => (
                  <span
                    className={style.specificFilmDescription__item_value}
                    key={company.id}
                  >
                    {company.name}
                  </span>
                ))}
              </li>
            )}
            {productionCountries && (
              <li className={style.specificFilmDescription__item}>
                Countries:{SPACE_BAR}
                {productionCountries.map(country => (
                  <span
                    className={style.specificFilmDescription__item_value}
                    key={country.name}
                  >
                    {country.name}
                  </span>
                ))}
              </li>
            )}
            {collection && (
              <li className={style.specificFilmDescription__item}>
                Collection:{SPACE_BAR}
                <span className={style.specificFilmDescription__item_value}>
                  {collection.name}
                </span>
              </li>
            )}
            {homepage && (
              <li className={style.specificFilmDescription__item}>
                Homepage:{SPACE_BAR}
                <a href={homepage}>{homepage}</a>
              </li>
            )}
            <li className={style.specificFilmDescription__item}>
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
              <li className={style.specificFilmDescription__item}>
                Budget:{SPACE_BAR}
                <span className={style.specificFilmDescription__item_value}>
                  {budget}$
                </span>
              </li>
            )}
            {revenue && (
              <li className={style.specificFilmDescription__item}>
                Revenue:{SPACE_BAR}
                <span className={style.specificFilmDescription__item_value}>
                  {revenue}$
                </span>
              </li>
            )}
            {popularity && (
              <li className={style.specificFilmDescription__item}>
                Popularity:{SPACE_BAR}
                <span className={style.specificFilmDescription__item_value}>
                  {popularity}
                </span>
              </li>
            )}
          </ul>
        </div>
      </div>
      <div className={style.specificFilmDescription__filmDescription}>{overview}</div>
    </div>
  );
};
