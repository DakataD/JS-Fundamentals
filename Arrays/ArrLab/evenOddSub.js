function evenOddSub(arr) {
    let evenSum = 0;
    let oddSum = 0;
    
    for (let i = 0; i<arr.length; i++) {
        let currentNum = arr[i];
        if (currentNum % 2 == 0) {
            evenSum+=currentNum;
        } else {
            oddSum+=currentNum;
        }
    }
    let result = evenSum - oddSum;
    console.log(result)
}
evenOddSub([1,2,3,4,5,6]);
evenOddSub([3,5,7,9]);
evenOddSub([2,4,6,8,10]);