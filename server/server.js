const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Маршрут для получения данных
app.get("/api/data/:file", (req, res) => {
  const { file } = req.params;
  const filePath = path.join(__dirname, "data", `${file}.json`);

  try {
    const data = fs.readFileSync(filePath, "utf8");
    res.json(JSON.parse(data));
  } catch (err) {
    res.status(404).json({ error: "Файл не найден" });
  }
});

// Список доступных файлов
app.get("/api/files", (req, res) => {
  const files = ["yandex", "google", "common", "ai", "leads", "general"];
  res.json({ files });
});

app.listen(PORT, () => {
  console.log(`✅ Сервер запущен на http://localhost:${PORT}`);
});
