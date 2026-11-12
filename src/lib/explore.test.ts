import { describe, expect, it } from "vitest";
import { SECTION_IDS, addVisit, percentOf } from "./explore";

describe("explore store", () => {
  it("visiting the same section twice counts once", () => {
    const a = addVisit(new Set(), "about");
    const b = addVisit(a, "about");
    expect(percentOf(b)).toBe(Math.round(100 / SECTION_IDS.length));
  });
  it("unknown ids are ignored", () => {
    expect(addVisit(new Set(), "nope").size).toBe(0);
  });
  it("a fresh visit starts at 0%", () => expect(percentOf(new Set())).toBe(0));
  it("100% when all visited", () => {
    expect(percentOf(new Set(SECTION_IDS))).toBe(100);
  });
});
