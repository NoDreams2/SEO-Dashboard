import React from "react";
import LineChart from "../components/Charts/LineChart";
import MultiLineChart from "../components/Charts/MultiLineChart";
import { commonData } from "../data/commonData";
import "./CommonAnalytics.scss";

const CommonAnalytics = () => {
  const visibilityTableData = commonData.visibilityTable.filter(
    (item) => item.common !== null,
  );

  return (
    <div className="page">
      <h1 className="page-title">Общая аналитика</h1>

      {/* Блок 1: Общая динамика видимости */}
      <div className="section-block">
        <div className="charts-row">
          <div className="charts-grid">
            <div className="chart-container">
              <div className="chart-title">Общая динамика видимости</div>
              <LineChart
                data={commonData.visibility}
                dataKey="value"
                color="#9b59b6"
                fillColor="rgba(155, 89, 182, 0.3)"
              />
            </div>
          </div>
          <div className="visibility-table-container">
            <div className="visibility-table-title">Видимость</div>
            <table className="visibility-table">
              <thead>
                <tr>
                  <th>Месяц</th>
                  <th>Общая</th>
                  <th>Яндекс</th>
                  <th>Google</th>
                </tr>
              </thead>
              <tbody>
                {visibilityTableData.map((item) => (
                  <tr key={item.month}>
                    <td>{item.month}</td>
                    <td>{item.common.toFixed(2)}%</td>
                    <td>{item.yandex.toFixed(2)}%</td>
                    <td>{item.google.toFixed(2)}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="visibility-note">
              Общая видимость считается как среднее между видимостью Яндекса и
              Google
            </p>
          </div>
        </div>
      </div>

      {/* Блок 2: Трафик */}
      <div className="section-block">
        <div className="charts-row charts-row--full">
          <div className="charts-grid">
            <div className="chart-container">
              <div className="chart-title">Динамика трафика</div>
              <div className="traffic-summary">
                <div className="traffic-summary-item">
                  <div className="traffic-summary-label">
                    Общая сумма трафика 2025
                  </div>
                  <div className="traffic-summary-value">
                    {commonData.trafficSummary.traffic2025.toLocaleString()}
                  </div>
                </div>
                <div className="traffic-summary-item">
                  <div className="traffic-summary-label">
                    Общая сумма трафика 2026
                  </div>
                  <div className="traffic-summary-value traffic-summary-value--purple">
                    {commonData.trafficSummary.traffic2026.toLocaleString()}
                  </div>
                </div>
                <div className="traffic-summary-item">
                  <div className="traffic-summary-label">
                    Общая сумма трафика План
                  </div>
                  <div className="traffic-summary-value traffic-summary-value--yellow">
                    {commonData.trafficSummary.trafficPlan.toLocaleString()}
                  </div>
                </div>
              </div>
              <MultiLineChart
                data={commonData.trafficChart}
                xAxisKey="month"
                lines={[
                  {
                    dataKey: "traffic2026",
                    name: "Трафик 2026",
                    type: "area",
                    stroke: "#9b59b6",
                    fill: "rgba(155, 89, 182, 0.5)",
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
                {commonData.trafficTable.map((item) => (
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

      {/* Блок 3: Показы */}
      <div className="section-block">
        <div className="charts-row">
          <div className="charts-grid">
            <div className="chart-container">
              <div className="chart-title">
                Общая статистика показов по запросам
              </div>
              <LineChart
                data={commonData.impressions}
                dataKey="value"
                color="#9b59b6"
                fillColor="rgba(155, 89, 182, 0.3)"
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
                {commonData.impressionsTable.map((item) => (
                  <tr
                    key={item.month}
                    className={item.impressions === null ? "future-month" : ""}
                  >
                    <td>{item.month}</td>
                    <td className="impressions-cell">
                      {item.impressions !== null
                        ? item.impressions.toLocaleString()
                        : "—"}
                    </td>
                    <td className="ctr-cell">
                      {item.ctr !== null ? `${item.ctr.toFixed(2)}%` : "—"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Блок 4: MQL */}
      <div className="section-block">
        <div className="charts-row">
          <div className="charts-grid">
            <div className="chart-container">
              <div className="chart-title">Статистика MQL</div>
              <MultiLineChart
                data={commonData.mqlChart}
                xAxisKey="month"
                lines={[
                  {
                    dataKey: "mqlFact",
                    name: "MQL Факт",
                    type: "area",
                    stroke: "#9b59b6",
                    fill: "rgba(155, 89, 182, 0.4)",
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
                {commonData.mqlTable.map((item) => (
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

      {/* Блок 5: SQL */}
      <div className="section-block">
        <div className="charts-row">
          <div className="charts-grid">
            <div className="chart-container">
              <div className="chart-title">Статистика SQL</div>
              <MultiLineChart
                data={commonData.sqlChart}
                xAxisKey="month"
                lines={[
                  {
                    dataKey: "sqlFact",
                    name: "SQL Факт",
                    type: "area",
                    stroke: "#9b59b6",
                    fill: "rgba(155, 89, 182, 0.4)",
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
                {commonData.sqlTable.map((item) => (
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

      {/* Блок 6: Продажи */}
      <div className="section-block">
        <div className="charts-row">
          <div className="charts-grid">
            <div className="chart-container">
              <div className="chart-title">Общая статистика продаж</div>
              <MultiLineChart
                data={commonData.salesChart}
                xAxisKey="month"
                lines={[
                  {
                    dataKey: "salesFact",
                    name: "Продажи Факт",
                    type: "area",
                    stroke: "#9b59b6",
                    fill: "rgba(155, 89, 182, 0.4)",
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
                {commonData.salesTable.map((item) => (
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
    </div>
  );
};

export default CommonAnalytics;
