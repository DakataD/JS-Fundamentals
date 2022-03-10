function gladiatorInvent(arr) {
    let inventory = arr.shift().split(' ');
    
    for (let i = 0; i<arr.length; i++) {
        let elements = arr[i].split(' ');
        let command = elements[0];
        let tokens = elements[1];

        if (command == 'Buy') {
            if (!(inventory.includes(tokens))) {
                inventory.push(tokens)
            }
        } else if (command == 'Trash') {
            if (inventory.includes(tokens)) {
                let idx = inventory.indexOf(tokens);
                inventory.splice(idx,1)
            }
        } else if (command == 'Repair') {
            if (inventory.includes(tokens));
            let idx = inventory.indexOf(tokens);
            let repairedItem = inventory.splice(idx,1);
            inventory.push(...repairedItem);
        } else if (command == 'Upgrade') {
            let splitedToken = tokens.split('-');
            if (inventory.includes(splitedToken[0])) {
                let idx = inventory.indexOf(splitedToken[0])
                inventory.splice((idx+1),0,`${splitedToken[0]}:${splitedToken[1]}`);
            }
        }
        
    }
    console.log(inventory.join(' '))    
}
gladiatorInvent(['SWORD Shield Spear',
'Trash Bow',
'Repair Shield',
'Upgrade Helmet-V']
)