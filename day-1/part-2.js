let { inputList, inputLenght, total } = require('./inputList');

async function sortArray(arrayInputNotSorted) {
  const sortedInput = await arrayInputNotSorted.sort(function (a, b) {
    return a - b;
  });
  return sortedInput;
}

async function threeEntriesThatSum2020(inputSorted) {
  for (let i = 0; i < inputLenght - 2; i++) {
    for (let j = 1; j < inputLenght - 1; j++) {
      for (let k = 2; k < inputLenght; k++) {
        if (inputSorted[j] + inputSorted[i] + inputSorted[k] == total) {
          let result = [inputSorted[j], inputSorted[i], inputSorted[k]];
          return result;
        }
      }
    }
  }
}

async function multiplyResult(arrayThatSum2020) {
  const result =
    arrayThatSum2020[0] * arrayThatSum2020[1] * arrayThatSum2020[2];
  return result;
}

async function main() {
  const sortedNumbers = await sortArray(inputList);
  const numbersThatSum2020 = await threeEntriesThatSum2020(sortedNumbers);
  const finalResult = await multiplyResult(numbersThatSum2020);
  console.log(finalResult);
}

main();
