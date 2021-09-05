export const formatPrice = (number) => {
  return new Intl.NumberFormat('en-DE', {
    style: 'currency',
    currency: 'EUR',
  }).format(number / 100);
};

export const getUniqueValues = () => {};
