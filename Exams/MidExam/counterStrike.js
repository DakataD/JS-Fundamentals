function counterStrike(arr) {
    
    let energy = Number(arr.shift());
    let counter = 0;
    let wins = 0;

    let index = 0;
    let command = arr[index];
    index++;

    let flag = true;

    while (command != 'End of battle') {
        
        let distance = Number(command);
        

        energy -= distance;

        if (energy >=0) {
            wins++;
            counter++;
            if (counter == 3) {
                energy+=wins;
                counter = 0;
            }
        } else {
            console.log(`Not enough energy! Game ends with ${wins} won battles and ${energy+=distance} energy`);
            flag = false;
            break;
        }
        command = arr[index];
        index++;
    }
    
    if (flag) {
        console.log(`Won battles: ${wins}. Energy left: ${energy}`)
    }
}
counterStrike([
  '100', '10', '10',
  '10',  '1',  '2',
  '3',   '73', '10'
]
  )