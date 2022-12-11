import React, { FC } from 'react';

import { AdultContent } from './AdultContent';
import { Budget } from './Budget/Budget';
import { CountPerPage } from './CountPerPage';
import style from './FilmsFilter.module.scss';
import { Genres } from './Genres';
import { SearchField } from './SearchField';
import { SortBy } from './SortBy';

export const FilmsFilter: FC = () => {
  return (
    <div className={style.filmsFilter}>
      <SearchField />
      <AdultContent />
      <Budget />
      <Genres />
      <CountPerPage />
      <SortBy />
    </div>
  );
};
