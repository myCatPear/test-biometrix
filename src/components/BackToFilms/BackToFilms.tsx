import React, { FC } from 'react';

import { NavLink } from 'react-router-dom';

import style from './BackToFilms.module.scss';

import { ReactComponent as ArrowBackSVG } from 'assets/img/common/arrow-left-line.svg';
import { ROUTE_TO_FILMS } from 'common/constants/routes';

export const BackToFilms: FC = () => {
  return (
    <div className={style.backToFilms}>
      <div className={style.backToFilms__wrapper}>
        <NavLink to={ROUTE_TO_FILMS} className={style.backToFilms__link}>
          <ArrowBackSVG />
          <span className={style.backToFilms__text}>Back to films</span>
        </NavLink>
      </div>
    </div>
  );
};
