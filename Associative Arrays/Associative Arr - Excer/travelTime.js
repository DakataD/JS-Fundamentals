function travelTime(input) {
    let destinations = {};
    for (let line of input) {
        let [country,town,cost] = line.split(' > ');
        cost = Number(cost)
        if (!(Object.keys(destinations).includes(country))) {
            destinations[country] = {};
        }
        if (!(Object.keys(destinations[country]).includes(town))) {
            destinations[country][town] = cost;
        } 
        if (cost < destinations[country][town]) {
            destinations[country][town] = cost;
        }
    }
    let sortedDest = Object.entries(destinations).sort((a,b) => a[0].localeCompare(b[0]));
    for (let [country,towns] of sortedDest) {
        let townsAsEntries = Object.entries(towns).map(x => `${x[0]} -> ${x[1]}`);
        console.log(`${country} -> ${townsAsEntries.join(' ')}`);
    }
}
travelTime([
"Bulgaria > Sofia > 500",
"Bulgaria > Sopot > 800",
"France > Paris > 2000",
"Albania > Tirana > 1000",
"Bulgaria > Sofia > 200"
]
)