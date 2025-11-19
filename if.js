function if1(a) {
  if (a > 0) a++;
  console.log(a);
}

function if2(a) {
  if (a > 0) a++;
  else a -= 2;
  console.log(a);
}

function if3(a) {
  if (a > 0) a++;
  else if (a < 0) a -= 2;
  else a = 10;
  console.log(a);
}

function if4(a, b, c) {
  let count = 0;
  if (a > 0) count++;
  if (b > 0) count++;
  if (c > 0) count++;
  console.log(count);
}

function if5(a, b, c) {
  let positive = 0;
  let negative = 0;
  if (a > 0) positive++; else negative++;
  if (b > 0) positive++; else negative++;
  if (c > 0) positive++; else negative++;
  console.log(positive, negative);
}

function if6(a, b) {
  console.log(a > b ? a : b);
}

function if7(a, b) {
  console.log(a < b ? 1 : 2);
}

function if8(a, b) {
  if (a > b) console.log(a, b);
  else console.log(b, a);
}

function if9(a, b) {
  if (a < b) console.log(a, b);
  else console.log(b, a);
}

function if10(a, b) {
  if (a !== b) {
    let sum = a + b;
    a = sum;
    b = sum;
  } else {
    a = 0;
    b = 0;
  }
  console.log(a, b);
}
