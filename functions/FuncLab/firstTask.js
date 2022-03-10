function repeatString(symbols , count) {
    let str = '';
    for (let i = 0; i < count; i++){
        str+=symbols;
    }
    return str;
}
console.log(repeatString('abc', 3));

