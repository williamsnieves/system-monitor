"use client";

interface Props {
  title: string;
  value: number;
  threshold?: number;
}

function MetricCard({ title, value, threshold = 80 }: Props) {
  const isCritical = value > threshold;

  return (
    <div
      className={`p-4 rounded-lg shadow-md ${
        isCritical ? "bg-red-500 text-white" : "bg-gray-100 dark:bg-gray-800"
      }`}
    >
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-2xl">{value.toFixed(2)}%</p>
    </div>
  );
}

export default MetricCard;
