import { describe, it, expect } from "vitest";

describe("memvid-mind", () => {
  it("should export types", async () => {
    const exports = await import("../index.js");
    expect(exports.DEFAULT_CONFIG).toBeDefined();
    expect(exports.DEFAULT_CONFIG.memoryPath).toBe(".claude/mind.mv2");
  });
});
