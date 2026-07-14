import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.scss";

const HomePage = () => {
  const cards = [
    {
      path: "/yandex",
      title: "Аналитика Яндекс",
      description: "Видимость, трафик, показы, CTR, поведенческие факторы",
      color: "#ff4444",
    },
    {
      path: "/google",
      title: "Аналитика Google",
      description: "Видимость, трафик, показы, CTR, DR, доноры",
      color: "#4285F4",
    },
    {
      path: "/common",
      title: "Общая аналитика",
      description: "Общая видимость, сравнение с конкурентами, общий трафик",
      color: "#9b59b6",
    },
    {
      path: "/leads",
      title: "Лиды и продажи",
      description: "Таблица лидов, ROMI, выручка, квалификация",
      color: "#ff6b6b",
    },
    {
      path: "/general",
      title: "Общее",
      description: "FAQ, стратегия, KPI, проблемы в продвижении",
      color: "#ffd93d",
    },
  ];

  return (
    <div className="home-page">
      <div className="home-hero">
        <h1 className="home-title">SEO-Дашборд</h1>
        <p className="home-subtitle">Месячный отчет по SEO-продвижению</p>
      </div>

      <div className="home-grid">
        {cards.map((card) => (
          <Link
            to={card.path}
            key={card.path}
            className="home-card"
            style={{ "--card-color": card.color }}
          >
            <h3 className="home-card-title">{card.title}</h3>
            <p className="home-card-description">{card.description}</p>
          </Link>
        ))}
      </div>

      <div className="home-footer">
        <p>SEO-специалист: Лукьянов Никита</p>
      </div>
    </div>
  );
};

export default HomePage;
