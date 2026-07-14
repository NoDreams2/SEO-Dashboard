import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const LineChart = ({
  data,
  dataKey = "value",
  xAxisKey = "month",
  color = "#00a1e7",
  fillColor = "rgba(0, 161, 231, 0.3)",
}) => {
  const filteredData = data.filter(
    (item) => item.value !== null && item.value !== undefined,
  );

  if (!filteredData || filteredData.length === 0) {
    return <div className="chart-empty">Нет данных для отображения</div>;
  }

  const formatYAxis = (value) => {
    return `${value}%`;
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div
          style={{
            backgroundColor: "#1a1f27",
            border: `1px solid ${color}`,
            borderRadius: "8px",
            padding: "12px 16px",
          }}
        >
          <p style={{ color: "#fff", margin: "0 0 4px 0", fontWeight: 600 }}>
            {label}
          </p>
          <p
            style={{
              color: color,
              margin: 0,
              fontSize: "16px",
              fontWeight: 700,
            }}
          >
            {payload[0].value}%
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        animationDuration={1500} // ← плавная анимация
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#2d3748" />
        <XAxis dataKey={xAxisKey} stroke="#94a3b8" tick={{ fill: "#94a3b8" }} />
        <YAxis
          stroke="#94a3b8"
          tick={{ fill: "#94a3b8" }}
          tickFormatter={formatYAxis}
          domain={[0, "auto"]}
        />
        <Tooltip content={<CustomTooltip />} />

        <Area
          type="linear"
          dataKey={dataKey}
          stroke={color}
          strokeWidth={3}
          fill={fillColor}
          fillOpacity={0.8}
          connectNulls={false}
          animationDuration={1500} // ← плавная анимация
          dot={{
            fill: color,
            r: 5, // ← размер точки
            stroke: color,
            strokeWidth: 2,
          }}
          activeDot={{
            r: 8, // ← размер точки при наведении
            stroke: color,
            strokeWidth: 2,
          }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default LineChart;
