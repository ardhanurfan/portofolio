import { describe, expect, it } from "vitest";
import { filterProjects } from "./filterProjects";
import type { Project } from "../data/projects";

const p = (id: string, tags: string[]) => ({ id, tags }) as Project;
const list = [p("a", ["web"]), p("b", ["mobile", "iot"])];

describe("filterProjects", () => {
  it("all returns everything", () => expect(filterProjects(list, "all")).toHaveLength(2));
  it("filters by tag", () => expect(filterProjects(list, "iot").map((x) => x.id)).toEqual(["b"]));
  it("unknown tag gives empty", () => expect(filterProjects(list, "zzz")).toEqual([]));
});
