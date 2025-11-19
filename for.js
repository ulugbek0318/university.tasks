function for1(k, n) {
  for (let i = 0; i < n; i++) console.log(k);
}

function for2(a, b) {
  let count = 0;
  for (let i = a; i <= b; i++) {
    console.log(i);
    count++;
  }
  console.log(count);
}

function for3(a, b) {
  let count = 0;
  for (let i = b; i >= a; i--) {
    console.log(i);
    count++;
  }
  console.log(count);
}

function for4(price) {
  for (let i = 1; i <= 10; i++) console.log(i * price);
}

function for5(price) {
  for (let i = 0.1; i <= 1; i += 0.1) console.log((i * price).toFixed(2));
}

function for6(price) {
  for (let i = 1.2; i <= 2; i += 0.2) console.log((i * price).toFixed(2));
}

function for7(a, b) {
  let sum = 0;
  for (let i = a; i <= b; i++) sum += i;
  console.log(sum);
}

function for8(a, b) {
  let mul = 1;
  for (let i = a; i <= b; i++) mul *= i;
  console.log(mul);
}

function for9(a, b) {
  let sum = 0;
  for (let i = a; i <= b; i++) sum += i * i;
  console.log(sum);
}

function for10(n) {
  let s = 0;
  for (let i = 1; i <= n; i++) s += 1 / i;
  console.log(s);
}
