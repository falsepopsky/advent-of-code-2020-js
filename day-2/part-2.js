let { input } = require('./inputList');
let { removeSymbols, buildFormatedObject } = require('./functions');

async function getValidPasswords(data) {
  let lengthOfArray = data.length;
  let validPasswords = 0;

  for (let i = 0; i < lengthOfArray; i++) {
    let start = data[i].start - 1;
    let end = data[i].end - 1;
    let password = data[i].password;

    if (data[i].letter == password[start] && data[i].letter !== password[end]) {
      validPasswords++;
    } else if (
      data[i].letter !== password[start] &&
      data[i].letter == password[end]
    ) {
      validPasswords++;
    } else {
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
