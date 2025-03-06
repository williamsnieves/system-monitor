import { CPU_THRESHOLD, RAM_THRESHOLD } from "../../../config/constants";
import { Metric } from "../../domain/models/Metrics";

export const checkAlerts = (metric: Metric) => {
  if (metric.cpu > CPU_THRESHOLD) return "⚠️ CPU en uso crítico!";
  if (metric.ram > RAM_THRESHOLD) return "⚠️ RAM al límite!";

  return null;
};
