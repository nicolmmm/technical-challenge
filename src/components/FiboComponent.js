import { useState } from "react";
import { useForm } from "react-hook-form";

export default function FiboComponent() {
  //using React Hook Form to handle input validation and error messaging
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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

  const onSubmit = (data) => {
    const inputValue = data.variableInput;
    //converting the string input value into a number
    const n = Number(inputValue);
    SetFiboOutput(fibo(n));
  };

  return (
    <div className="questions">
      <h3>Fibonacci!</h3>

      <div className="code-example">
        <span className="variable-input">
          {`function Fibo(`}
          <form id="my-form" onSubmit={handleSubmit(onSubmit)}>
            <input
              className="variable-input"
              placeholder="n"
              name="n"
              type="number"
              {...register("variableInput", {
                required: "This field is required",
                min: {
                  value: 0,
                  message:
                    "This field requires a number with value 0 or greater",
                },
                max: {
                  value: 250,
                  message:
                    "This field requires a number with value 250 or less",
                },
              })}
            />
          </form>
          {`) {`}
          <p className="errors">{errors?.variableInput?.message}</p>
        </span>

        {`if (n === 0) {
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
        <button className="get-output-btn" type="submit" form="my-form">
          Get output
        </button>
      </div>
    </div>
  );
}
