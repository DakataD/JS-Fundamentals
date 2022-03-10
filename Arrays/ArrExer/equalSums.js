function equalSums(arr) {
    let flag = true;
    for (let i = 0; i < arr.length; i++) {
        let specificElement = arr[i];
        let leftSum = 0;
        let rightSum = 0;
        if (arr.length == 1) {
            console.log('0');
            flag = false;
            break;
        }
        for (let z = i + 1; z < arr.length; z++) {
            rightSum += arr[z];
        }
        for (let y = i - 1; y >= 0; y--) {
            if (y < 0) {
                leftSum = 0;
                break;
            } else {
                leftSum += arr[y];
            }
        }
        if (rightSum == leftSum) {
            console.log(`${i}`)
            flag = false;
            break;
        }
    }
    if (flag) {
        console.log('no')
    }
}
equalSums([1])