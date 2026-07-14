import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";
import YandexAnalytics from "./pages/YandexAnalytics";
import GoogleAnalytics from "./pages/GoogleAnalytics";
import CommonAnalytics from "./pages/CommonAnalytics";
import LeadsAndSales from "./pages/LeadsAndSales";
import General from "./pages/General";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="yandex" element={<YandexAnalytics />} />
          <Route path="google" element={<GoogleAnalytics />} />
          <Route path="common" element={<CommonAnalytics />} />
          <Route path="leads" element={<LeadsAndSales />} />
          <Route path="general" element={<General />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
