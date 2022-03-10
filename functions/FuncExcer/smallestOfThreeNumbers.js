function smallestNumber(numOne,numTwo,numThree) {
    let smallest = Number.MAX_SAFE_INTEGER;
    if (numOne<smallest) {
        smallest = numOne;
    }
    if (numTwo<smallest) {
        smallest = numTwo;
    }
    if (numThree < smallest) {
        smallest = numThree;
    }
    console.log(smallest)
}
smallestNumber(25,
21,
4
)