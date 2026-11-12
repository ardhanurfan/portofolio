import { describe, expect, it } from "vitest";
import { searchCommands, type Command } from "./commands";

const c = (id: string, label: string, keywords: string[] = []): Command => ({ id, label, keywords, run: () => undefined });
const cmds = [c("cv", "Download CV", ["resume"]), c("t", "Toggle theme", ["dark"])];

describe("searchCommands", () => {
  it("empty query returns all", () => expect(searchCommands(cmds, "")).toHaveLength(2));
  it("matches label case-insensitively", () => expect(searchCommands(cmds, "cv")[0].id).toBe("cv"));
  it("matches keywords", () => expect(searchCommands(cmds, "RESUME")[0].id).toBe("cv"));
  it("no match gives empty", () => expect(searchCommands(cmds, "zzz")).toEqual([]));
});
