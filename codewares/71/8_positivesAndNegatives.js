// link: https://www.codewars.com/kata/576bb71bbbcf0951d5000044

function countPositivesSumNegatives(input) {
  let positivesCount = 0, negativesSumm = 0, summArray = [];

  if (input === null || input === undefined || input === []) return [];

  for (let i = 0; i < input.length; i++) {
    input[i] > 0 ? (positivesCount += 1) : (negativesSumm += input[i]);
  }

  summArray.push(positivesCount);
  summArray.push(negativesSumm);

  if (positivesCount === 0 && negativesSumm === 0) summArray = [];

  return summArray;
}
