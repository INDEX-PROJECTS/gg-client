export const rubFormat = (amount: number) => {
  return new Intl.NumberFormat('ru').format(amount) + ' ₽';
};
