function passwordValidator(pass) {
    function isLengthBetweenSixAndTen(str) {
        if (str.length >= 6 && str.length<=10) {
            return true;
        } else {
            return false;
        }
    }
    function consistOnlyLettersOrDiggits(str) {
        for (let symbol of str) {
            let symbolChar = symbol.charCodeAt(0);
            if (!(symbolChar>=48 && symbolChar<=57) && !(symbolChar>=65 &&symbolChar<=90) && !(symbolChar>= 97 && symbolChar<=122)) {
                return false;
            }
        }
        return true;
    }
    function atLeastTwoDiggits(str) {
        let counter = 0;
        for (let symbol of str) {
            let symbolChar = symbol.charCodeAt(0)
            if (symbolChar>=48 && symbolChar<=57) {
                counter++;
            }
        }
        if (counter>=2) {
            return true;
        }else {
            return false;
        }
    }
    let isLengthBetween = isLengthBetweenSixAndTen(pass);
    let consistsOnlyOf = consistOnlyLettersOrDiggits(pass);
    let atLeastTwo = atLeastTwoDiggits(pass);
    if (isLengthBetween && consistsOnlyOf && atLeastTwo) {
        console.log('Password is valid');
    }
    if (!(isLengthBetween)) {
        console.log('Password must be between 6 and 10 characters')
    }
    if (!(consistsOnlyOf)) {
        console.log('Password must consist only of letters and digits')
    }
    if (!(atLeastTwo)) {
        console.log('Password must have at least 2 digits');
    }
}
passwordValidator('Pa$s$s');