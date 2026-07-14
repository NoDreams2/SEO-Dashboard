import React from "react";
import "./General.scss";

const General = () => {
  return (
    <div className="general-page">
      <h1 className="general-page-title">Общее</h1>

      {/* Яндекс */}
      <div className="general-block">
        <h2 className="general-block-title general-block-title--yandex">
          Яндекс
        </h2>
        <div className="general-grid">
          <div className="general-card">
            <h3 className="general-card-title">Почему упали позиции?</h3>
            <p className="general-card-text">Волатильность выдачи Яндекса</p>
          </div>
          <div className="general-card">
            <h3 className="general-card-title">Почему упал трафик?</h3>
            <p className="general-card-text">
              Сезонность, со следующего месяца должны пойти в плавный рост
            </p>
          </div>
        </div>
      </div>

      {/* Google */}
      <div className="general-block">
        <h2 className="general-block-title general-block-title--google">
          Google
        </h2>
        <div className="general-grid">
          <div className="general-card">
            <h3 className="general-card-title">Почему выросли позиции?</h3>
            <p className="general-card-text">
              Отработало повышение бюджета на ссылки/повышение уникальности
              страниц
            </p>
          </div>
          <div className="general-card">
            <h3 className="general-card-title">Почему вырос трафик?</h3>
            <p className="general-card-text">
              Обусловлено ростом позиций и началом разворота тренда сезонности
            </p>
          </div>
        </div>
      </div>

      {/* Куда лучше всего инвестировать усилия */}
      <div className="general-block">
        <h2 className="general-block-title">
          Куда лучше всего инвестировать усилия по задачам?
        </h2>
        <ol className="general-list">
          <li>One Page оптимизация основных страниц</li>
          <li>Охват семантики посадочными страницами</li>
          <li>Охват семантики статьями</li>
          <li>Решение вопросов с кейсами, их публикация</li>
          <li>Создание своей PBN-сети</li>
          <li>GSA/Хрумер</li>
          <li>GEO-продвижение</li>
        </ol>
      </div>

      {/* Общая стратегия */}
      <div className="general-block">
        <h2 className="general-block-title">Общая стратегия по проекту</h2>
        <ol className="general-list">
          <li>Выход в топ-10 по основным кластерам</li>
          <li>
            Прогрев на всех этапах воронки по лестнице Бена Ханта (статьи,
            кейсы, посадочные страницы)
          </li>
          <li>Выйти в положительный ROMI</li>
          <li>Начать продвигать бурж-сайт</li>
        </ol>
      </div>

      {/* KPI */}
      <div className="general-block">
        <h2 className="general-block-title">KPI</h2>
        <div className="general-kpi-grid">
          <div className="general-kpi-card">
            <div className="general-kpi-label">
              KPI по трафику (План) за октябрь
            </div>
            <div className="general-kpi-value">3 200</div>
          </div>
          <div className="general-kpi-card">
            <div className="general-kpi-label">
              KPI по трафику (Факт) за июнь
            </div>
            <div className="general-kpi-value">1 549</div>
          </div>
          <div className="general-kpi-card">
            <div className="general-kpi-label">
              Выполнение KPI по трафику, %
            </div>
            <div className="general-kpi-value general-kpi-value--red">
              48,41%
            </div>
          </div>
        </div>
        <div className="general-kpi-grid">
          <div className="general-kpi-card">
            <div className="general-kpi-label">
              KPI по лидам (План) за октябрь
            </div>
            <div className="general-kpi-value">16</div>
          </div>
          <div className="general-kpi-card">
            <div className="general-kpi-label">KPI по лидам (Факт) за июнь</div>
            <div className="general-kpi-value">5</div>
          </div>
          <div className="general-kpi-card">
            <div className="general-kpi-label">Выполнение KPI по лидам, %</div>
            <div className="general-kpi-value general-kpi-value--red">
              31,25%
            </div>
          </div>
        </div>
      </div>

      {/* Проблемы */}
      <div className="general-block">
        <h2 className="general-block-title">Есть ли проблемы в работе?</h2>
        <ul className="general-problems-list">
          <li>Неопубликованные кейсы</li>
          <li>Несогласованная аналитика для on page оптимизации</li>
          <li>Несогласованная стратегия по ссылочному продвижению</li>
        </ul>
      </div>
    </div>
  );
};

export default General;
