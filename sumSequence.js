function summationSequence(start, length) {
  // your code here
  let newray = [start];
  let len = newray.length;

  if (len >= 1) {
    newray = [start];
  }
  for (let i = len; i < length; i++) {
    newray.push(suma(newray[i - 1]));
  }
  return newray;
}

let suma = (num) => {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
};
