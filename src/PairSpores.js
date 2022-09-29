export default function PairSpores(sporeArray = []) {
  let sporePairCount = 0;
  //copying the sporeArray so not to change the original array
  const copiedArray = [...sporeArray];
  //sorting the array from smallest to largest integer
  copiedArray.sort();
  //for-loop to iterate over the array
  for (let index = 0; index < sporeArray.length; index++) {
    //comparing values next to one another in copiedArray
    if (copiedArray[index] === copiedArray[index + 1]) {
      //if the above condition is met, a pair has been found, index increments after the condition is met aswell as in the for-loop
      //so in the next iteration of the loop it will not compare a value that has already been matched in a pair
      index++;
      sporePairCount++;
    }
  }
  return sporePairCount;
}

console.log(
  `PairSpores test cases:
  For input [1, 1, 3, 1, 2, 1, 3, 3, 3, 3] , the expected output is 4:`,
  PairSpores([1, 1, 3, 1, 2, 1, 3, 3, 3, 3]),
  ` 
  For input [10, 20, 20, 10, 10, 30, 50, 10, 20]  the expected output is 3:`,
  PairSpores([10, 20, 20, 10, 10, 30, 50, 10, 20]),
  `
  For input [4, 3, 2 , 1]  the expected output is 0:`,
  PairSpores([4, 3, 2, 1]),
  `
  logging from PairSpores.js`
);
