function sumEvenNum(arr) {
    let result = 0;
    for (let i = 0; i<arr.length; i++) {
        let currentNum = Number(arr[i])
        if (currentNum % 2 == 0) {
            result+=currentNum;
        }
    }
    console.log(result)
}
sumEvenNum(['1','2','3','4','5','6']);
sumEvenNum(['3','5','7','9']);
sumEvenNum(['2','4','6','8','10'])