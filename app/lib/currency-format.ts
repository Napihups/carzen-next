export const formatCurrency = (amount: number, currency: string = "SGD") => {
  const curr = new Intl.NumberFormat("en-SG", { style: "currency", currency: currency }).format(amount);
  return curr.toString();
};
