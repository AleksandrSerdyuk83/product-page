export const getDiscountPrice = (price, discount) => {
  const result = price - (price * discount) / 100;
  return result.toFixed(1);
};
