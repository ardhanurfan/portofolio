import { describe, expect, it } from "vitest";
import { existsSync } from "node:fs";
import { profile } from "./profile";
import { experience } from "./experience";
import { skillGroups } from "./skills";
import { awards } from "./awards";
import { projects } from "./projects";
import { education } from "./education";

describe("content data", () => {
  it("never mentions change failure rate", () => {
    const all = JSON.stringify([profile, experience, skillGroups, awards, projects, education]);
    expect(all).not.toMatch(/change failure|\bCFR\b/i);
  });
  it("every project image exists in public/", () => {
    for (const p of projects) expect(existsSync(`public${p.image}`), p.image).toBe(true);
  });
  it("every skill icon exists in public/", () => {
    for (const g of skillGroups) for (const s of g.skills) if (s.icon) expect(existsSync(`public${s.icon}`), s.icon).toBe(true);
  });
  it("Mekari notes engineers build test automation instead of QA", () => {
    expect(JSON.stringify(experience[0])).toMatch(/test automation themselves/);
  });
});
