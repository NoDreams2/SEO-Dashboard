// Парсинг числовых значений из строк (убираем пробелы, запятые)
export const parseNumber = (value) => {
  if (!value) return 0;
  if (typeof value === "number") return value;
  // Убираем пробелы и заменяем запятую на точку
  const cleaned = String(value).replace(/\s/g, "").replace(",", ".");
  const num = parseFloat(cleaned);
  return isNaN(num) ? 0 : num;
};

// Извлечение данных для графика из массива объектов
export const extractChartData = (
  data,
  monthKeys,
  valueKey,
  filterFn = null,
) => {
  if (!data || !Array.isArray(data)) return [];

  const filtered = filterFn ? data.filter(filterFn) : data;

  return monthKeys.map((month, index) => {
    const row = filtered[index] || {};
    return {
      month,
      value: parseNumber(row[valueKey]),
    };
  });
};

// Месяцы для оси X
export const MONTHS = [
  "Янв",
  "Фев",
  "Мар",
  "Апр",
  "Май",
  "Июн",
  "Июл",
  "Авг",
  "Сен",
  "Окт",
  "Ноя",
  "Дек",
];
