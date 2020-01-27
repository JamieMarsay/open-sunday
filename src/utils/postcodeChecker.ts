export const postcodeChecker = (p: string) => {
  const shortCodeRegEx = /[A-Z]{1,2}[0-9]{1,2}/i;
  const longPostCodeRegEx = /[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}/i;

  if (shortCodeRegEx.test(p) && p.length <= 4) {
    return true;
  } else if (longPostCodeRegEx.test(p) && p.length <= 8) {
    return true;
  } else {
    return false;
  }
};
