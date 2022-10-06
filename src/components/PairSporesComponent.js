import { useState } from "react";
import { useForm } from "react-hook-form";

export default function PairSporesComponent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [pairSporesOutput, SetPairSporesOutput] = useState("");

  function PairSpores(sporeArray = []) {
    let sporePairCount = 0;
    //copying the sporeArray so not to change the original array
    const copiedArray = [...sporeArray];
    //sorting the array from smallest to largest integer
    copiedArray.sort(function (a, b) {
      return a - b;
    });
    //for-loop to iterate over the array
    for (let index = 0; index < sporeArray.length; index++) {
      //comparing values next to one another in copiedArray
      if (copiedArray[index] === copiedArray[index + 1]) {
        //if the above condition is met, a pair has been found- index increments after the condition is met aswell as in the for loop so in the next iteration of the loop it will not compare a value that has already been matched in a pair
        index++;
        sporePairCount++;
      }
    }
    return sporePairCount;
  }

  const onSubmit = (data) => {
    const sporeArrayInput = data.variableInput;
    //SporeArrayInput will be typeof string. Splitting string by commas
    const sporeArrayInputSplit = sporeArrayInput.split(",");
    //filtering out empty strings or empty spaces between comas
    //To perfectly validate user input I think i need to write a regex expression in line 64 to NOT match commas without integers between them but I haven't found the correct expression yet
    //The below filter will catch the following user inputs to not create false matches: ",,"+", ,"+ ",  ,"
    const filteredSporeArray = sporeArrayInputSplit.filter(
      (item) => item !== "" && item !== " " && item !== "  "
    );
    //converting the string data into an array of numbers
    const sporeArrayToNumber = filteredSporeArray.map((item) => Number(item));
    //setting the output state to the number of pairs found
    SetPairSporesOutput(PairSpores(sporeArrayToNumber));
  };

  return (
    <div className="questions">
      <h3>Pairing Spores!</h3>
      <div className="code-example">
        <span className="variable-input">
          {" "}
          {`function PairSpores([`}
          {
            <form id="my-form" onSubmit={handleSubmit(onSubmit)}>
              <input
                className="variable-input"
                placeholder="sporeArray"
                name="sporeArray"
                {...register("variableInput", {
                  pattern: {
                    //using Regex expression to match positive and negative integers seperated by commas: https://regex101.com/r/oXauV4/1
                    value: /^(?:-?\d+[, ]*)+$/g,
                    message:
                      "The sporeArray variable expects integers seperated by comas",
                  },
                })}
              ></input>
            </form>
          }
          {`]){`}
          <p className="errors">{errors?.variableInput?.message}</p>
        </span>
        {`let sporePairCount = 0;
const copiedArray = [...sporeArray];
copiedArray.sort(function (a, b) {
     return a - b;
  });
for (let index = 0; index < sporeArray.length; index++) {
      if (copiedArray[index] === copiedArray[index + 1]) {
        index++;
        sporePairCount++;
    } 
  }
  return sporePairCount;

sporePairCount=sporePairCount
}

output: 
`}
        <b>{pairSporesOutput}</b>
        <button className="get-output-btn" type="submit" form="my-form">
          Get output
        </button>
      </div>
    </div>
  );
}
