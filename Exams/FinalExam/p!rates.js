function pirates(input) {
    let targetCities = {};

    let index = 0;
    let line = input[index];
    index++;

    while (line != 'Sail') {
        let [city,population,gold] = line.split('||');
        population = Number(population);
        gold = Number(gold);
        
        if (!(Object.keys(targetCities).includes(city))) {
            targetCities[city] = {};
            targetCities[city].population = population;
            targetCities[city].gold = gold;
        } else {
            targetCities[city].population+=population;
            targetCities[city].gold+=gold;
        }
        line = input[index];
        index++;
    }

    let idxOfSail = input.indexOf('Sail');
    for (let i = idxOfSail+1; i<input.length; i++) {
        let tokens = input[i].split('=>');
        let command = tokens[0];
        if (command == 'End') {
            
            if ((Object.keys(targetCities)).length >0 ) {
               let entries = Object.entries(targetCities);

               let finalSort = entries.sort((a,b) => {
                   if (a[1].gold == b[1].gold) {
                       return a[0].localeCompare(b[0])
                   } else {
                       return b[1].gold - a[1].gold;
                   }
               })
               
                console.log(`Ahoy, Captain! There are ${finalSort.length} wealthy settlements to go to:`);
                for (let kvp of finalSort) {
                    console.log(`${kvp[0]} -> Population: ${kvp[1].population} citizens, Gold: ${kvp[1].gold} kg`)
                }
            }
        }

        if (command == "Plunder") {
            let currentTown = tokens[1];
            let killedPeople = Number(tokens[2]);
            let stolenGold = Number(tokens[3]);
            console.log(`${currentTown} plundered! ${stolenGold} gold stolen, ${killedPeople} citizens killed.`);

            targetCities[currentTown]['population']-=killedPeople;
            targetCities[currentTown]['gold']-=stolenGold;

            if (targetCities[currentTown]['population'] == 0 || targetCities[currentTown]['gold'] == 0 ) {
                console.log(`${currentTown} has been wiped off the map!`);
                delete targetCities[currentTown];
            }
        } else if (command == 'Prosper') {
            let currentTown = tokens[1];
            let income = Number(tokens[2]);

            if (income<0) {
                console.log(`Gold added cannot be a negative number!`);
            } else {
                targetCities[currentTown]['gold']+=income;
                console.log(`${income} gold added to the city treasury. ${currentTown} now has ${targetCities[currentTown]['gold']} gold.`);
            }

        }
    }
    
}
pirates([
  'Tortuga||345000||1250',
  'Santo Domingo||240000||630',
  'Havana||410000||1100',
  'Sail',
  'Plunder=>Tortuga=>75000=>380',
  'Prosper=>Santo Domingo=>180',
  'End'
])