import React, { PureComponent } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import FormatData from "../utils/FormatData";

class CustomizedAxisTick extends PureComponent {
  render() {
    const { x, y, payload } = this.props;

    return (
      <g transform={`translate(${x},${y})`}>
        <text
          x={-3}
          y={15}
          textAnchor="end"
          fill="#666"
          transform="rotate(-35)"
          fontSize={9}
        >
          {payload.value}
        </text>
      </g>
    );
  }
}

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <p className="bg-white border px-3 py-4 ">{`${label} : ${payload[0].value}`}</p>
    );
  }

  return null;
};

const CustomBarChart = ({ data, title, color }) => {
  const formattedData = FormatData(data);

  return (
    <div className="w-1/3 p-5 flex flex-col items-center justify-between rounded-lg shadow-sm bg-white">
      <div className="font-bold">{title}</div>
      <BarChart
        width={450}
        height={250}
        data={formattedData}
        margin={{
          top: 30,
          right: 50,
          left: 0,
          bottom: 30,
        }}
      >
        <Tooltip content={<CustomTooltip />} />
        <Bar dataKey="value" fill={color} background={{ fill: "#eee" }} />
        <CartesianGrid strokeDasharray="2" />
        <XAxis
          dataKey="name"
          interval={0}
          scale="auto"
          tick={<CustomizedAxisTick />}
          tickMargin={-3}
        />
        <YAxis tick={{ fontSize: 11 }} interval={0} allowDecimals={false} />
      </BarChart>
    </div>
  );
};

export default CustomBarChart;
