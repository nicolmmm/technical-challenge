export default function Fibo(n) {
  //if n = 0 or n= 1 it will be caught in the if statements because they will not pass the for-loop condition to run: (index=1, index < 0 or 1..)
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  } else {
    //using "let" so values can be reassigned value
    let a = 0;
    let b = 1;
    let c;
    for (let index = 1; index < n; index++) {
      //In the fibonacci sequence any number in the sequence is the sum of the previous two numbers in the sequence (besides the 1st and 2nd iterations).
      //a, b and c represent 3 consecutive numbers of the sequence.
      //Each time the loop runs, it will give c the value of sum a and b. Then a is given b's value and b is given c's value.
      c = a + b;
      a = b;
      b = c;
    }

    return c;
  }
}

console.log(
  `Fibo() test cases:
  for fibo(8) the expected test outcome is = 21 :`,
  Fibo(8),
  `
  for fibo(15) the expected test outcome is = 21  = 610 :`,
  Fibo(15),
  `
  for fibo(31) the expected test outcome is = 21= 1346269:`,
  Fibo(31),
  `
  logging from Fibo.js`
);
