"use client";

import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface Props {
  cpuData: number[];
  ramData: number[];
  trafficData: number[];
}

function ChartComponent({ cpuData, ramData, trafficData }: Props) {
  const chartData = {
    labels: Array.from({ length: cpuData.length }, (_, i) => i),
    datasets: [
      { label: "CPU", data: cpuData, borderColor: "red" },
      { label: "RAM", data: ramData, borderColor: "blue" },
      { label: "Tráfico", data: trafficData, borderColor: "green" },
    ],
  };
  return (
    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
      <Line data={chartData} />
    </div>
  );
}

export default ChartComponent;
