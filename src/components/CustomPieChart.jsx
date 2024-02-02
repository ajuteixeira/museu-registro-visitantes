import React, { PureComponent } from "react";
import { PieChart, Pie, Sector, Cell } from "recharts";
import FormatData from "../utils/FormatData";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  name,
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
      fill="#000000"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}% ${name}`}
    </text>
  );
};

const CustomPieChart = ({ data }) => {
  const formattedData = FormatData(data);

  return (
    <div className="w-1/3 p-5 flex items-center justify-between rounded-lg bg-white">
      <div className="flex flex-col">
        <spa>teste</spa>
        <spa>teste</spa>
        <spa>teste</spa>
      </div>
      <PieChart width={300} height={300}>
        <Pie
          data={formattedData}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {formattedData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
};

export default CustomPieChart;
