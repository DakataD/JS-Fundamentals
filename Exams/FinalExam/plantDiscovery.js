function plantDiscovery(input) {
    let numberOfPlants = Number(input.shift());
    let listOfPlants = {};

    while (numberOfPlants>0) {
      let [plant,rarity] = input.shift().split('<->');
      rarity = Number(rarity);

      if (!(Object.keys(listOfPlants).includes(plant))) {
        listOfPlants[plant] = {rarity:rarity,rating:[]};
      } else {
        listOfPlants[plant].rarity = rarity;
      }
      numberOfPlants--;
    }
    
    let command = input.shift();
    while (command != 'Exhibition') {
      let firstSplit = command.split(': ');
      let tokens = firstSplit[1].split(' - ');
      if (listOfPlants.hasOwnProperty(tokens[0])) {
        switch (firstSplit[0]) {
          case 'Rate':
          rate(tokens[0],tokens[1]);break;
          case 'Update':
          update(tokens[0],tokens[1]);break;
          case 'Reset':
          reset(tokens[0]);break;
          default:
          console.log('error');
        }
      } else {
        console.log('error')
      }

      command = input.shift();
    }

    function rate(plant,rating) {
      rating = Number(rating);
      listOfPlants[plant].rating.push(rating)
    }
    function update(plant,rarity) {
      rarity = Number(rarity);
      listOfPlants[plant].rarity = rarity;
    }
    function reset(plant) {
     listOfPlants[plant].rating = [];
    }
    function average(arr) {
     if (!(arr.length)) return 0;
     return arr.reduce((a,b) => a+b,0)/arr.length;
    }
    let rateSort = Object.keys(listOfPlants).sort((a,b) => 
      listOfPlants[b].rarity - listOfPlants[a].rarity || average(listOfPlants[b].rating) - average(listOfPlants[a].rating))
    
    
    console.log('Plants for the exhibition:')
    for (let plant of rateSort) {
      
      console.log(`- ${plant}; Rarity: ${listOfPlants[plant].rarity}; Rating: ${average(listOfPlants[plant].rating).toFixed(2)}`);
    }
}
plantDiscovery(["3",
"Arnoldii<->4",
"Woodii<->7",
"Welwitschia<->2",
"Rate: Woodii - 10",
"Rate: Welwitschia - 7",
"Rate: Arnoldii - 3",
"Rate: Woodii - 5",
"Update: Woodii - 5",
"Reset: Arnoldii",
"Exhibition"])