# SEO-Дашборд

Веб-приложение для визуализации и анализа ключевых показателей эффективности поискового продвижения. Агрегирует данные поисковых систем Яндекс и Google в едином интерфейсе.

## Стек технологий

- **Фронтенд:** React 18, Redux Toolkit, React Router DOM v7, Recharts, SCSS
- **Бэкенд:** Node.js, Express.js
- **Сборка:** Vite 4

---

# Установка и запуск

## 1. Клонирование репозитория

```bash
git clone https://github.com/NoDreams2/seo-dashboard.git
cd seo-dashboard
```

## 2. Установка зависимостей

```bash
npm install
```

## 3. Настройка серверной части

Серверная часть находится в корне проекта (`server.js`). Для её работы необходим **Node.js 14** или выше.

Создайте файл `.env` в корне проекта:

```text
PORT=5000
```

## 4. Подготовка данных

Данные для дашборда хранятся в директории `data/` в формате JSON.

Для каждого раздела используется отдельный файл:

- `yandex.json` — данные аналитики Яндекс
- `google.json` — данные аналитики Google
- `common.json` — сводные данные
- `leads.json` — данные по лидам
- `general.json` — общие данные

Убедитесь, что все файлы присутствуют в директории `data/` перед запуском приложения.

## 5. Запуск сервера

```bash
node server.js
```

После запуска сервер будет доступен по адресу:

```
http://localhost:5000
```

## 6. Запуск клиентской части

В отдельном терминале выполните:

```bash
npm run dev
```

Приложение откроется по адресу:

```
http://localhost:5173
```

# Структура проекта

```text
seo-dashboard/
├── data/                         
│   ├── yandex.json
│   ├── google.json
│   ├── common.json
│   ├── leads.json
│   └── general.json
│
├── src/
│   ├── components/               
│   │   ├── Charts/
│   │   │   ├── LineChart.jsx
│   │   │   ├── StackedAreaChart.jsx
│   │   │   └── MultiLineChart.jsx
│   │   └── Layout/
│   │       ├── Layout.jsx
│   │       └── Layout.scss
│   │
│   ├── data/                      
│   │   ├── yandexData.js
│   │   ├── googleData.js
│   │   ├── commonData.js
│   │   └── leadsData.js
│   │
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── YandexAnalytics.jsx
│   │   ├── GoogleAnalytics.jsx
│   │   ├── CommonAnalytics.jsx
│   │   ├── LeadsAndSales.jsx
│   │   └── General.jsx
│   │
│   ├── store/
│   │   ├── index.js
│   │   └── dataSlice.js
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── server.js
├── vite.config.js
├── package.json
└── README.md
```

---

# Разделы приложения

| Раздел | Маршрут | Описание |
|---------|----------|----------|
| Главная | `/` | Навигационный хаб с карточками разделов |
| Аналитика Яндекс | `/yandex` | Видимость, позиции, трафик, MQL/SQL/продажи, поведенческие факторы |
| Аналитика Google | `/google` | Видимость, позиции, трафик, DR, доноры, MQL/SQL/продажи |
| Общая аналитика | `/common` | Сводные данные, сравнение Яндекс и Google, общий трафик, MQL/SQL/продажи |
| Лиды и продажи | `/leads` | Детальные таблицы лидов по месяцам с цветовой индикацией статусов |
| Общее | `/general` | Стратегия, KPI, проблемы и приоритетные задачи |

---

# API сервера

| Метод | Endpoint | Описание |
|--------|----------|----------|
| GET | `/api/data/:file` | Получение данных из JSON-файла |
| GET | `/api/files` | Получение списка доступных файлов данных |

---

# Примечание
- Для корректной работы необходимо одновременно запустить:
  - Express-сервер (`server.js`);
  - клиентское приложение (`npm run dev`).
