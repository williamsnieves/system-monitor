# System Monitor Dashboard

![System Monitor Dashboard](https://img.shields.io/badge/Status-In%20Development-yellow)
![Next.js](https://img.shields.io/badge/Next.js-15.2.1-black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.0.10-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)

A real-time system monitoring dashboard built with Next.js, WebSockets, and Chart.js. Monitor CPU, RAM, and network traffic metrics with a beautiful, responsive interface.

## ✨ Features

- **Real-time Metrics**: Live updates via WebSocket connection
- **Interactive Charts**: Visualize system performance over time
- **Responsive Design**: Works on desktop and mobile devices
- **Dark/Light Mode**: Toggle between themes for comfortable viewing
- **Modern UI**: Built with Tailwind CSS v4

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended)

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/system-monitor.git
cd system-monitor
```

2. Install dependencies
```bash
pnpm install
```

3. Start the WebSocket server
```bash
pnpm start:server
```

4. In a new terminal, start the Next.js development server
```bash
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗️ Project Structure

system-monitor/
├── src/
│ ├── app/
│ │ ├── (presentation)/
│ │ │ ├── components/ # UI components
│ │ │ ├── styles/ # Global styles
│ │ ├── application/
│ │ │ ├── hooks/ # Custom React hooks
│ │ ├── dashboard/ # Dashboard page
│ │ ├── infrastructure/
│ │ │ ├── websocket/ # WebSocket server and client

## 🛠️ Technologies

- **Frontend**: Next.js 15, React 19, Tailwind CSS 4
- **Data Visualization**: Chart.js, react-chartjs-2
- **Real-time Communication**: WebSockets (ws)
- **Development**: TypeScript, ESLint

## 🌙 Dark Mode

The application supports both light and dark modes, with automatic detection of system preferences and manual toggle capability.

## 📊 Metrics Displayed

- **CPU Usage**: Real-time CPU utilization percentage
- **Memory Usage**: RAM consumption in percentage
- **Network Traffic**: Data transfer rates


## 🙏 Acknowledgements

- [Next.js](https://nextjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Chart.js](https://www.chartjs.org)


