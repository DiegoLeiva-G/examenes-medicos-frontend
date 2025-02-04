export const calculatedTotalAge = (ages: number[]) => {
  return ages.reduce((acc, age) => acc + age, 0);
};
