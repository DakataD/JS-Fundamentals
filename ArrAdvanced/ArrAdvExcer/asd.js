function arrManipulator(arrOfNums,arrOfCommands) {

    for (let i = 0; i<arrOfCommands.length; i++) {
        let splitedArr = arrOfCommands[0].split(' ');
        let command = splitedArr[0];
        
        switch (command) {
            case 'add':
                let index = Number(splitedArr[1]);
                let element = Number(splitedArr[2]);
                arrOfNums.splice(index,0,element);
            break;
            case 'addMany':
                let index = splitedArr[1];
                splitedArr.splice(0,2);
                let numsToAdd = splitedArr.map(Number);
                arrOfNums.splice(index,0,...numsToAdd);         
        }
    }
}                
arrManipulator([1, 2, 4, 5, 6, 7],
['add 1 8', 'contains 1', 'contains 3', 'print']
)