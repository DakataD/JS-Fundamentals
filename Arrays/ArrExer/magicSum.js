function magicSum(arr,sum) {
    
    for (let i = 0; i<arr.length; i++) {
        let firstNum = arr[i];
        let result = "";
        for (let z = i+1; z<arr.length; z++) {
            let secondNum = arr[z];
            if (firstNum + secondNum == sum) {
                result+= `${firstNum} ${secondNum}`;
                console.log(result);
            } else {
                continue;
            }
        }
    }
}
magicSum([10,1,2,3,5,6,14,9,7,11,4,0],
11
)