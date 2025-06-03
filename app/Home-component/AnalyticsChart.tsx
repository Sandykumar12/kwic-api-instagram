import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface DataPoint {
  month: string;
  Sent: number;
  Click: number;
  Comment: number;
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    name: string;
    value: number;
    color: string;
  }>;
  label?: string;
}

export default function AnalyticsChart(): JSX.Element {
  const data: DataPoint[] = [
    { month: "Jan", Sent: 170, Click: 70, Comment: 180 },
    { month: "Feb", Sent: 45, Click: 15, Comment: 45 },
    { month: "Mar", Sent: 100, Click: 65, Comment: 125 },
    { month: "Apr", Sent: 140, Click: 65, Comment: 205 },
    { month: "May", Sent: 75, Click: 15, Comment: 135 },
    { month: "Jun", Sent: 85, Click: 25, Comment: 160 },
    { month: "Jul", Sent: 135, Click: 85, Comment: 175 },
    { month: "Aug", Sent: 100, Click: 25, Comment: 145 },
    { month: "Sep", Sent: 45, Click: 25, Comment: 125 },
    { month: "Oct", Sent: 120, Click: 55, Comment: 160 },
    { month: "Nov", Sent: 125, Click: 95, Comment: 155 },
    { month: "Dec", Sent: 65, Click: 15, Comment: 110 },
  ];

  const CustomTooltip: React.FC<CustomTooltipProps> = ({
    active,
    payload,
    label,
  }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
          <p className="font-medium text-gray-900 mb-1">{label}</p>
          {payload.map((entry, index) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {entry.name}: {entry.value}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className=" bg-white rounded-lg shadow-sm border border-gray-400 max-w-7xl mx-auto mt-10">
      <div className="flex flex-col sm:flex-row sm:items-center  sm:justify-between p-4 sm:p-6 border-b border-gray-100 gap-4">
        <h2 className="text-lg font-semibold text-gray-900">Analytics</h2>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-orange-500"></div>
              <span className="text-sm text-gray-600">Sent</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
              <span className="text-sm text-gray-600">Click</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
              <span className="text-sm text-gray-600">Comment</span>
            </div>
          </div>
          <button className="text-sm text-gray-500 border border-gray-200 px-3 py-1 rounded-md hover:bg-gray-50 transition-colors whitespace-nowrap">
            View all post <span className="ml-1">↓</span>
          </button>
        </div>
      </div>

      <div className="p-4 sm:p-6">
        <div className="h-64 sm:h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 20,
              }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#f1f5f9"
                horizontal={true}
                vertical={false}
              />
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#9ca3af", fontSize: 12 }}
                dy={10}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#9ca3af", fontSize: 12 }}
                domain={[0, 250]}
                ticks={[0, 50, 100, 150, 200, 250]}
              />
              <Tooltip content={<CustomTooltip />} />

              <Line
                type="monotone"
                dataKey="Comment"
                stroke="#3b82f6"
                strokeWidth={2.5}
                dot={{ fill: "white", strokeWidth: 2, r: 4 }}
                activeDot={{
                  r: 6,
                  stroke: "#3b82f6",
                  strokeWidth: 2,
                  fill: "#3b82f6",
                }}
                strokeLinecap="round"
              />
              <Line
                type="monotone"
                dataKey="Sent"
                stroke="#f97316"
                strokeWidth={2.5}
                dot={{ fill: "white", strokeWidth: 2, r: 4 }}
                activeDot={{
                  r: 6,
                  stroke: "#f97316",
                  strokeWidth: 2,
                  fill: "#f97316",
                }}
                strokeLinecap="round"
              />
              <Line
                type="monotone"
                dataKey="Click"
                stroke="#10b981"
                strokeWidth={2.5}
                dot={{ fill: "white", strokeWidth: 2, r: 4 }}
                activeDot={{
                  r: 6,
                  stroke: "#10b981",
                  strokeWidth: 2,
                  fill: "#10b981",
                }}
                strokeLinecap="round"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
