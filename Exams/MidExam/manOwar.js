function manOwar(arr) {
    let pirateShipStatus = arr.shift().split('>').map(Number);
    let warShipStatus = arr.shift().split('>').map(Number);
    let maxHealthCapOfSection = Number(arr.shift());
    let flag = false;
    for (let i = 0; i<arr.length; i++) {
        let tokens = arr[i].split(' ');
        let command = tokens[0];
        if (command == 'Retire') {
            break;
        }
        if (command == 'Fire') {
            let idx = Number(tokens[1]);
            let dmg = Number(tokens[2]);
            if (idx<0 || idx >=warShipStatus.length) {
                continue;
            } else {
                warShipStatus[idx]-=dmg;
                let currentSectionHp = warShipStatus[idx];
                if ((currentSectionHp-dmg)<=0) {
                    console.log('You won! The enemy ship has sunken.');
                    flag = true;
                    break;
                }
            }
        } else if (command == 'Defend') {
            let startIdx = Number(tokens[1]);
            let endIdx = Number(tokens[2]);
            let dmg = Number(tokens[3]);

            if ((startIdx<0 || startIdx>=pirateShipStatus.length) || (endIdx<0 || endIdx>=pirateShipStatus.length)) {
                continue;
            } else {
                  for (let z = startIdx; z<=endIdx; z++) {
                    if ((pirateShipStatus[z]-dmg)<= 0) {
                        console.log('You lost! The pirate ship has sunken.');
                        flag = true;
                        break;
                        
                    } else {
                        pirateShipStatus[z]-=dmg;
                    }
                  }
              }             
        } else if (command == 'Repair') {
            let idx = Number(tokens[1]);
            let health = Number(tokens[2]);
            if (idx < 0 || idx>=pirateShipStatus.length) {
                continue;
            } else {
                pirateShipStatus[idx]+=health;
                let healedSec = pirateShipStatus[idx];
                if (healedSec>maxHealthCapOfSection) {
                    pirateShipStatus[idx] = maxHealthCapOfSection;
                }
            }
        } else if (command == 'Status') {
            let counter = 0;
            let lowerHealth = 0.2*maxHealthCapOfSection;
            for (let sec of pirateShipStatus)  {
                if (sec<lowerHealth) {
                    counter++;
                }
            }
            console.log(`${counter} sections need repair.`);
        }      
    }
     if (!(flag)) {
        let pirateSum = 0;
        let warSum = 0;
        for (let el of pirateShipStatus) {
            pirateSum += el;
        }
        for (let el of warShipStatus){
            warSum+= el;
        } 
        console.log(`Pirate ship status: ${pirateSum}`);
        console.log(`Warship status: ${warSum}`);
        }
}
manOwar([

  '12>13>11>20>66',
  '12>22>33>44>55>32>18',
  '70',
  'Fire 2 11',
  'Fire 8 100',
  'Defend 3 6 11',
  'Defend 0 3 5',
  'Repair 1 33',
  'Status',
  'Retire'

])