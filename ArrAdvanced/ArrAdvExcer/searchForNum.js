function searchForNumber(arrOne , arrTwo) {
    let [numOfElements , numOfDeletedElements, specialNum] = [arrTwo[0],arrTwo[1],arrTwo[2]];

    let newArr = [];
    let counter = 0;

    for (let i = 0; i<numOfElements; i++) {
        newArr.push(arrOne[i]);
    }
    for (let z = 0; z<numOfDeletedElements; z++) {
        newArr.shift();
    }
    for (let y = 0; y<newArr.length; y++) {
        if (newArr[y] == specialNum) {
            counter++;
        }
    }
    console.log(`Number ${specialNum} occurs ${counter} times.`);
}
searchForNumber([5, 2, 3, 4, 1, 6],
[5, 2, 3])