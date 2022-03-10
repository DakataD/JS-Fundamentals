function countStr(str,word) {
    let counter = 0;
    let splStr = str.split(' ');
    for (let n of splStr) {
        if (n === word) {
            counter++;
        }
    }
    console.log(counter)
}
countStr("This is a word and it also is a sentence",
"is")