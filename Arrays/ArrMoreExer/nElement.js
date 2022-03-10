function nElement(arr) {
    let result = '';
    let step = Number(arr[arr.length-1]);
    for (let i = 0; i<arr.length; i+=step) {
        if (i == arr.length-1) {
            break;
        } else {
            result += `${arr[i]} `;
        }
    }
    console.log(result)
}
nElement(['1', '2', '3', '4', '5', '6']);