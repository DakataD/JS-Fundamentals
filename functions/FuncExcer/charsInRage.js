function charInRange (firstCharacter,secondCharacter) {
    let min = firstCharacter.charCodeAt(0);
    let max = secondCharacter.charCodeAt(0);

    let firstCharAsNum = firstCharacter.charCodeAt(0);
    let secondCharAsNum = secondCharacter.charCodeAt(0);

    if (firstCharAsNum > secondCharAsNum) {
        min = secondCharacter.charCodeAt(0);
        max = firstCharacter.charCodeAt(0);
    }

    let result = '';
    for (let i = min+1; i<max; i++) {
        let char = String.fromCharCode(i);
        result += char + ' ';
    }
    return result;
}

let result = charInRange('a','d');
console.log(result)