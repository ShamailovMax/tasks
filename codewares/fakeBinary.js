function fakeBin(x) {
  let nums = x.split("").map(Number);
  for (let i = 0; i < nums.length; i++)
    nums[i] < 5 ? (nums[i] = 0) : (nums[i] = 1);
  return nums.join("").toString();
}
