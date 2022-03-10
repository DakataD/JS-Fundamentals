function oddOccurances(input) {
    let list = input.split(' ');
    let obj = {};
    
    for (let word of list) {
        let wordToLowerCase = word.toLowerCase();
        if (!(Object.keys(obj).includes(wordToLowerCase))) {
            obj[wordToLowerCase] = 0;
        }
        obj[wordToLowerCase]++;
    }
    let result = []
    for (let key of Object.keys(obj)) {
        if (obj[key] % 2 != 0) {
            result.push(key);
        }
    }
    console.log(result.join(' '));
}
oddOccurances('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')