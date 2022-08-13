function oddOrEven(array) {
  let summ = 0;
  for (let i = 0; i < array.length; i++) summ += array[i];
  return summ % 2 === 0 ? "even" : "odd";
}
