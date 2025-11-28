import { random } from ".";

test("The lowest value possible should be 'min'", () => {
  const generator = () => 0;
  expect(random(generator)({ min: 1, max: 10 })).toEqual(1);
});

test("The highest value possible should be 'max'", () => {
  const generator = () => 1;
  expect(random(generator)({ min: 1, max: 10 })).toEqual(10);
});
