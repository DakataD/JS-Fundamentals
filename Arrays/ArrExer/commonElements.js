function commonElements(arr1, arr2) {
    for (let element of arr1) {
        for (let secondElement of arr2) {
            if (element === secondElement) {
                console.log(element);
            }
        }
    }
}
commonElements(
    ['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
    ['s', 'o', 'c', 'i', 'a', 'l']
)
