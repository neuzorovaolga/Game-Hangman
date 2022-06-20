const arrWords = ['школа', 'поезд', 'яблоко', 'пингвин', 'океан', 'метеорит', 'праздник', 'цветок', 'солнце', 'зоопарк'];

function generatorNum () {
    let num = Math.floor(Math.random() * arrWords.length);
    return num;
}

function generatorWord (arr, randNum) {
    return arr[randNum];
}