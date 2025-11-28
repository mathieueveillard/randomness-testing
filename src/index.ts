type RandomGenerator = () => number;

type Parameters = {
  min: number;
  max: number;
};

export const random =
  (generator: RandomGenerator) =>
  ({ min, max }: Parameters): number => {
    return min + (max - min) * generator();
  };

export const productionRandom = random(Math.random);
