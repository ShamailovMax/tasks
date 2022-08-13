// 1 способ
function withMap(x) {
  return x.map((item) => item * 2);
}

// 2 способ
function withoutMap(x) {
  for (let i = 0; i < x.length; i++) {
    x[i] *= 2;
  }
  return x;
}
