export const postcodeChecker = (p: string) => {
  const postcodeRegEx = /[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}/i;
  return postcodeRegEx.test(p) && p.length <= 8;
};
