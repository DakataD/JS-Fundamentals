function arrayModifier(arr) {
    let modifiedArr = arr.shift().split(' ').map(Number)
    
    for (let i = 0; i<arr.length; i++) {
        let tokens = arr[i].split(' ');
        let command = tokens[0];
        if (command == 'end') {
            break;
        }
        let indexOne = tokens[1];
        let indexTwo = tokens[2];

        if (command == 'swap') {
            let numOne = modifiedArr[indexOne];
            let numTwo = modifiedArr[indexTwo];
            modifiedArr.splice(indexOne,1,numTwo);
            modifiedArr.splice(indexTwo,1,numOne)
        } else if (command == 'multiply') {
            let numOne = modifiedArr[indexOne];
            let numTwo = modifiedArr[indexTwo];
            let result = numOne*numTwo;
            modifiedArr.splice(indexOne,1,result);
        } else if (command == 'decrease') {
            modifiedArr = modifiedArr.map((x) => x-1);
        }
    }
    console.log(modifiedArr.join(', '));
    
}

arrayModifier([
  '1 2 3 4',
  'swap 0 1',
  'swap 1 2',
  'swap 2 3',
  'multiply 1 2',
  'decrease',
  'end'
])