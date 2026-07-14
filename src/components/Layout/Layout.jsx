import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./Layout.scss";

const Layout = () => {
  return (
    <div className="layout">
      <header className="layout-header">
        <div className="header-container">
          <Link to="/" className="header-logo">
            SEO Дашборд
          </Link>
          <nav className="header-nav">
            <Link to="/yandex">Аналитика Яндекс</Link>
            <Link to="/google">Аналитика Google</Link>
            <Link to="/common">Аналитика общее</Link>
            <Link to="/leads">Лиды и продажи</Link>
            <Link to="/general">Общая информация</Link>
          </nav>
        </div>
      </header>

      <main className="layout-content">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
