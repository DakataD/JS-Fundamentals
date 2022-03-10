function mathPower(num,power) {
    let result = 1;
    for (let i = 0; i<power; i++) {
        result = result*num;
}
    return result;
}
    console.log(mathPower(2,8))