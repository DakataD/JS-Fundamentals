function numbers(arr) {
    let newArr = arr.split(' ').map(Number);
    let result = [];
    
    let sum = 0;
    for (let nums of newArr) {
        sum+=nums
    } 
    let averageValue = sum/newArr.length;
    
    for (let i = 0; i<newArr.length; i++){    
        let currentNum = newArr[i];
        if (currentNum>averageValue) {
            result.push(currentNum);
        }
    }
    
    if (result.length == 0) {
        console.log('No')
    } else {
    console.log(result.sort((a,b) => b-a).slice(0,5).join(' '))
    }
}
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');