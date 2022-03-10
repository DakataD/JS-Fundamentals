function sorting(arr) {
    let sortedArr = [];
    
    arr = arr.sort((a,b) => b-a);
    
    while(true) {
        sortedArr.push(arr[0]);
        arr.shift();
        sortedArr.push(arr[arr.length-1]);
        arr.pop();
        if (arr.length == 0) {
            break;
        }
    }
    console.log(sortedArr.join(' '))
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])