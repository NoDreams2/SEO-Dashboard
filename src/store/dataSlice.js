import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = "http://localhost:5000/api";

// Асинхронный запрос для получения данных
export const fetchData = createAsyncThunk("data/fetchData", async (file) => {
  const response = await fetch(`${API_URL}/data/${file}`);
  if (!response.ok) {
    throw new Error("Ошибка загрузки данных");
  }
  return await response.json();
});

const initialState = {
  yandex: null,
  google: null,
  common: null,
  ai: null,
  leads: null,
  general: null,
  loading: false,
  error: null,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        const data = action.payload;

        // Определяем, какой файл загружен
        if (Array.isArray(data) && data.length > 0) {
          const firstRow = data[0];

          // Яндекс
          if (
            firstRow.Запросы !== undefined &&
            firstRow.Коэффициенты !== undefined &&
            firstRow.Январь !== undefined
          ) {
            state.yandex = data;
          }
          // Google
          else if (
            firstRow.Запросы !== undefined &&
            firstRow.Коэффициенты !== undefined
          ) {
            state.google = data;
          }
          // Общая
          else if (firstRow["Общая динамика видимости"] !== undefined) {
            state.common = data;
          }
          // ИИ
          else if (
            firstRow["Стастистика трафика по нейросетям"] !== undefined
          ) {
            state.ai = data;
          }
          // Лиды
          else if (firstRow["Дата"] !== undefined) {
            state.leads = data;
          }
          // Общее
          else {
            state.general = data;
          }
        }
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Экспортируем редьюсер как default
export default dataSlice.reducer;
