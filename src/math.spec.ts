import * as app from "./app";
import * as math from "./math";

// Mock Module
jest.mock("./math");

test("call math.add", () => {
  app.doAdd(1, 2);
  expect(math.add).toHaveBeenLastCalledWith(1, 2);
});

// Mock Function

const doAdd = (a: number, b: number, callback: any) => {
  callback(a + b);
};

test("calls doAdd", () => {
  const mockCallback = jest.fn();
  doAdd(1, 2, mockCallback);
  expect(mockCallback).toHaveBeenCalledWith(3);
});
