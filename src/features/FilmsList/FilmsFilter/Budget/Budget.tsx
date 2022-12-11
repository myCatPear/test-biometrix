import React, { ChangeEvent, FC } from 'react';

import style from './Budget.module.scss';

import { useAppDispatch, useAppSelector } from 'common/hooks/app';
import { getMaxBudget, getMinBudget } from 'common/selectors';
import {
  resetAllBudget,
  setMaxBudget,
  setMinBudget,
} from 'features/FilmsList/filmsRequestDataSlice';

export const Budget: FC = () => {
  const dispatch = useAppDispatch();
  const minBudget = useAppSelector(getMinBudget);
  const maxBudget = useAppSelector(getMaxBudget);
  let error = false;
  const onInputSetMinBudgetChange = (event: ChangeEvent<HTMLInputElement>): void => {
    dispatch(setMinBudget({ value: +event.currentTarget.value }));
  };

  const onInputSetMaxBudgetChange = (event: ChangeEvent<HTMLInputElement>): void => {
    dispatch(setMaxBudget({ value: +event.currentTarget.value }));
  };

  const onButtonResetBudgetValueClick = (): void => {
    dispatch(resetAllBudget());
  };

  if (maxBudget && minBudget) {
    if (minBudget > maxBudget) error = true;
  }

  return (
    <div className={style.budget}>
      <div>
        <span>Min budget: </span>
        <input type="number" value={minBudget} onChange={onInputSetMinBudgetChange} />
      </div>
      <div>
        <span>Max budget: </span>
        <input type="number" value={maxBudget} onChange={onInputSetMaxBudgetChange} />
      </div>
      <div>{error && 'error input'}</div>
      <button type="button" onClick={onButtonResetBudgetValueClick}>
        Reset budget
      </button>
    </div>
  );
};
