import { input, img, arrImg, wordContainer } from "./variables.js";
// import { spans } from "./variables.js";
import { startGame } from './index.js';
// import { errorCounter } from "./utilities.js";

export function drawLines(word) {
  console.log(word);

  for (let i = 0; i < word.length; i++) {

    const span = document.createElement("span");
    span.textContent = "_";
    span.style.fontSize = "40px";
    span.style.marginLeft = "10px";
    wordContainer.append(span);
  }
}

export function getSpans () {
  return Array.from(wordContainer.querySelectorAll("span"));

}

export function getInputValue() {
  console.log(input.value);
  return input.value;
}

export function changePicture(num) {
  img.src = arrImg[num];
}

export function resetInput() {
  input.value = "";
  input.focus();
}

export function writeLetter(arrIndexes, inputValue) {
  
  arrIndexes.forEach((item) => {
    getSpans()[item].textContent = inputValue;
  });

  if (isVictory()) {
    showPopUp();
  }
}




export function makeMove(arrIndexes, errorCounter){
    if (arrIndexes.length === 0) {
      changePicture(errorCounter());
      resetInput();
      
    } else {
      writeLetter(arrIndexes, getInputValue());
      resetInput();
      if (isVictory()) {
        console.log('1111111');
      }
    }
}

function isVictory() {
  const res =  getSpans().every((item) => {
    item.textContent !== "_";
  });
  console.log(res);
  return res;
}


function showPopUp(message) {
  const body = document.body;
  const divLayer = document.createElement('div');
  divLayer.classList.add('layer');
  body.prepend(divLayer);

  const divPopAp = document.createElement('div');
  divPopAp.classList.add('content');
  divLayer.append(divPopAp);

  const p = document.createElement('p');
  p.textContent = `${message} Хотите начать заново?`;
  p.style.color = 'black';
  p.style.fontSize = '65px';
  p.style.fontWeight = '900'
  p.style.textAlign = 'center';
  divPopAp.append(p);

  const btnYes = document.createElement('button');
  btnYes.textContent = 'Да';
  btnYes.classList.add('btn');
  divPopAp.append(btnYes);
  const btnNo = document.createElement('button');
  btnNo.textContent = 'Нет';
  btnNo.classList.add('btn');
  btnYes.after(btnNo);

  btnYes.addEventListener('click', startGame);
  btnNo.addEventListener('click', () => {
    const input = document.getElementsByTagName("input")[0];
        console.log(input);
        input.disabled = true;
        const button = document.querySelector("button");
        button.disabled = true;
  })
}