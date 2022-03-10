function repeatString(str,n) {
    let newString = '';
    for (let i = 0; i<n; i++) {
        newString += `${str}`;
    }
    return newString;
}
    let newString = repeatString("abc" , 3)
    console.log(newString)