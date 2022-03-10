function piccolo(input) {
    let parking = [];
    for (let line of input) {
        let [command,carNumber] = line.split(', ');
        if (command == 'IN') {
            if (!(parking.includes(carNumber))) {
                parking.push(carNumber);
            }
        } else {
            if (parking.includes(carNumber)) {
                let index = parking.indexOf(carNumber);
                parking.splice(index,1)
            }
        }
    }
    let sortedCars = parking.sort((a,b) => a.localeCompare(b));
    if (sortedCars.length >0 ) {
        console.log(sortedCars.join('\n'))
    } else {
        console.log('Parking Lot is Empty')
    }
    
}
piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
)