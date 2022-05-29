export const getCountsArr = (count) => {
  const result = [];
  for (let i = 0; i < count; i += 1) {
    result.push(i);
  }
  return result;
};
