import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { renderHook, act, waitFor } from "@testing-library/react";
import { vi } from "vitest";
import { useWebSocket } from "./useWebSocket";

describe("Web socket hook", () => {
  let mockWebSocket: WebSocket;

  beforeEach(() => {
    global.WebSocket = vi.fn(() => ({
      send: vi.fn(),
      close: vi.fn(),
      onopen: null,
      onmessage: null,
      onclose: null,
    })) as unknown as typeof WebSocket;

    mockWebSocket = new WebSocket("ws://localhost:4000");
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });
  it("should connect to websocket correctly", async () => {
    const { result } = renderHook(() => useWebSocket());

    act(() => {
      if (mockWebSocket.onopen) {
        mockWebSocket.onopen(new Event("open"));
      }
    });

    await waitFor(() => expect(result.current.isConnected).toBe(true));
  });

  it("should send and update metric data", async () => {
    const { result } = renderHook(() => useWebSocket());

    const mockData = JSON.stringify({ cpu: 50, ram: 60, traffic: 70 });

    act(() => {
      if (mockWebSocket.onmessage) {
        mockWebSocket.onmessage({ data: mockData } as MessageEvent);
      }
    });

    expect(result.current.data).toEqual({ cpu: 50, ram: 60, traffic: 70 });
  });

  it("should disconnect websocket", async () => {
    const { result } = renderHook(() => useWebSocket());

    act(() => {
      if (mockWebSocket.onclose) {
        mockWebSocket.onclose(new CloseEvent("close"));
      }
    });

    expect(result.current.isConnected).toBe(false);
  });
});
