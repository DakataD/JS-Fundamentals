function oddNums(arr) {
    let result = [];

    for (let i = 0; i<arr.length; i++) {
        if (i % 2 == 0) {
            continue;
        } else {
            result.push(arr[i])
        }
    }
    let doubler = x => x*2;

    console.log(result.map(doubler).reverse().join(' '));
}   
oddNums([3, 0, 10, 4, 7, 3])