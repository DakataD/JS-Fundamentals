function addAndSub(arr) {
    let newArr = [];
    let originalSum = 0;
    let modifiedSum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            originalSum += arr[i];
            arr[i] = arr[i] + i;
            modifiedSum += arr[i];
            newArr[i] = arr[i];
        } else {
            originalSum += arr[i];
            arr[i] = arr[i] - i;
            modifiedSum += arr[i];
            newArr[i] = arr[i];
        }
    }
    console.log(newArr);
    console.log(originalSum);
    console.log(modifiedSum);
}
addAndSub([-5, 11, 3, 0, 2])