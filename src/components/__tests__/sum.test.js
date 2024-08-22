import { sum } from "../sum";
test("Sum of two numbers", () => {
  const result = sum(2, 3);
  expect(result).toBe(5);
});
