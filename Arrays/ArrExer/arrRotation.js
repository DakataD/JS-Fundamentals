function arrRotation(arr, n) {
    let result = '';
    for (let i = 0; i < n; i++) {
        arr[arr.length] = arr[0];
        arr.shift();
    }
    for (let element of arr) {
        result += element + ' ';
    }
    console.log(result)
}
arrRotation([2, 4, 15, 31], 5)