import { useState } from "react";

export default function PairSporesComponent() {
  const [pairSporesOutput, SetPairSporesOutput] = useState("");

  function PairSpores(sporeArray = []) {
    let sporePairCount = 0;
    //copying the sporeArray so not to change the original array
    const copiedArray = [...sporeArray];
    //sorting the array from smallest to largest integer
    copiedArray.sort();
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

  const onSubmit = (event) => {
    event.preventDefault();
    const sporeArrayInput = event.target.sporeArray.value;
    //converting the string data into an array of numbers
    const sporeArrayInputSplit = sporeArrayInput.split(", ");
    const sporeArrayToNumber = sporeArrayInputSplit.map((item) => Number(item));
    //setting the output state to the number of pairs found
    SetPairSporesOutput(PairSpores(sporeArrayToNumber));
  };

  return (
    <div className="questions">
      <h3>Pairing Spores!</h3>
      <i className="input-description">
        The sporeArray variable expects integers seperated by a coma then a
        space
      </i>
      <div className="code-example">
        {`function PairSpores([`}
        <form onSubmit={onSubmit}>
          <input
            className="variable-input"
            placeholder="sporeArray"
            name={"sporeArray"}
          ></input>
        </form>
        {`]) {
let sporePairCount = 0;
const copiedArray = [...sporeArray];
copiedArray.sort();
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
      </div>
    </div>
  );
}
