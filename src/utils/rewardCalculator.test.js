import { calculatePoints } from "./rewardCalculator";

test("below 50", () => {
  expect(calculatePoints(40)).toBe(0);
});

test("between 50-100", () => {
  expect(calculatePoints(70)).toBe(20);
});

test("above 100", () => {
  expect(calculatePoints(120)).toBe(90);
});

test("fraction", () => {
  expect(calculatePoints(120.5)).toBe(91);
});

test("negative", () => {
  expect(calculatePoints(-10)).toBe(0);
});

test("null", () => {
  expect(calculatePoints(null)).toBe(0);
});

test("zero amount", () => {
  expect(calculatePoints(0)).toBe(0);
});