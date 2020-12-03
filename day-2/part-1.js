let { input } = require('./inputList');

async function removeSymbols(initialInput) {
  let inputLine = await initialInput.toString().split('\n');
  let totalLines = inputLine.length;

  let objectWithoutSimbols = [];

  for (let i = 0; i < totalLines; i++) {
    let splitLine = inputLine[i].replaceAll(' ', ',');
    let removeColon = splitLine.replaceAll(':', '');
    let removeHyphen = removeColon.replaceAll('-', ',');

    objectWithoutSimbols.push(removeHyphen);
  }
  return objectWithoutSimbols;
}

async function buildFormatedObject(arrayFormated) {
  let totalLength = await arrayFormated.length;
  let newObject = [];

  for (let i = 0; i < totalLength; i++) {
    let formatedObject = arrayFormated[i].split(',', '4');
    let start = formatedObject[0];
    let end = formatedObject[1];
    let letter = formatedObject[2];
    let password = formatedObject[3];

    newObject.push({ start, end, letter, password });
  }

  return newObject;
}

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
