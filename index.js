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
    let userEror = true;
    console.log(nodes);
    nodes.forEach((item) => {
    if (letter === item.textContent) {
    item.classList.add("black-letter");
    userEror = false;
    }
    })
    if(userEror=== true){
        let numb = counter()
        changePicture(numb)
        console.log(numb)
    }
    
    };
    
    function makeCounter() {
        let count = 0;
        return function() {
          return count++; 
        };

      }
      let counter = makeCounter()



    function getLetter() {
        const butt = document.getElementsByTagName("button")[0];
        butt.onclick = function () {
        let val = document.getElementsByTagName("input")[0].value;
        console.log(val);
        chekLatter(val);
        };
     }
     getLetter()

    

    function changePicture(numb){
        const arrImg = ['./img/2.png', './img/3.png', './img/4.png']
        let img = document.getElementsByClassName('img')[0];
        img.src = arrImg[numb];
} 