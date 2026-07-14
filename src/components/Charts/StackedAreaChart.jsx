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

const StackedAreaChart = ({
  data,
  xAxisKey = "month",
  areas = [],
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
              {entry.name}: {entry.value}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div>
      {/* Легенда над графиком */}
      <div className="chart-legend">
        {areas.map((area) => (
          <div key={area.dataKey} className="chart-legend-item">
            <span
              className="chart-legend-dot"
              style={{ backgroundColor: area.stroke }}
            />
            <span className="chart-legend-label">{area.name}</span>
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
          <YAxis stroke="#94a3b8" tick={{ fill: "#94a3b8" }} />
          <Tooltip content={<CustomTooltip />} />
          {areas.map((area) => (
            <Area
              key={area.dataKey}
              type="linear"
              dataKey={area.dataKey}
              name={area.name}
              stackId="1"
              stroke={area.stroke}
              fill={area.fill}
              fillOpacity={0.8}
              strokeWidth={2}
              animationDuration={animationDuration}
              dot={{
                fill: area.stroke,
                r: 4,
                stroke: area.stroke,
                strokeWidth: 2,
              }}
              activeDot={{
                r: 6,
                stroke: area.stroke,
                strokeWidth: 2,
              }}
            />
          ))}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StackedAreaChart;
