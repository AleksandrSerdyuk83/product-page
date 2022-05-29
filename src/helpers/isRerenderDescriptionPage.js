export const isRerenderDescriptionPage = (prev, next) => {
  return prev.productData.id === next.productData.id;
};
