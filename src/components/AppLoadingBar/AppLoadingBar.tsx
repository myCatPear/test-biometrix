import React from 'react';

import style from './AppLoadingBar.module.scss';

export const AppLoadingBar: React.FC = () => {
  return (
    <div className={style.appLoadingBarContainer}>
      <div className={style.appLoadingBar} />
    </div>
  );
};
