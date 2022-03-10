function smallest(arr) {
    let result = arr.slice();
    result.sort((a,b) => a-b)
    console.log(result.slice(0,2).join(' '))
}   
smallest([3, 0, 10, 4, 7, 3]);