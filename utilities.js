export function generatorRandomWord(arrWords) {
    return arrWords[Math.floor(Math.random() * arrWords.length)];
  }

export function makeCounter() {
    let count = 1;
    return function () {
      return count++;
    };
  }