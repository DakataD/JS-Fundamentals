function inventory(arr) {
    let register = []
    for (let line of arr) {
        let tokens = line.split(' / ');
        let name = tokens[0];
        let level = Number(tokens[1]);
        let items = tokens[2].split(', ').sort((a,b)=> a.localeCompare(b));

        register.push({
            name,
            level,
            items,
        })
    }
    register.sort((a,b) => a.level - b.level);

    register.forEach(hero => {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${(hero.items).join(', ')}`)
    })

}
inventory([
"Isacc / 25 / Apple, GravityGun",
"Derek / 12 / BarrelVest, DestructionSword",
"Hes / 1 / Desolator, Sentinel, Antara"
]
)