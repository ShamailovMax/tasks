// link: https://www.codewars.com/kata/5287e858c6b5a9678200083c

function narcissistic(value) {
  let arr = String(value).split("").map(Number); // arr - массив
  let newArr = [];
  let newArrSumm = 0;

  arr.map((item) => {
    item **= arr.length;
    newArr.push(item);
    newArrSumm += item;
  });

  return newArrSumm === value ? true : false;
}
