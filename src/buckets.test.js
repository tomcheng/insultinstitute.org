import buckets from "./buckets";
import validateBuckets from "./validateBuckets";

it("has valid buckets", () => {
  expect(validateBuckets(buckets)).toBe(true);
});
