export const getSignedYear = (year: string, isBby: boolean): number => {
  if (!year) {
    return NaN;
  }

  return Number(isBby ? -year : year);
};

export const parseSignedYear = (epochYear: string): number => {
  const match = epochYear.match(/^(\d+(?:\.\d+)?)\s?([BA]BY)$/);

  const year = match?.[1] ?? '';
  const isBby = match?.[2] === 'BBY';

  return getSignedYear(year, isBby);
};
