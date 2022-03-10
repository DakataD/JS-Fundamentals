function dungeonestDark(data) {
    let bestRoom = 0;
    let health = 100;
    let coins = 0;
    let dungeon = data[0].split('|')
    for (let room of dungeon) {
        let tokens = room.split(' ');
        let encountered = tokens[0];
        let value = Number(tokens[1]);
        
        if (encountered === "potion") {
            
            if (health + value > 100) {
                console.log(`You healed for ${100-health} hp.`)
                health = 100;
            } else {
                console.log(`You healed for ${value} hp.`)
                health += value;
            }
            console.log(`Current health: ${health} hp.`)
            bestRoom++;

        } else if (encountered === "chest") {
            console.log(`You found ${value} coins.`);
            coins+=value;
            bestRoom++;
        } else {
            health -= value;
            if (health > 0) {
                console.log(`You slayed ${encountered}.`)
                bestRoom++;
            } else  {
                console.log(`You died! Killed by ${encountered}.`);
                bestRoom++;
                console.log(`Best room: ${bestRoom}`)
                break;
            }
        }
    }
    if (bestRoom === dungeon.length) {
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])