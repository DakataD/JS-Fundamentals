function firstAndLastK(arr) {
    let kElement = arr.shift();
    let firstK = arr.slice(0,kElement);
    let secondK = arr.slice(arr.length - kElement)
    console.log(firstK.join(' '));
    console.log(secondK.join(' '));
}
firstAndLastK([3,
 6, 7, 8, 9]
)