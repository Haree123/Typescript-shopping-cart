const CurrencyFormatter = new Intl.NumberFormat(undefined, {
  currency: "INR",
  style: "currency",
});

export const formatCurrency = (price: number) => {
  return CurrencyFormatter.format(price);
};
