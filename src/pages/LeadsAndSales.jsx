import React from "react";
import { leadsData } from "../data/leadsData";
import "./LeadsAndSales.scss";

const getAmountClass = (status) => {
  switch (status) {
    case "sold":
      return "amount--green";
    case "in_progress":
      return "amount--blue";
    case "not_sold":
      return "amount--red";
    default:
      return "";
  }
};

const LeadsTable = ({ title, data }) => (
  <div className="leads-table-container">
    <h2 className="leads-table-title">{title}</h2>
    <div className="leads-table-wrapper">
      <table className="leads-table">
        <thead>
          <tr>
            <th>Дата</th>
            <th>Поисковая система</th>
            <th>Телефон</th>
            <th>Почта</th>
            <th>Тип заявки</th>
            <th>Квалификация</th>
            <th>Сумма продажи</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.source}</td>
              <td>{item.phone}</td>
              <td>{item.email}</td>
              <td>{item.type}</td>
              <td>{item.qualification}</td>
              <td className={getAmountClass(item.status)}>
                {item.amount > 0 ? item.amount.toLocaleString() : "0"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const LeadsAndSales = () => {
  return (
    <div className="leads-page">
      <h1 className="leads-page-title">Лиды и продажи</h1>

      <div className="leads-legend">
        <div className="leads-legend-item">
          <span className="leads-legend-dot leads-legend-dot--green" />
          <span>Продажа</span>
        </div>
        <div className="leads-legend-item">
          <span className="leads-legend-dot leads-legend-dot--red" />
          <span>Не продали</span>
        </div>
        <div className="leads-legend-item">
          <span className="leads-legend-dot leads-legend-dot--blue" />
          <span>На этапе продажи</span>
        </div>
      </div>

      <LeadsTable title="Январь" data={leadsData.january} />
      <LeadsTable title="Февраль" data={leadsData.february} />
      <LeadsTable title="Март" data={leadsData.march} />
      <LeadsTable title="Апрель" data={leadsData.april} />
      <LeadsTable title="Май" data={leadsData.may} />
      <LeadsTable title="Июнь" data={leadsData.june} />
    </div>
  );
};

export default LeadsAndSales;
