const arrWords = ['школа', 'поезд', 'яблоко', 'пингвин', 'океан', 'метеорит', 'праздник', 'цветок', 'солнце', 'зоопарк'];

function generatorNum () {
    let num = Math.floor(Math.random() * arrWords.length);
    return num;
}

function generatorWord (arr, randNum) {
    return arr[randNum];
}

const word = generatorWord(arrWords, generatorNum());

function renderLetters(word) {
    const wordArr = [...word];
    console.log(word);
    const text = document.getElementsByClassName("word-wrap")[0];
     
    wordArr.forEach((item) => {
    const elem = document.createElement("div");
    elem.textContent = `${item}`;
    elem.classList.add("letter");
    text.append(elem);
    });
    }
    renderLetters(word)
     
    function chekLatter(letter) {
    const nodes = [...document.getElementsByClassName("letter")];
    console.log(nodes);
    nodes.forEach((item) => {
    if (letter === item.textContent) {
    item.classList.add("black-letter");
    }
    });
    }
    

    function getLetter() {
        const butt = document.getElementsByTagName("button")[0];
        butt.onclick = function () {
        let val = document.getElementsByTagName("input")[0].value;
        console.log(val);
        chekLatter(val);
        };
     }
     getLetter()