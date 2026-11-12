import { describe, expect, it } from "vitest";
import { SECTION_IDS, loadVisited, addVisit, percentOf } from "./explore";

const store = (v: string | null | "throw") =>
  ({
    getItem: () => {
      if (v === "throw") throw new Error("denied");
      return v;
    },
  }) as unknown as Storage;

describe("explore store", () => {
  it("loadVisited is empty when storage throws", () => {
    expect(loadVisited(store("throw")).size).toBe(0);
  });
  it("loadVisited is empty on corrupt JSON", () => {
    expect(loadVisited(store("{nope")).size).toBe(0);
  });
  it("loadVisited drops unknown ids", () => {
    expect([...loadVisited(store('["about","zzz"]'))]).toEqual(["about"]);
  });
  it("visiting the same section twice counts once", () => {
    const a = addVisit(new Set(), "about");
    const b = addVisit(a, "about");
    expect(percentOf(b)).toBe(Math.round(100 / SECTION_IDS.length));
  });
  it("unknown ids are ignored", () => {
    expect(addVisit(new Set(), "nope").size).toBe(0);
  });
  it("100% when all visited", () => {
    expect(percentOf(new Set(SECTION_IDS))).toBe(100);
  });
});
