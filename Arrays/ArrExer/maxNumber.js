function maxNumber(arr) {
    let result = '';

    for (let i = 0; i < arr.length; i++) {
        let currentNum = arr[i];
        let flag = true;
        for (let z = i + 1; z < arr.length; z++) {
            let nextNum = arr[z];
            if (currentNum > nextNum) {
                flag = true;
            } else {
                flag = false;
                break;
            }
        }
        if (flag) {
            result += currentNum + " ";
        }
    }
    console.log(result)
}
maxNumber([27, 19, 42, 2, 13, 45, 48])