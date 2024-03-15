export const useFormatCurrency = (
  num: number,
  locale: string = "ru-RU",
  currency: string = "RUB"
): string => {
  const formatted = num.toLocaleString(locale, { style: "currency", currency });

  return formatted;
};
