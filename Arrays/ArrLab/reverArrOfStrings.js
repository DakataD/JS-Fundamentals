function revArrOfStr(arr) {
    let result = '';
    for (let i = arr.length-1; i>=0; i--){
        result += arr[i] + ' ';
    }
    console.log(result)
}
revArrOfStr(['a', 'b', 'c', 'd', 'e'])