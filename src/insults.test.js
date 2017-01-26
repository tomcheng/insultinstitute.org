if (!Array.prototype.includes) {
  Object.defineProperty(Array.prototype, 'includes', {
    value: function(searchElement, fromIndex) {
      if (this == null) { throw new TypeError('"this" is null or not defined'); }

      var o = Object(this);
      var len = o.length >>> 0;

      if (len === 0) { return false; }

      var n = fromIndex | 0;
      var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

      while (k < len) {
        if (o[k] === searchElement) { return true; }
        k++;
      }

      return false;
    }
  });
}

import { applyModifier } from "./insults";

it("pluralizes", () => {
  expect(applyModifier("foo", "p")).toBe("foos");
  expect(applyModifier("fish", "p")).toBe("fishes");
  expect(applyModifier("case", "p")).toBe("cases");
});

it("adds an indefinite article", () => {
  expect(applyModifier("foo", "s")).toBe("a foo");
  expect(applyModifier("ant", "s")).toBe("an ant");
  expect(applyModifier("use", "s")).toBe("a use");
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
