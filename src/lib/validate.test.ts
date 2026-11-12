import { describe, expect, it } from "vitest";
import { validateContact } from "./validate";

describe("validateContact", () => {
  it("flags empty fields", () => {
    expect(Object.keys(validateContact({ name: "", email: "", message: "" })).sort()).toEqual(["email", "message", "name"]);
  });
  it("rejects a@b email", () => {
    expect(validateContact({ name: "A", email: "a@b", message: "hi" }).email).toBeTruthy();
  });
  it("accepts valid input", () => {
    expect(validateContact({ name: "A", email: "a@b.co", message: "hi" })).toEqual({});
  });
});
