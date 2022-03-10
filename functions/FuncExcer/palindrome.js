function palindrome(arr) {
    for (let num of arr) {
        let reversedNum = num.toString().split('').reverse().join('');
        if (reversedNum == num) {
            console.log("true")
        } else {
            console.log("false")
        }
    }
    
}
palindrome([32,2,232,1010])