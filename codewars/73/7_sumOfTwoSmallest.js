function sumTwoSmallestNumbers(numbers) {
  let summ = 0;
  for (let i = 0; i < 2; i++) {
    summ += Math.min(...numbers);
    numbers.splice(numbers.indexOf(Math.min(...numbers)), 1);
  }
  return summ;
}
