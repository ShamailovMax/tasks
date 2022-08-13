function createPhoneNumber(numbers){
  const firstThree = numbers.filter((item, i) => i < 3).toString().replace(/,/g, "")
  const secondThree = numbers.filter((item, i) => i <= 5 && i >= 3).toString().replace(/,/g, "")
  const last = numbers.filter((item, i) => i > 5).toString().replace(/,/g, "")
  return `(${firstThree}) ${secondThree}-${last}`
}