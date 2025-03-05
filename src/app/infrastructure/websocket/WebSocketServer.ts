import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 4000 });

wss.on("connection", (ws) => {
  console.log("Cliente conectado");

  const sendMetrics = setInterval(() => {
    ws.send(
      JSON.stringify({
        cpu: Math.random() * 100,
        ram: Math.random() * 100,
        traffic: Math.random() * 100,
      })
    );
  }, 2000);

  ws.on("close", () => {
    clearInterval(sendMetrics);
    console.log("Cliente desconectado");
  });
});

console.log("Servidor WebSocket en puerto 4000");
