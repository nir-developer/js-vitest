import { describe, it, expect } from "vitest";
import { sum } from "../app";
describe("sum", () => {
  it("test", () => {
    expect(sum(2, 3)).toBe(5);
  });
});
