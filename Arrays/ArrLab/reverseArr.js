function reversedArr(n,arr) {
    let newArr =[];
    let reverseArr = '';
    for (let i = 0; i<n; i++) {
        newArr[i] = arr[i];
    }
    for (let z = newArr.length-1; z>=0; z--) {
        reverseArr += newArr[z] + ' ';
    }
    console.log(reverseArr)
}
reversedArr(3, [10, 20, 30, 40, 50]);