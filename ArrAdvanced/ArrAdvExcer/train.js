function train(arr) {
    let wagons = arr[0].split(' ');
    wagons = wagons.map(x => Number(x));
    let maxCapacity = Number(arr[1]);
    
    for (let i = 2; i<arr.length; i++) {
        let block = arr[i].split(' ');
        let command = block[0];
        let additionalPass = Number(block[1]);

        if (command == "Add") {
            wagons.push(additionalPass);
        } else {
            for (let z=0; z<wagons.length; z++) {
                if ((wagons[z]+Number(command))<=maxCapacity) {
                    wagons[z] += Number(command)
                    break;              
                }
            }
        }
    }
    console.log(wagons.join(' '))
}
train(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']
)