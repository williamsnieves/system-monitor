"use client";

import Alert from "../(presentation)/components/Alert";
import ChartComponent from "../(presentation)/components/ChartComponent";
import Loader from "../(presentation)/components/common/Loader";
import MetricCard from "../(presentation)/components/MetricCard";
import { useWebSocket } from "../application/hooks/useWebSocket";
import { checkAlerts } from "../application/services/checkAlerts";

const Dashboard = () => {
  const { data, isConnected } = useWebSocket();

  if (!data) {
    return <Loader />;
  }

  const alertMessage = checkAlerts(data);

  return (
    <div className="p-6 bg-white dark:bg-gray-900 min-h-screen">
      <h1>System status {isConnected ? "🟢" : "🔴"}</h1>

      {alertMessage && <Alert message={alertMessage} />}
      <div className="grid grid-cols-3 gap-4 my-6">
        <MetricCard title="CPU" value={data.cpu} />
        <MetricCard title="RAM" value={data.ram} />
        <MetricCard title="Tráfico" value={data.traffic} />
      </div>
      <ChartComponent
        cpuData={Array(10).fill(data.cpu)}
        ramData={Array(10).fill(data.ram)}
        trafficData={Array(10).fill(data.traffic)}
      />
    </div>
  );
};

export default Dashboard;
