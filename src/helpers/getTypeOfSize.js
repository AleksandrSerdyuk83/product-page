export const getTypeOfSize = (type) => {
  const ALL_SIZES = [
    38, 40, 42, 46, 48, 50, 52, 56
  ];

  const ALL_HEIGHT_SIZES = [
    150, 158, 164, 170, 176, 180, 184, 186
  ];

  return type === 'Рост' ? ALL_HEIGHT_SIZES : ALL_SIZES;
};
