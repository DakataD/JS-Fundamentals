function needForSpeed(input) {
    let numberOfCars = Number(input.shift());
    let carsList = {};

    while (numberOfCars > 0) {
      let [car,mileage,fuel] = input.shift().split('|');
      mileage = Number(mileage);
      fuel = Number(fuel);
      carsList[car] = {mileage:mileage,fuel:fuel};

      numberOfCars--;
    }
    let command = input.shift();
    while (command != 'Stop') {
      let tokens = command.split(' : ');
      switch (tokens[0]) {
        case 'Drive': drive(tokens[1],tokens[2],tokens[3]);break;
        case 'Refuel': refuel(tokens[1],tokens[2]);break;
        case 'Revert': revert(tokens[1],tokens[2]);break;
      }
      command = input.shift();
    }
    function drive(car,distance,fuel) {
        distance = Number(distance);
        fuel = Number(fuel);
        if (fuel > carsList[car].fuel) {
          console.log(`Not enough fuel to make that ride`)
        } else  {
            carsList[car].fuel-=fuel;
            carsList[car].mileage+=distance;
            console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`)
          }
        
        if (carsList[car].mileage>=100000) {
          delete carsList[car];
          console.log(`Time to sell the ${car}!`);
        }
    }
    function refuel(car,fuel) {
      fuel = Number(fuel);
      let fuelBeforeRefil = carsList[car].fuel;
      carsList[car].fuel+=fuel;
      if (carsList[car].fuel>=75) {
        carsList[car].fuel = 75;
        console.log(`${car} refueled with ${75-fuelBeforeRefil} liters`)
      } else {
        console.log(`${car} refueled with ${fuel} liters`)
      }
    }
    function revert(car,kilometers) {
      kilometers = Number(kilometers);
      carsList[car].mileage-=kilometers;      
      if (carsList[car].mileage<10000) {
        carsList[car].mileage = 10000;
      } else {
        console.log(`${car} mileage decreased by ${kilometers} kilometers`);
      }
    }
    let nameSort = Object.entries(carsList).sort((a, b) => a[0].localeCompare(b[0]));
    let milSort = nameSort.sort((a, b) => b[1].mileage - a[1].mileage);
    for (let kvp of milSort) {
      console.log(`${kvp[0]} -> Mileage: ${kvp[1].mileage} kms, Fuel in the tank: ${kvp[1].fuel} lt.`)
    }
} 
needForSpeed([
  '4',
  'Lamborghini Veneno|11111|74',
  'Bugatti Veyron|12345|67',
  'Koenigsegg CCXR|67890|12',
  'Aston Martin Valkryie|99900|50',
  'Drive : Koenigsegg CCXR : 382 : 82',
  'Drive : Aston Martin Valkryie : 99 : 23',
  'Drive : Aston Martin Valkryie : 2 : 1',
  'Refuel : Lamborghini Veneno : 40',
  'Revert : Bugatti Veyron : 2000',
  'Stop'
])