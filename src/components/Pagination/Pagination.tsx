import React, { FC } from 'react';

export const Pagination: FC = () => {
  const totalCount = 101;
  const pageSize = 10;
  const pagesCount = Math.ceil(totalCount / pageSize);
  const page = [];

  for (let i = 1; i <= pagesCount; i += 1) {
    page.push(i);
  }

  return <div>{page}</div>;
};
