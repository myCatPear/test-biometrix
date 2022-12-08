import React, { FC } from 'react';

import { ResponseFilmDataType } from 'common/types/API/Films';

type BriefFilmInfoType = {
  filmData: ResponseFilmDataType;
};

export const BriefFilmInfo: FC<BriefFilmInfoType> = ({ ...props }) => {
  const { title } = props.filmData;

  return <div>{title}</div>;
};
