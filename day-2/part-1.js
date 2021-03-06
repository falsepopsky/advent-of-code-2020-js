let { input } = require('./inputList');
let { removeSymbols, buildFormatedObject } = require('./functions');

async function getValidPasswords(data) {
  let lengthOfArray = data.length;
  let validPasswords = 0;

  for (let i = 0; i < lengthOfArray; i++) {
    let countLetters = 0;

    for (let j = 0; j < data[i].password.length; j++) {
      if (data[i].letter == data[i].password[j]) {
        countLetters++;
      }
    }

    if (countLetters >= data[i].start && countLetters <= data[i].end) {
      validPasswords++;
    }
  }
  return validPasswords;
}

async function main() {
  let removedSymbolsFromTheArray = await removeSymbols(input);
  let objectFormated = await buildFormatedObject(removedSymbolsFromTheArray);
  let solution = await getValidPasswords(objectFormated);
  console.log(solution);
}

main();
