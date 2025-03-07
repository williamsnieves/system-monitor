// tests/mocks/FakeWebSocket.ts

export class FakeWebSocket {
  static readonly CONNECTING = 0;
  static readonly OPEN = 1;
  static readonly CLOSING = 2;
  static readonly CLOSED = 3;

  url: string;
  readyState: number = FakeWebSocket.CONNECTING;
  protocol: string = "";
  extensions: string = "";
  binaryType: BinaryType = "blob";
  bufferedAmount: number = 0;

  onopen: ((this: WebSocket, ev: Event) => unknown) | null = null;
  onmessage: ((this: WebSocket, ev: MessageEvent<unknown>) => unknown) | null =
    null;
  onclose: ((this: WebSocket, ev: CloseEvent) => unknown) | null = null;
  onerror: ((this: WebSocket, ev: Event) => unknown) | null = null;

  static instances: FakeWebSocket[] = [];

  constructor(url: string) {
    this.url = url;
    FakeWebSocket.instances.push(this);
  }

  close(code?: number, reason?: string): void {
    if (this.onclose) {
      const event = new CloseEvent("close", {
        code: code ?? 1000,
        reason: reason ?? "",
        wasClean: true,
      });
      this.onclose.call(this, event);
    }
  }

  simulateOpen(): void {
    this.readyState = FakeWebSocket.OPEN;
    if (this.onopen) {
      const event = new Event("open");
      this.onopen.call(this, event);
    }
  }

  simulateMessage<T>(data: T): void {
    if (this.onmessage) {
      const event = new MessageEvent("message", {
        data: JSON.stringify(data),
      });
      this.onmessage.call(this, event);
    }
  }

  simulateClose(code?: number, reason?: string): void {
    this.readyState = FakeWebSocket.CLOSED;
    if (this.onclose) {
      const event = new CloseEvent("close", {
        code: code ?? 1000,
        reason: reason ?? "",
        wasClean: true,
      });
      this.onclose.call(this, event);
    }
  }

  dispatchEvent(event: Event): boolean {
    return true;
  }
}
