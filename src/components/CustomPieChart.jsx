import React, { PureComponent } from "react";
import { PieChart, Pie, Tooltip, Cell, Legend } from "recharts";
import FormatData from "../utils/FormatData";

const COLORS = [
  "#8884d8",
  "#00c4a0c2",
  "#ffbb28c8",
  "#ff8142d9",
  "#d884ca",
  "#0087feb1",
];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
      fontSize={13}
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const CustomPieChart = ({ data, title }) => {
  const formattedData = FormatData(data);

  return (
    <div className="w-1/3 p-5 flex flex-col items-center justify-between rounded-lg shadow-sm bg-white">
      <div className="font-bold">{title}</div>
      <PieChart
        width={400}
        height={250}
        margin={{
          top: 0,
          right: 0,
          left: 45,
          bottom: 0,
        }}
      >
        <Pie
          data={formattedData}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          dataKey="value"
        >
          {formattedData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend verticalAlign="middle" align="left" layout="vertical" />
      </PieChart>
    </div>
  );
};

export default CustomPieChart;
