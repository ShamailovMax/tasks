// код с главы

// +++++++++++++++++
// цикл while
let i = 0;
while (i < 3) {
  console.log(i); // 0 1 2
  i++;
}

// еще цикл while
let j = 3;
while (j) {
  console.log(j); // 3 2 1
  j--;
}

// сокращенная форма записи предыдущего цикла
while (j) console.log(j--);

// ++++++++++++++++++++++
// цикл do ... while
let idx = 0;
do {
  // 0 1 2
  console.log(idx);
  idx++;
} while (idx < 3);

// ++++++++++++++++++++++
// цикл for

for (let i = 0; i < 3; i++) {
  console.log(i); // 0 1 2
}

// прерывание циклов (break)
let sum = 0;
while (true) {
  let value = +prompt("enter a num");
  if (!value) break;
  sum += value;
}
console.log(sum);

// переход к след итерации (continue)
for (let i = 0; i < 10; i++) {
  if (i % 2 == 0) continue;
  console.log(i);
}
