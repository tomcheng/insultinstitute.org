import { applyModifier } from "./insults";

it("capitalizes", () => {
  expect(applyModifier("foo", "c")).toBe("Foo");
});

it("adds an indefinite article", () => {
  expect(applyModifier("foo", "s")).toBe("a foo");
  expect(applyModifier("ant", "s")).toBe("an ant");
  expect(applyModifier("use", "s")).toBe("a use");
});

it("pluralizes", () => {
  expect(applyModifier("foo", "p")).toBe("foos");
  expect(applyModifier("fish", "p")).toBe("fishes");
  expect(applyModifier("case", "p")).toBe("cases");
});

it("turns words to doer nouns", () => {
  expect(applyModifier("guzzle", "n")).toBe("guzzler");
  expect(applyModifier("eat", "n")).toBe("eater");
  expect(applyModifier("fist", "n")).toBe("fister");
  expect(applyModifier("slap", "n")).toBe("slapper");
});

it("turns words to -ing verbs", () => {
  expect(applyModifier("guzzle", "v")).toBe("guzzling");
  expect(applyModifier("eat", "v")).toBe("eating");
  expect(applyModifier("fist", "v")).toBe("fisting");
  expect(applyModifier("slap", "v")).toBe("slapping");
});
