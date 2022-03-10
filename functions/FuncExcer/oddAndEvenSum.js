function oddAndEvenSum(num) {
    let oddSum = 0;
    let evenSum = 0;
    let numberAsString = num.toString();

    for (let diggit of numberAsString) {
        if (Number(diggit) % 2 == 0) {
            evenSum += Number(diggit)
        } else {
            oddSum += Number(diggit)
        }
    }
    let resultString = `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
    return resultString;
}
console.log(oddAndEvenSum(1000435));