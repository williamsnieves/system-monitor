"use client";

import { useState, useEffect } from "react";

interface SystemMetrics {
  cpu: number;
  ram: number;
  traffic: number;
}

export function useWebSocket() {
  const [data, setData] = useState<SystemMetrics | null>(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:4000");

    ws.onopen = () => {
      console.log("Connected to WebSocket server");
      setIsConnected(true);
    };

    ws.onmessage = (event) => {
      const metrics = JSON.parse(event.data);
      setData(metrics);
    };

    ws.onclose = () => {
      console.log("Disconnected from WebSocket server");
      setIsConnected(false);
    };

    return () => {
      ws.close();
    };
  }, []);

  return { data, isConnected };
}
