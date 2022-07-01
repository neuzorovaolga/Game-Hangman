export function checkForMatches (word, inputValue) {
    const res =  word.split("").reduce((acc, el, i) => {
      console.log(el, i, inputValue);
      if (el === inputValue) {
        acc.push(i);
      }
      return acc;
    }, []);
    console.log(res);
    return res;
}
  