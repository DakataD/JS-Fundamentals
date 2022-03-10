function muOnline(str) {
    let hp = 100;
    let btc = 0;
    let heal = 0;
    let counter = 0;
    let rooms = list.split("|");
    for (i = 0; i<rooms.length; i++) {
        counter++;
        let tokens = rooms[i].split(' ');
        let command = tokens[0];
        let value = Number(tokens[1]);
        if(command == "potion"){
            hp += value;
            heal = value;
            if(hp > 100){
                heal = Math.abs((hp - 100) - value)
                hp = 100;
            }
            console.log(`You healed for ${heal} hp.`);
            console.log(`Current health: ${hp} hp.`)
        }else if( command == 'chest'){
            btc +=value;
            console.log(`You found ${value} bitcoins.`)
        }else{
            hp -= value;
            if(hp > 0){
                console.log(`You slayed ${command}.`)
            }else{
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${counter}`)
                break;
            }
        }
 
    }
    if(hp > 0){
        console.log(`You've made it!`)
        console.log(`Bitcoins: ${btc}`);
        console.log(`Health: ${hp}`)
    }
}
muOnline('rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000')