function arrManipulator(arrOfNums,arrOfCommands) {
        for (let i = 0; i<arrOfCommands.length; i++) {
            let block = arrOfCommands[i].split(' ');
            let command = block[0];

            switch (command) {
                case 'add':
                    let index = Number(block[1]);
                    let element = Number(block[2]);
                    arrOfNums.splice(index,0,element);
                break;
                case 'addMany':
                    let currentIndex = Number(block[1]);
                    block.splice(0,2);
                    let NumsToAdd = block.map(Number);
                    arrOfNums.splice(currentIndex,0,...NumsToAdd);
                break;
                case 'contains':
                    let num = Number(block[1]);
                    if (arrOfNums.includes(num)) {
                        console.log(arrOfNums.indexOf(num))
                    } else {
                        console.log('-1');
                    }

                break;

                case 'remove': 
                let idx = Number(block[1]);
                arrOfNums.splice(idx,1);

                break;
                
                case 'shift':
                let elementsToShift = Number(block[1]);
                let slicedElements = arrOfNums.slice(0,elementsToShift);
                arrOfNums.splice(0,elementsToShift);
                arrOfNums.push(...slicedElements);
                break;

                case 'sumPairs':
                    let result = []
                    for (let x = 0; x<arrOfNums.length; x+=2){
                        let firstNum = arrOfNums[x];
                        let secondNum = arrOfNums[x+1]
                        
                        if (arrOfNums.indexOf(firstNum) == arrOfNums.length-1) {
                            result.push(firstNum);
                        } else {
                            result.push(firstNum+secondNum);
                        }
                    }
                    arrOfNums = result;
                break;
                case 'print':
                    console.log(`[ ${arrOfNums.join(', ')} ]`)
                    return;
            }
        }
    

}                
arrManipulator([1, 2, 3, 4, 5],
['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']
)