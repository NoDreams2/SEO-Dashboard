import React from "react";
import LineChart from "../components/Charts/LineChart";
import StackedAreaChart from "../components/Charts/StackedAreaChart";
import MultiLineChart from "../components/Charts/MultiLineChart";
import { googleData } from "../data/googleData";
import "./GoogleAnalytics.scss";

const GoogleAnalytics = () => {
  const visibilityData = googleData.visibility.filter(
    (item) => item.value !== null,
  );

  return (
    <div className="page">
      <h1 className="page-title">Аналитика Google</h1>

      {/* Блок 1: Видимость */}
      <div className="section-block">
        <div className="charts-row">
          <div className="charts-grid">
            <div className="chart-container">
              <div className="chart-title">Динамика видимости в Google</div>
              <LineChart
                data={googleData.visibility}
                dataKey="value"
                color="#4285F4"
                fillColor="rgba(66, 133, 244, 0.3)"
              />
            </div>
          </div>
          <div className="visibility-table-container">
            <div className="visibility-table-title">Видимость в Google</div>
            <table className="visibility-table">
              <thead>
                <tr>
                  <th>Месяц</th>
                  <th>Видимость</th>
                </tr>
              </thead>
              <tbody>
                {visibilityData.map((item) => (
                  <tr key={item.month}>
                    <td>{item.month}</td>
                    <td>{item.value.toFixed(2)}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Блок 2: Статистика позиций */}
      <div className="section-block">
        <div className="charts-row">
          <div className="charts-grid">
            <div className="chart-container">
              <div className="chart-title">Статистика позиций по запросам</div>
              <StackedAreaChart
                data={googleData.positions}
                xAxisKey="month"
                areas={[
                  {
                    dataKey: "top50",
                    name: "ТОП-50",
                    stroke: "#ff4444",
                    fill: "rgba(255, 68, 68, 0.4)",
                  },
                  {
                    dataKey: "top10",
                    name: "ТОП-10",
                    stroke: "#6bcb77",
                    fill: "rgba(107, 203, 119, 0.4)",
                  },
                  {
                    dataKey: "top3",
                    name: "ТОП-3",
                    stroke: "#4285F4",
                    fill: "rgba(66, 133, 244, 0.4)",
                  },
                ]}
              />
              <p className="chart-note">
                *Количество запросов в ТОП-10 не включает количество запросов из
                ТОП-3, а ТОП-50 не включает ТОП-3 и ТОП-10
              </p>
            </div>
          </div>
          <div className="positions-table-container">
            <div className="positions-table-title">
              Статистика позиций по запросам
            </div>
            <table className="positions-table">
              <thead>
                <tr>
                  <th>Месяц</th>
                  <th>ТОП-3 (G)</th>
                  <th>ТОП-10 (G)</th>
                  <th>ТОП-50 (G)</th>
                  <th>Всего в ТОПе</th>
                  <th>Всего запросов</th>
                </tr>
              </thead>
              <tbody>
                {googleData.positions.map((item) => (
                  <tr key={item.month}>
                    <td>{item.month}</td>
                    <td className="top3-cell">{item.top3}</td>
                    <td className="top10-cell">{item.top10}</td>
                    <td className="top50-cell">{item.top50}</td>
                    <td>{item.totalTop}</td>
                    <td>{item.totalQueries}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Блок 3: Трафик */}
      <div className="section-block">
        <div className="charts-row charts-row--full">
          <div className="charts-grid">
            <div className="chart-container">
              <div className="chart-title">Динамика трафика из Google</div>
              <div className="traffic-summary">
                <div className="traffic-summary-item">
                  <div className="traffic-summary-label">
                    Сумма трафика из Google 2025
                  </div>
                  <div className="traffic-summary-value">
                    {googleData.trafficSummary.traffic2025.toLocaleString()}
                  </div>
                </div>
                <div className="traffic-summary-item">
                  <div className="traffic-summary-label">
                    Сумма трафика из Google 2026
                  </div>
                  <div className="traffic-summary-value traffic-summary-value--blue">
                    {googleData.trafficSummary.traffic2026.toLocaleString()}
                  </div>
                </div>
                <div className="traffic-summary-item">
                  <div className="traffic-summary-label">
                    Сумма трафика из Google План
                  </div>
                  <div className="traffic-summary-value traffic-summary-value--yellow">
                    {googleData.trafficSummary.trafficPlan.toLocaleString()}
                  </div>
                </div>
              </div>
              <MultiLineChart
                data={googleData.trafficChart}
                xAxisKey="month"
                lines={[
                  {
                    dataKey: "traffic2026",
                    name: "Трафик 2026",
                    type: "area",
                    stroke: "#4285F4",
                    fill: "rgba(66, 133, 244, 0.5)",
                    strokeWidth: 2,
                  },
                  {
                    dataKey: "traffic2025",
                    name: "Трафик 2025",
                    type: "area",
                    stroke: "#94a3b8",
                    fill: "rgba(148, 163, 184, 0.2)",
                    strokeWidth: 2,
                  },
                  {
                    dataKey: "seasonality",
                    name: "Сезонность",
                    type: "line",
                    stroke: "#94a3b8",
                    strokeWidth: 2,
                    strokeDasharray: "5 5",
                  },
                  {
                    dataKey: "plan",
                    name: "План",
                    type: "line",
                    stroke: "#ffc107",
                    strokeWidth: 2,
                  },
                ]}
              />
            </div>
          </div>
          <div className="traffic-table-container">
            <div className="traffic-table-title">Данные по трафику</div>
            <table className="traffic-table">
              <thead>
                <tr>
                  <th colSpan={2}>2025</th>
                  <th colSpan={2}>2026</th>
                  <th colSpan={2}>План</th>
                  <th colSpan={2}>Сезонность</th>
                </tr>
                <tr>
                  <th>Месяц</th>
                  <th>Трафик</th>
                  <th>Месяц</th>
                  <th>Трафик</th>
                  <th>Месяц</th>
                  <th>Трафик</th>
                  <th>Месяц</th>
                  <th>Трафик</th>
                </tr>
              </thead>
              <tbody>
                {googleData.trafficTable.map((item) => (
                  <tr key={item.month}>
                    <td>{item.month}</td>
                    <td>{item.traffic2025.toLocaleString()}</td>
                    <td>{item.month}</td>
                    <td>
                      {item.traffic2026 !== null
                        ? item.traffic2026.toLocaleString()
                        : "—"}
                    </td>
                    <td>{item.month}</td>
                    <td>{item.plan.toLocaleString()}</td>
                    <td>{item.month}</td>
                    <td>{item.seasonality.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Блок 4: Статистика показов */}
      <div className="section-block">
        <div className="charts-row">
          <div className="charts-grid">
            <div className="chart-container">
              <div className="chart-title">
                Статистика показов по запросам в Google
              </div>
              <LineChart
                data={googleData.impressions}
                dataKey="value"
                color="#4285F4"
                fillColor="rgba(66, 133, 244, 0.3)"
              />
            </div>
          </div>
          <div className="impressions-table-container">
            <div className="impressions-table-title">Показы и CTR</div>
            <table className="impressions-table">
              <thead>
                <tr>
                  <th>Месяц</th>
                  <th>Показы</th>
                  <th>CTR</th>
                </tr>
              </thead>
              <tbody>
                {googleData.impressionsTable.map((item) => (
                  <tr key={item.month}>
                    <td>{item.month}</td>
                    <td className="impressions-cell">
                      {item.impressions.toLocaleString()}
                    </td>
                    <td className="ctr-cell">{item.ctr.toFixed(2)}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Блок 5: MQL */}
      <div className="section-block">
        <div className="charts-row">
          <div className="charts-grid">
            <div className="chart-container">
              <div className="chart-title">Статистика MQL в Google</div>
              <MultiLineChart
                data={googleData.mqlChart}
                xAxisKey="month"
                lines={[
                  {
                    dataKey: "mqlFact",
                    name: "MQL Факт",
                    type: "area",
                    stroke: "#4285F4",
                    fill: "rgba(66, 133, 244, 0.4)",
                    strokeWidth: 2,
                  },
                  {
                    dataKey: "mqlPlan",
                    name: "MQL План",
                    type: "line",
                    stroke: "#ffc107",
                    strokeWidth: 2,
                  },
                ]}
              />
              <div className="mql-params">
                <p>Параметры квалификации лида:</p>
                <ol>
                  <li>
                    Контактное лицо - принимает участие в принятии решений (не
                    обязательно ЛПР)
                  </li>
                  <li>
                    Проявляет интерес к услугам маркетинга (даже если не к той,
                    что сейчас в приоритете)
                  </li>
                  <li>
                    Есть потребность в продвижении в теории / в перспективе
                  </li>
                  <li>
                    Бюджет не утверждён или ниже минимального, но потенциально
                    может вырасти
                  </li>
                  <li>
                    Срок принятия решения - не определён или превышает 2 месяца
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <div className="mql-table-container">
            <div className="mql-table-title">MQL и конверсия</div>
            <table className="mql-table">
              <thead>
                <tr>
                  <th>Месяц</th>
                  <th>MQL Факт</th>
                  <th>MQL План</th>
                  <th>Месяц</th>
                  <th>CV в MQL</th>
                </tr>
              </thead>
              <tbody>
                {googleData.mqlTable.map((item) => (
                  <tr
                    key={item.month}
                    className={
                      item.mqlFact === null && item.cvMQL === null
                        ? "future-month"
                        : ""
                    }
                  >
                    <td>{item.month}</td>
                    <td className="mql-fact-cell">
                      {item.mqlFact !== null ? item.mqlFact : "—"}
                    </td>
                    <td className="mql-plan-cell">{item.mqlPlan}</td>
                    <td>{item.month}</td>
                    <td className="cv-mql-cell">
                      {item.cvMQL !== null ? `${item.cvMQL.toFixed(2)}%` : "—"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Блок 6: SQL */}
      <div className="section-block">
        <div className="charts-row">
          <div className="charts-grid">
            <div className="chart-container">
              <div className="chart-title">Статистика SQL в Google</div>
              <MultiLineChart
                data={googleData.sqlChart}
                xAxisKey="month"
                lines={[
                  {
                    dataKey: "sqlFact",
                    name: "SQL Факт",
                    type: "area",
                    stroke: "#4285F4",
                    fill: "rgba(66, 133, 244, 0.4)",
                    strokeWidth: 2,
                  },
                  {
                    dataKey: "sqlPlan",
                    name: "SQL План",
                    type: "line",
                    stroke: "#ffc107",
                    strokeWidth: 2,
                  },
                ]}
              />
              <div className="sql-params">
                <p>*Параметры квалификации лида:</p>
                <ol>
                  <li>Срок принятия решения - до двух месяцев</li>
                  <li>
                    Готовность ежемесячно вкладывать минимальный бюджет на
                    продвижение
                  </li>
                  <li>Контактное лицо - ЛПР</li>
                  <li>Услуга релевантна задаче клиента</li>
                </ol>
              </div>
            </div>
          </div>
          <div className="sql-table-container">
            <div className="sql-table-title">SQL и конверсия</div>
            <table className="sql-table">
              <thead>
                <tr>
                  <th>Месяц</th>
                  <th>SQL Факт</th>
                  <th>SQL План</th>
                  <th>Месяц</th>
                  <th>CV в SQL</th>
                </tr>
              </thead>
              <tbody>
                {googleData.sqlTable.map((item) => (
                  <tr
                    key={item.month}
                    className={
                      item.sqlFact === null && item.cvSQL === null
                        ? "future-month"
                        : ""
                    }
                  >
                    <td>{item.month}</td>
                    <td className="sql-fact-cell">
                      {item.sqlFact !== null ? item.sqlFact : "—"}
                    </td>
                    <td className="sql-plan-cell">{item.sqlPlan}</td>
                    <td>{item.month}</td>
                    <td className="cv-sql-cell">
                      {item.cvSQL !== null ? `${item.cvSQL.toFixed(2)}%` : "—"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Блок 7: Продажи */}
      <div className="section-block">
        <div className="charts-row">
          <div className="charts-grid">
            <div className="chart-container">
              <div className="chart-title">Статистика продаж в Google</div>
              <MultiLineChart
                data={googleData.salesChart}
                xAxisKey="month"
                lines={[
                  {
                    dataKey: "salesFact",
                    name: "Продажи Факт",
                    type: "area",
                    stroke: "#4285F4",
                    fill: "rgba(66, 133, 244, 0.4)",
                    strokeWidth: 2,
                  },
                  {
                    dataKey: "salesPlan",
                    name: "Продажи План",
                    type: "line",
                    stroke: "#ffc107",
                    strokeWidth: 2,
                  },
                ]}
              />
            </div>
          </div>
          <div className="sales-table-container">
            <div className="sales-table-title">Продажи и конверсия</div>
            <table className="sales-table">
              <thead>
                <tr>
                  <th>Месяц</th>
                  <th>Продажи факт</th>
                  <th>Продажи план</th>
                  <th>Месяц</th>
                  <th>CV в продажу</th>
                </tr>
              </thead>
              <tbody>
                {googleData.salesTable.map((item) => (
                  <tr
                    key={item.month}
                    className={
                      item.salesFact === null && item.cvSales === null
                        ? "future-month"
                        : ""
                    }
                  >
                    <td>{item.month}</td>
                    <td className="sales-fact-cell">
                      {item.salesFact !== null ? item.salesFact : "—"}
                    </td>
                    <td className="sales-plan-cell">{item.salesPlan}</td>
                    <td>{item.month}</td>
                    <td className="cv-sales-cell">
                      {item.cvSales !== null
                        ? `${item.cvSales.toFixed(2)}%`
                        : "—"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* Разделитель: Ссылочные факторы */}
      <div className="section-divider section-divider--blue">
        <h2 className="section-divider-title">Ссылочные факторы</h2>
      </div>
      {/* Блок 8: Динамика DR */}
      <div className="section-block">
        <div className="charts-row">
          <div className="charts-grid">
            <div className="chart-container">
              <div className="chart-title">Динамика DR</div>
              <LineChart
                data={googleData.dr}
                dataKey="value"
                color="#4285F4"
                fillColor="rgba(66, 133, 244, 0.3)"
              />
            </div>
          </div>
          <div className="behavior-table-container">
            <div className="behavior-table-title">DR</div>
            <table className="behavior-table">
              <thead>
                <tr>
                  <th>Месяц</th>
                  <th>DR</th>
                </tr>
              </thead>
              <tbody>
                {googleData.drTable.map((item) => (
                  <tr
                    key={item.month}
                    className={item.value === null ? "future-month" : ""}
                  >
                    <td>{item.month}</td>
                    <td>{item.value !== null ? item.value : "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Блок 9: Динамика количества доноров */}
      <div className="section-block">
        <div className="charts-row">
          <div className="charts-grid">
            <div className="chart-container">
              <div className="chart-title">Динамика количества доноров</div>
              <LineChart
                data={googleData.donors}
                dataKey="value"
                color="#4285F4"
                fillColor="rgba(66, 133, 244, 0.3)"
              />
            </div>
          </div>
          <div className="behavior-table-container">
            <div className="behavior-table-title">
              Количество доменов-доноров
            </div>
            <table className="behavior-table">
              <thead>
                <tr>
                  <th>Месяц</th>
                  <th>Кол-во</th>
                </tr>
              </thead>
              <tbody>
                {googleData.donorsTable.map((item) => (
                  <tr
                    key={item.month}
                    className={item.value === null ? "future-month" : ""}
                  >
                    <td>{item.month}</td>
                    <td>{item.value !== null ? item.value : "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleAnalytics;
