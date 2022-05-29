export const getFirstSymbolToUpper = (str) => {
  const currStr = str.split('');
  const firstToUpper = currStr[0].toUpperCase();
  currStr.splice(0, 1, firstToUpper);
  return currStr.join('');
};
