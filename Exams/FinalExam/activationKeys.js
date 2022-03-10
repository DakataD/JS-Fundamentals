function activationKeys(arr) {
    let key = arr.shift();
    let line = arr.shift();

    while (line != 'Generate') {
        let tokens = line.split('>>>');
        let command = tokens.shift();

        switch (command) {
            case 'Contains':
                contains(tokens[0]);break;
            case 'Flip':
                flip(tokens[0],tokens[1],tokens[2]);break;
            case 'Slice':
                slice(tokens[0],tokens[1]);
        }

        line = arr.shift();
    }
    function contains(str) {
        if (key.includes(str)) {
            console.log(`${key} contains ${str}`)
        } else {
            console.log(`Substring not found!`);
        }
    }
    function flip(typeOfLetter,startIdx,endIdx) {
        startIdx = Number(startIdx);
        endIdx = Number(endIdx);
        if (typeOfLetter == 'Lower') {
            let substr = key.substring(startIdx,endIdx);
            let substrToLower = substr.toLowerCase();
            key = key.replace(substr,substrToLower);
        } else if (typeOfLetter == 'Upper') {
            let substr = key.substring(startIdx,endIdx);
            let substrToUpper = substr.toUpperCase();
            key = key.replace(substr,substrToUpper);
        }
    console.log(key)
    }
    function slice(startIdx,endIdx) {
        startIdx = Number(startIdx);
        endIdx = Number(endIdx);
        let firstPart = key.slice(0,startIdx);
        let secondPart = key.slice(endIdx);
        key = firstPart+secondPart;
        console.log(key)
    }
    console.log(`Your activation key is: ${key}`);
}
activationKeys(["abcdefghijklmnopqrstuvwxyz",
"Slice>>>2>>>6",
"Flip>>>Upper>>>3>>>14",
"Flip>>>Lower>>>5>>>7",
"Contains>>>def",
"Contains>>>deF",
"Generate"]);