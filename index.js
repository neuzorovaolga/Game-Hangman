import { generatorRandomWord, makeCounter } from "./utilities.js";
import { arrWords, button } from "./variables.js";
import { drawLines, getInputValue, makeMove } from "./workWithDOM.js";
import { checkForMatches } from "./otherFunc.js";

export function startGame() {
  const word = generatorRandomWord(arrWords);
  drawLines(word);
  let errorCounter = makeCounter();
  let arrIndexes;
  button.addEventListener("click", () => {
    arrIndexes = checkForMatches(word, getInputValue());
    makeMove(arrIndexes, errorCounter);
  });

  document.addEventListener("keypress", (e) => {
    console.log(e);
    if (e.key === "Enter") {
      console.log(e.key);
    }
  });
}
startGame();
