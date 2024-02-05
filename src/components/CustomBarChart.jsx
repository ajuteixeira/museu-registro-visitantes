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
          fontSize={13}
        >
          {payload.value}
        </text>
      </g>
    );
  }
}

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length / 2) {
    return (
      <p className="bg-white border px-3 py-4 ">{`${label} : ${payload[0].value}`}</p>
    );
  }

  return null;
};

const CustomBarChart = ({ data, title }) => {
  const formattedData = FormatData(data);

  return (
    <div className="w-1/3 p-5 flex flex-col items-center justify-between rounded-lg shadow-sm bg-white">
      <div className="font-bold">{title}</div>
      <BarChart
        width={400}
        height={300}
        data={formattedData}
        margin={{
          top: 30,
          right: 30,
          left: 10,
          bottom: 30,
        }}
      >
        <Tooltip content={<CustomTooltip />} />
        <Bar
          dataKey="value"
          barSize={20}
          fill="#8884d8"
          background={{ fill: "#eee" }}
        />
        <CartesianGrid strokeDasharray="2" />
        <XAxis
          dataKey="name"
          scale="auto"
          tick={<CustomizedAxisTick />}
          tickMargin={-3}
        />
        <YAxis
          label={{
            value: "Visitantes",
            fontSize: 13,
            angle: -90,
            position: "insideLeft",
            textAnchor: "middle",
          }}
          tick={{ fontSize: 13 }}
          allowDecimals={false}
        />
      </BarChart>
    </div>
  );
};

export default CustomBarChart;
