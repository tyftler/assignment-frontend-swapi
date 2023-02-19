import { getSignedYear, parseSignedYear } from './year';

describe('getSignedYear', () => {
  it('returns correct signed year for "100 BBY"', () => {
    const signedYear = getSignedYear('100', true);

    expect(signedYear).toStrictEqual(-100);
  });

  it('returns correct signed year for "100 ABY"', () => {
    const signedYear = getSignedYear('100', false);

    expect(signedYear).toStrictEqual(100);
  });

  it('returns correct signed year for "0 BBY"', () => {
    const signedYear = getSignedYear('0', true);

    expect(signedYear).toStrictEqual(-0);
  });

  it('returns correct signed year for "0 ABY"', () => {
    const signedYear = getSignedYear('0', false);

    expect(signedYear).toStrictEqual(0);
  });

  it('returns NaN for an invalid year', () => {
    const signedYear = getSignedYear('ABC', false);

    expect(signedYear).toStrictEqual(NaN);
  });

  it('returns NaN for an empty year', () => {
    const signedYear = getSignedYear('', false);

    expect(signedYear).toStrictEqual(NaN);
  });
});

describe('parseSignedYear', () => {
  it('returns correct signed year for "100 BBY"', () => {
    const signedYear = parseSignedYear('100 BBY');

    expect(signedYear).toStrictEqual(-100);
  });

  it('returns correct signed year for "100 ABY"', () => {
    const signedYear = parseSignedYear('100 ABY');

    expect(signedYear).toStrictEqual(100);
  });

  it('returns correct signed year for "0 BBY"', () => {
    const signedYear = parseSignedYear('0 BBY');

    expect(signedYear).toStrictEqual(-0);
  });

  it('returns correct signed year for "0 ABY"', () => {
    const signedYear = parseSignedYear('0 ABY');

    expect(signedYear).toStrictEqual(0);
  });

  it('returns NaN for an invalid year', () => {
    const signedYear = parseSignedYear('ABC BBY');

    expect(signedYear).toStrictEqual(NaN);
  });

  it('returns NaN for a missing year', () => {
    const signedYear = parseSignedYear('BBY');

    expect(signedYear).toStrictEqual(NaN);
  });

  it('returns NaN for a missing epoch', () => {
    const signedYear = parseSignedYear('100');

    expect(signedYear).toStrictEqual(NaN);
  });

  it('returns NaN for an empty value', () => {
    const signedYear = parseSignedYear('');

    expect(signedYear).toStrictEqual(NaN);
  });
});
