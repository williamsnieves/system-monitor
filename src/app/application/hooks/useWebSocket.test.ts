// useWebSocket.test.ts
import { describe, it, beforeEach, afterEach, expect, vi } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useWebSocket } from "./useWebSocket";
import { FakeWebSocket } from "../../../../tests/mocks/FakeWebSocket";

describe("useWebSocket", () => {
  const originalWebSocket = global.WebSocket;

  beforeEach(() => {
    global.WebSocket = FakeWebSocket;
    FakeWebSocket.instances = [];
  });

  afterEach(() => {
    global.WebSocket = originalWebSocket;
  });

  it("should initialize with default values", () => {
    const { result } = renderHook(() => useWebSocket());
    expect(result.current.data).toBeNull();
    expect(result.current.isConnected).toBe(false);
  });

  it("should set isConnected to true when WebSocket opens", () => {
    const { result } = renderHook(() => useWebSocket());
    const fakeWs = FakeWebSocket.instances[0];
    act(() => {
      fakeWs.simulateOpen();
    });
    expect(result.current.isConnected).toBe(true);
  });

  it("should update data when a message is received", () => {
    const { result } = renderHook(() => useWebSocket());
    const fakeWs = FakeWebSocket.instances[0];
    const testMetrics = { cpu: 25, ram: 50, traffic: 75 };
    act(() => {
      fakeWs.simulateMessage(testMetrics);
    });
    expect(result.current.data).toEqual(testMetrics);
  });

  it("should set isConnected to false when WebSocket closes", () => {
    const { result } = renderHook(() => useWebSocket());
    const fakeWs = FakeWebSocket.instances[0];
    act(() => {
      fakeWs.simulateOpen();
    });
    expect(result.current.isConnected).toBe(true);
    act(() => {
      fakeWs.simulateClose();
    });
    expect(result.current.isConnected).toBe(false);
  });
});
