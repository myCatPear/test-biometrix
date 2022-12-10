import React, { FC } from 'react';

import ContentLoader from 'react-content-loader';

export const SkeletonFilmLoading: FC = (props: any) => {
  return (
    <ContentLoader
      style={{ width: '100%', margin: '10px' }}
      speed={2}
      width={500}
      height={200}
      viewBox="0 0 500 200"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="13" y="0" rx="0" ry="0" width="150" height="200" />
      <rect x="178" y="0" rx="0" ry="0" width="150" height="200" />
      <rect x="342" y="0" rx="0" ry="0" width="150" height="200" />
    </ContentLoader>
  );
};
