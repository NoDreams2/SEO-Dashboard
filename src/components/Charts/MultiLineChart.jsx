import React from "react";
import {
  AreaChart,
  Area,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const MultiLineChart = ({
  data,
  xAxisKey = "month",
  lines = [],
  animationDuration = 1500,
}) => {
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div
          style={{
            backgroundColor: "#1a1f27",
            border: "1px solid #4a5568",
            borderRadius: "8px",
            padding: "12px 16px",
          }}
        >
          <p style={{ color: "#fff", margin: "0 0 8px 0", fontWeight: 600 }}>
            {label}
          </p>
          {payload.map((entry, index) => (
            <p
              key={index}
              style={{
                color: entry.color,
                margin: "2px 0",
                fontSize: "14px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  backgroundColor: entry.color,
                }}
              />
              {entry.name}:{" "}
              {entry.value !== null ? entry.value.toLocaleString() : "—"}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  // Формируем данные для легенды
  const legendItems = [
    { color: "#ff4444", label: "Трафик 2026", type: "solid" },
    { color: "#94a3b8", label: "Трафик 2025", type: "solid" },
    { color: "#ffc107", label: "Трафик План", type: "solid" },
    { color: "#94a3b8", label: "Сезонность", type: "dashed" },
  ];

  return (
    <div>
      {/* Легенда над графиком */}
      <div className="chart-legend">
        {legendItems.map((item, index) => (
          <div key={index} className="chart-legend-item">
            <span
              className={`chart-legend-dot ${item.type === "dashed" ? "chart-legend-dot--dashed" : ""}`}
              style={{
                backgroundColor:
                  item.type === "solid" ? item.color : "transparent",
                border:
                  item.type === "dashed" ? `2px dashed ${item.color}` : "none",
              }}
            />
            <span className="chart-legend-label">{item.label}</span>
          </div>
        ))}
      </div>

      <ResponsiveContainer width="100%" height={350}>
        <AreaChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          animationDuration={animationDuration}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#2d3748" />
          <XAxis
            dataKey={xAxisKey}
            stroke="#94a3b8"
            tick={{ fill: "#94a3b8" }}
          />
          <YAxis
            stroke="#94a3b8"
            tick={{ fill: "#94a3b8" }}
            tickFormatter={(value) => value.toLocaleString()}
          />
          <Tooltip content={<CustomTooltip />} />
          {lines.map((line) => {
            if (line.type === "area") {
              return (
                <Area
                  key={line.dataKey}
                  type="linear"
                  dataKey={line.dataKey}
                  name={line.name}
                  stroke={line.stroke}
                  fill={line.fill}
                  fillOpacity={0.3}
                  strokeWidth={line.strokeWidth || 2}
                  connectNulls={false}
                  animationDuration={animationDuration}
                  dot={{
                    fill: line.stroke,
                    r: 4,
                    stroke: line.stroke,
                    strokeWidth: 2,
                  }}
                  activeDot={{
                    r: 6,
                    stroke: line.stroke,
                    strokeWidth: 2,
                  }}
                />
              );
            } else {
              return (
                <Line
                  key={line.dataKey}
                  type="linear"
                  dataKey={line.dataKey}
                  name={line.name}
                  stroke={line.stroke}
                  strokeWidth={line.strokeWidth || 2}
                  strokeDasharray={line.strokeDasharray}
                  connectNulls={false}
                  animationDuration={animationDuration}
                  dot={false}
                  activeDot={{
                    r: 6,
                    stroke: line.stroke,
                    strokeWidth: 2,
                  }}
                />
              );
            }
          })}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MultiLineChart;
