// 6 kyu
// link: https://www.codewars.com/kata/542f3d5fd002f86efc00081a

function primeFactors(n) {
  let arr = [];
  for (let i = 2; i <= n; i++) {
    while (n % i === 0) {
      arr.push(i);
      n /= i;
    }
  }
  return arr;
}
