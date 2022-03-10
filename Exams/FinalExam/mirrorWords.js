function mirrorWords(input) {
    let text = input.shift();
    let pattern = /(@|#)([A-Za-z]{3,})(\1{2})([A-Za-z]{3,})\1/g;

    let match = pattern.exec(text);
    let pairsCounter = 0;
    let flag = false;
    let mirrorWords = [];
    while (match != null) {
        flag = true;
        pairsCounter++;
        let firstWord = match[2];
        let secondWord = match[4];
        let secondWordBackwards = '';
        for (let i=secondWord.length-1; i>=0; i--) {
            secondWordBackwards+=secondWord[i]
        }
        if (firstWord == secondWordBackwards) {
            mirrorWords.push(`${firstWord} <=> ${secondWord}`);
        }
          
        match = pattern.exec(text);
    }
    if (!flag) {
        console.log(`No word pairs found!`);
    } else {
        console.log(`${pairsCounter} word pairs found!`)
    }
    if (mirrorWords.length == 0) {
        console.log(`No mirror words!`);
    } else {
        console.log(`The mirror words are:`)
        console.log(mirrorWords.join(', '))
    }
}
mirrorWords([ '#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#' ])