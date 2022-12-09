export const sliceReleasedDateForBriefFilmInfo = (value: string): string => {
  const startValue = 0;
  const endValue = 4;

  return value.slice(startValue, endValue);
};
