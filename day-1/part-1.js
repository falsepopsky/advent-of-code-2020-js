let { inputList, inputLenght, total } = require('./inputList');

async function sortArray(arrayInputNotSorted) {
  const sortedInput = await arrayInputNotSorted.sort(function (a, b) {
    return a - b;
  });
  return sortedInput;
}

async function twoEntriesThatSum2020(inputSorted) {
  for (let i = 0; i < inputLenght - 1; i++) {
    for (let j = 1; j < inputLenght; j++) {
      if (inputSorted[j] + inputSorted[i] == total) {
        let result = [inputSorted[j], inputSorted[i]];
        return result;
      }
    }
  }
}

async function multiplyResult(arrayThatSum2020) {
  const result = arrayThatSum2020[0] * arrayThatSum2020[1];
  return result;
}

async function main() {
  const sortedNumbers = await sortArray(inputList);
  const numbersThatSum2020 = await twoEntriesThatSum2020(sortedNumbers);
  const finalResult = await multiplyResult(numbersThatSum2020);
  console.log(finalResult);
}

main();
