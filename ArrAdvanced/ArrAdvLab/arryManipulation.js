function arrayManipulation(arr) {
    let newArr = arr.shift(0).split(' ');
    

    for (let i = 0; i<arr.length; i++) {
    let operations = arr[i].split(" ");
        for (let z = 0; z<operations.length; z++) {
            if (operations[z] == "Add") {
                newArr.push(operations[z+1]);
            } else if (operations[z] == "Remove") {
                newArr.filter(x => x !== operations[z+1]);
            } else if (operations[z] == "RemoveAt") {
                newArr.splice(operations[z+1],1)
            } else if (operations[z] == "Insert") {
                newArr.splice(operations[z],0,operations[z+2])
            }
        }
    }
    console.log(newArr);
}
arrayManipulation(['4 19 2 53 6 43',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3']
)
