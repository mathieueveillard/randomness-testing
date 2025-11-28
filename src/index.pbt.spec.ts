import fc from "fast-check";
import { productionRandom } from ".";

test("The generated value should be greater than the min value and below max value", () => {
  fc.assert(
    fc.property(fc.record({ x1: fc.nat(), x2: fc.integer({ min: 1 }) }), ({ x1, x2 }): boolean => {
      const min = x1;
      const max = min + x2;
      const actual = productionRandom({ min, max });
      return min <= actual && actual <= max;
    }),
  );
});
