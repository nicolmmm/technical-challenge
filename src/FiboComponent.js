import { useState } from "react";

export default function FiboComponent() {
  const [fiboOutput, SetFiboOutput] = useState("");

  function fibo(n) {
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

  const onSubmit = (event) => {
    event.preventDefault();
    const inputValue = event.target.n.value;
    //converting the string input value into a number
    const n = Number(inputValue);
    SetFiboOutput(fibo(n));
  };

  return (
    <div className="questions">
      <h3>Fibonacci!</h3>
      <i className="input-description">
        The n variable expects a single positive integer
      </i>
      <div className="code-example">
        {`function Fibo(`}
        <form onSubmit={onSubmit}>
          <input className="variable-input" placeholder="n" name="n"></input>
        </form>

        {`) {
if (n === 0) {
return 0;
}
if (n === 1) {
  return 1;
} else {
let a = 0;
let b = 1;
let c;
for (let index = 1; index < n; index++) {
c = a + b;
a = b;
b = c;
}

return c;
}
}

output:`}
        <b>{fiboOutput}</b>
      </div>
    </div>
  );
}
