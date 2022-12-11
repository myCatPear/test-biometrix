import React, { ChangeEvent, FC } from 'react';

import style from './AdultContent.module.scss';

import { useAppDispatch, useAppSelector } from 'common/hooks/app';
import { getIsAdultContent } from 'common/selectors';
import { setIsAdultContent } from 'features/FilmsList/filmsRequestDataSlice';

export const AdultContent: FC = () => {
  const dispatch = useAppDispatch();
  const isShowAdultContent = useAppSelector(getIsAdultContent);
  const onInputIsAdultContentChange = (event: ChangeEvent<HTMLInputElement>): void => {
    dispatch(setIsAdultContent({ value: event.currentTarget.checked }));
  };

  return (
    <div className={style.adultContent}>
      <span>18+</span>
      <input
        type="checkbox"
        onChange={onInputIsAdultContentChange}
        checked={isShowAdultContent}
      />
    </div>
  );
};
