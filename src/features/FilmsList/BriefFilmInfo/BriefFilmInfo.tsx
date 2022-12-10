import React, { FC } from 'react';

import { NavLink } from 'react-router-dom';

import style from './BriefFilmInfo.module.scss';

import { ROUTE_TO_FILMS } from 'common/constants/routes';
import { ResponseFilmDataType } from 'common/types/API/Films';
import { sliceReleasedDateForBriefFilmInfo } from 'utils/sliceReleasedDateForBriefFilmInfo';

type BriefFilmInfoType = {
  filmData: ResponseFilmDataType;
};

export const BriefFilmInfo: FC<BriefFilmInfoType> = ({ ...props }) => {
  const { title } = props.filmData;
  const { id } = props.filmData;
  const releaseDate = props.filmData.release_date;

  return (
    <div className={style.briefFilmInfo}>
      <div className={style.briefFilmInfo__wrapper}>
        <NavLink to={`${ROUTE_TO_FILMS}/${id}`} className={style.link} />
        <div className={style.briefFilmInfo__description}>
          <NavLink to={`${ROUTE_TO_FILMS}/${id}`} className={style.link}>
            <span className={style.briefFilmInfo__title}>{title}</span>
            <span className={style.briefFilmInfo__releaseDate}>
              {releaseDate && sliceReleasedDateForBriefFilmInfo(releaseDate)}
            </span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
