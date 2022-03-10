function distinctArr(arr) {
    let newArr = [];

    for (let i = 0; i<arr.length; i++) {
        let num = arr[i];
        if (!(newArr.includes(num))) {
            newArr.push(num);
        }
    }
    console.log(newArr.join(' '))
}
distinctArr([20, 8, 12, 13, 4, 4, 8, 5])