// link: https://www.codewars.com/kata/517abf86da9663f1d2000003

const toCamelCase = (str) => (
  str.split(/[-_]+/).map((item, letter) =>
  letter == 0 ? item : item[0].toUpperCase() + item.slice(1)).join("")
)
