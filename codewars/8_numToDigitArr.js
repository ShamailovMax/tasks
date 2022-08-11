// 8 kyu
// link: https://www.codewars.com/kata/5583090cbe83f4fd8c000051

function digitize(n) {
  let arr = String(n).split("").map(Number);
  return arr.reverse();
}
