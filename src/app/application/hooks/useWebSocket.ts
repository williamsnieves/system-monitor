import { useEffect, useState, useRef } from "react";

import { Metric } from "@/app/domain/models/Metrics";
import { WEBSOCKET_URL } from "@/config/constants";

export const useWebSocket = () => {
  const [data, setData] = useState<Metric | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const wsRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    const connectWebSocket = () => {
      const socket = new WebSocket(WEBSOCKET_URL);
      wsRef.current = socket;

      socket.onopen = () => {
        console.log("connected to socket");
        setIsConnected(true);
      };

      socket.onmessage = (event) => {
        try {
          const data: Metric = JSON.parse(event.data);
          setData(data);
        } catch (error) {
          console.error("❌ Error al parsear datos WebSocket:", error);
        }
      };

      socket.onerror = (error) => {
        console.error("⚠️ WebSocket Error:", error);
      };

      socket.onclose = () => {
        console.warn("❌ WebSocket disconnected. Trying reconnect...");
        setIsConnected(false);
        setTimeout(connectWebSocket, 3000);
      };
    };

    connectWebSocket();

    return () => {
      if (wsRef.current) {
        wsRef.current.close();
      }
    };
  }, []);

  return { data, isConnected };
};
